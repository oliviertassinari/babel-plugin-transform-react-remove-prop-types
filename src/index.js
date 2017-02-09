// @flow weak

import isStatelessComponent from './isStatelessComponent';
import remove from './remove';

function isPathReactClass(path) {
  if (path.matchesPattern('React.Component') ||
    path.matchesPattern('React.PureComponent')) {
    return true;
  }

  if ((path.node && (
    path.node.name === 'Component' ||
    path.node.name === 'PureComponent'
    ))) {
    return true;
  }

  return false;
}

function isReactClass(superClass, scope) {
  let answer = false;

  if (isPathReactClass(superClass)) {
    answer = true;
  } else if (superClass.node.name) { // Check for inheritance
    const className = superClass.node.name;
    const binding = scope.getBinding(className);
    if (!binding) {
      answer = false;
    } else {
      superClass = binding.path.get('superClass');

      if (isPathReactClass(superClass)) {
        answer = true;
      }
    }
  }

  return answer;
}

export default function ({ template, types }) {
  return {
    visitor: {
      Program(programPath, state) {
        let ignoreFilenames;

        if (state.opts.ignoreFilenames) {
          ignoreFilenames = new RegExp(state.opts.ignoreFilenames.join('|'), 'gi');
        } else {
          ignoreFilenames = undefined;
        }

        const globalOptions = {
          visitedKey: `transform-react-remove-prop-types${Date.now()}`,
          wrapperIfTemplate: template(`
            if (process.env.NODE_ENV !== "production") {
              NODE;
            }
          `),
          mode: state.opts.mode || 'remove',
          ignoreFilenames,
          types,
        };

        // On program start, do an explicit traversal up front for this plugin.
        programPath.traverse({
          ObjectProperty: {
            exit(path) {
              const node = path.node;

              if (node.computed || node.key.name !== 'propTypes') {
                return;
              }

              const parent = path.findParent((currentNode) => {
                if (currentNode.type !== 'CallExpression') {
                  return false;
                }

                return currentNode.get('callee').matchesPattern('React.createClass');
              });

              if (parent) {
                remove(path, globalOptions, {
                  type: 'createClass',
                });
              }
            },
          },
          // Here to support stage-1 transform-class-properties.
          ClassProperty(path) {
            const {
              node,
              scope,
            } = path;

            if (node.key.name === 'propTypes') {
              const pathClassDeclaration = scope.path;

              if (isReactClass(pathClassDeclaration.get('superClass'), scope)) {
                remove(path, globalOptions, {
                  type: 'class static',
                  pathClassDeclaration,
                });
              }
            }
          },
          AssignmentExpression(path) {
            const {
              node,
              scope,
            } = path;

            if (node.left.computed || !node.left.property || node.left.property.name !== 'propTypes') {
              return;
            }

            const className = node.left.object.name;
            const binding = scope.getBinding(className);

            if (!binding) {
              return;
            }

            if (binding.path.isClassDeclaration()) {
              const superClass = binding.path.get('superClass');

              if (isReactClass(superClass, scope)) {
                remove(path, globalOptions, {
                  type: 'class assign',
                });
              }
            } else if (isStatelessComponent(binding.path)) {
              remove(path, globalOptions, {
                type: 'stateless',
              });
            }
          },
        });
      },
    },
  };
}
