// @flow weak

import isStatelessComponent from './isStatelessComponent';
import remove from './remove';

function isPathReactClass(path) {
  if (path.matchesPattern('React.Component') ||
    path.matchesPattern('React.PureComponent')) {
    return true;
  }

  const node = path.node;

  if (node && (node.name === 'Component' || node.name === 'PureComponent')) {
    return true;
  }

  return false;
}

function isReactClass(superClass, scope) {
  if (!superClass.node) {
    return false;
  }

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
        let contextMode;
        let includeContext;
        const mode = state.opts.mode || 'remove';

        if (state.opts.contextMode === 'wrap' || state.opts.contextMode === 'remove') {
          contextMode = state.opts.contextMode;
          includeContext = true;
        } else {
          includeContext = false;
        }

        const isContextTypes = (str) => {
          return includeContext && (str === 'contextTypes' || str === 'childContextTypes');
        };

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
          ignoreFilenames,
          types,
          removeImport: state.opts.removeImport || false,
        };

        // On program start, do an explicit traversal up front for this plugin.
        programPath.traverse({
          ObjectProperty: {
            exit(path) {
              const node = path.node;
              const isKeyContextTypes = isContextTypes(node.key.name);

              if (node.computed || (node.key.name !== 'propTypes' &&
                !isKeyContextTypes)) {
                return;
              }

              const parent = path.findParent((currentNode) => {
                if (currentNode.type !== 'CallExpression') {
                  return false;
                }

                return currentNode.get('callee').node.name === 'createReactClass';
              });

              if (parent) {
                remove(path, globalOptions, {
                  type: 'createClass',
                  mode: isKeyContextTypes ? contextMode : mode,
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
            const isKeyContextTypes = isContextTypes(node.key.name);

            if (node.key.name === 'propTypes' || isKeyContextTypes) {
              const pathClassDeclaration = scope.path;

              if (isReactClass(pathClassDeclaration.get('superClass'), scope)) {
                remove(path, globalOptions, {
                  type: 'class static',
                  pathClassDeclaration,
                  mode: isKeyContextTypes ? contextMode : mode,
                });
              }
            }
          },
          AssignmentExpression(path) {
            const {
              node,
              scope,
            } = path;

            if (node.left.computed || !node.left.property) {
              return;
            }

            const isKeyContextTypes = isContextTypes(node.left.property.name);

            if (node.left.property.name !== 'propTypes' && !isKeyContextTypes) {
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
                  mode: isKeyContextTypes ? contextMode : mode,
                });
              }
            } else if (isStatelessComponent(binding.path)) {
              remove(path, globalOptions, {
                type: 'stateless',
                mode: isKeyContextTypes ? contextMode : mode,
              });
            }
          },
        });

        if (globalOptions.removeImport && mode === 'remove') {
          programPath.scope.crawl();

          programPath.traverse({
            ImportDeclaration(path) {
              const { source, specifiers } = path.node;
              if (source.value !== 'prop-types') {
                return;
              }
              const haveUsedSpecifiers = specifiers.some((specifier) => {
                const importedIdentifierName = specifier.local.name;
                const { referencePaths } = path.scope.getBinding(importedIdentifierName);
                return referencePaths.length > 0;
              });

              if (!haveUsedSpecifiers) {
                path.remove();
              }
              path.stop();
            },
          });
        }
      },
    },
  };
}
