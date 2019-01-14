// @flow weak
/* eslint-env mocha */

import path from 'path'
import fs from 'fs'
import globby from 'globby'
import { assert } from 'chai'
import { transformFileSync } from '@babel/core'
import babelPluginSyntaxJsx from '@babel/plugin-syntax-jsx'
import babelPluginExternalHelpers from '@babel/plugin-external-helpers'
import babelPluginTransformClassProperties from '@babel/plugin-proposal-class-properties'
import babelPluginProposalObjectRestSpread from '@babel/plugin-proposal-object-rest-spread'
import babelPluginTransformReactRemovePropTypes from '../src/index'
import { trim } from './utils'

const modes = ['options', 'remove-es5', 'wrap-es5', 'remove-es6', 'wrap-es6']

describe('fixtures', () => {
  const fixturesDir = path.join(__dirname, 'fixtures')

  fs.readdirSync(fixturesDir).forEach(caseName => {
    describe(`should work with ${caseName.split('-').join(' ')}`, () => {
      const fixtureDir = path.join(fixturesDir, caseName)

      // Only run a specific test
      // if (caseName !== 'const-in-anonymous-validator') {
      //   return
      // }

      modes.forEach(mode => {
        let expected
        let options = {}

        const optionsPaths = globby.sync(path.join(fixtureDir, 'options.{js,json}'))

        optionsPaths.forEach(optionsPath => {
          options = require(optionsPath) // eslint-disable-line global-require, import/no-dynamic-require
        })

        const filename = mode === 'options' ? 'expected.js' : `expected-${mode}.js`

        try {
          expected = fs.readFileSync(path.join(fixtureDir, filename))
          expected = expected.toString()
        } catch (error) {
          // Only run the check if the expect file is or have an option provided.
          if (!options.throws) {
            return
          }
        }

        it(mode, () => {
          let babelConfig

          switch (mode) {
            case 'remove-es5':
              babelConfig = {
                plugins: [
                  babelPluginExternalHelpers,
                  babelPluginProposalObjectRestSpread,
                  [
                    babelPluginTransformReactRemovePropTypes,
                    {
                      ...options,
                      mode: 'remove',
                    },
                  ],
                ],
              }
              break

            case 'wrap-es5':
              babelConfig = {
                plugins: [
                  babelPluginExternalHelpers,
                  babelPluginProposalObjectRestSpread,
                  [
                    babelPluginTransformReactRemovePropTypes,
                    {
                      ...options,
                      mode: 'wrap',
                    },
                  ],
                ],
              }
              break

            case 'remove-es6':
              babelConfig = {
                babelrc: false,
                plugins: [
                  babelPluginExternalHelpers,
                  babelPluginSyntaxJsx,
                  babelPluginTransformClassProperties,
                  babelPluginProposalObjectRestSpread,
                  [
                    babelPluginTransformReactRemovePropTypes,
                    {
                      ...options,
                      mode: 'remove',
                    },
                  ],
                ],
              }
              break

            case 'wrap-es6':
              babelConfig = {
                babelrc: false,
                plugins: [
                  babelPluginExternalHelpers,
                  babelPluginSyntaxJsx,
                  babelPluginTransformClassProperties,
                  babelPluginProposalObjectRestSpread,
                  [
                    babelPluginTransformReactRemovePropTypes,
                    {
                      ...options,
                      mode: 'wrap',
                    },
                  ],
                ],
              }
              break

            default:
              babelConfig = {
                plugins: [
                  babelPluginExternalHelpers,
                  babelPluginProposalObjectRestSpread,
                  [babelPluginTransformReactRemovePropTypes, options],
                ],
              }
          }

          try {
            const actual = transformFileSync(path.join(fixtureDir, 'actual.js'), babelConfig).code
            // Write the output
            // fs.writeFileSync(path.join(fixtureDir, filename), `${actual}\n`)
            assert.strictEqual(trim(actual), trim(expected))
          } catch (err) {
            if (options.throws) {
              assert.strictEqual(
                err.message.indexOf(options.throws) > 0,
                true,
                `Expected to throw: ${options.throws}. Have: ${err.message}`
              )
            } else {
              throw err
            }
          }
        })
      })
    })
  })
})
