// @flow weak

import isStatelessComponent from './isStatelessComponent';

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
    superClass = binding.path.get('superClass');

    if (isPathReactClass(superClass)) {
      answer = true;
    }
  }

  return answer;
}

function remove(path, options) {
  const {
    visitedKey,
    wrapperIfTemplate,
    mode,
    type,
    types,
  } = options;

  if (mode === 'remove') {
    path.remove();
  } else if (mode === 'wrap') {
    // Prevent infinity loop.
    if (path.node[visitedKey]) {
      return;
    }

    path.node[visitedKey] = true;

    switch (type) {
      // This is legacy, we do not optimize it.
      case 'createClass':
        break;

      // Inspired from babel-plugin-transform-class-properties.
      case 'class static': {
        let ref;
        let pathClassDeclaration = options.pathClassDeclaration;

        if (!pathClassDeclaration.isClassExpression() && pathClassDeclaration.node.id) {
          ref = pathClassDeclaration.node.id;
        } else {
          // Class without name not supported
          return;
        }

        const node = types.expressionStatement(
          types.assignmentExpression('=', types.memberExpression(ref, path.node.key), path.node.value),
        );

        // We need to append the node at the parent level in this case.
        if (pathClassDeclaration.parentPath.isExportDeclaration()) {
          pathClassDeclaration = pathClassDeclaration.parentPath;
        }
        pathClassDeclaration.insertAfter(node);

        path.remove();
        break;
      }

      case 'class assign':
      case 'stateless':
        path.replaceWith(wrapperIfTemplate(
          {
            NODE: path.node,
          },
        ));
        break;

      default:
        break;
    }
  } else {
    throw new Error(`transform-react-remove-prop-type: unsupported mode ${mode}.`);
  }
}

export default function ({ template, types }) {
  const wrapperIfTemplate = template(`
    if (process.env.NODE_ENV !== "production") {
      NODE;
    }
  `);

  const VISITED_KEY = `transform-react-remove-prop-types${Date.now()}`;

  return {
    visitor: {
      Program(programPath, state) {
        const mode = state.opts.mode || 'remove';

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
                remove(path, {
                  visitedKey: VISITED_KEY,
                  wrapperIfTemplate,
                  mode,
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
                remove(path, {
                  visitedKey: VISITED_KEY,
                  wrapperIfTemplate,
                  mode,
                  type: 'class static',
                  types,
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
                remove(path, {
                  visitedKey: VISITED_KEY,
                  wrapperIfTemplate,
                  mode,
                  type: 'class assign',
                });
              }
            } else if (isStatelessComponent(binding.path)) {
              remove(path, {
                visitedKey: VISITED_KEY,
                wrapperIfTemplate,
                mode,
                type: 'stateless',
              });
            }
          },
        });
      },
    },
  };
}
