import isStatelessComponent from './isStatelessComponent';

export default function ({ Plugin, types: t }) {
  return {
    visitor: {
      Program(path) {
        // On program start, do an explicit traversal up front for this plugin.
        path.traverse({
          ObjectProperty: {
            exit(path) {
              const node = path.node;

              if (node.computed || node.key.name !== 'propTypes') {
                return;
              }

              const parent = path.findParent((parent) => {
                if (parent.type !== 'CallExpression') {
                  return false;
                }

                return parent.get('callee').matchesPattern('React.createClass');
              });

              if (parent) {
                path.remove();
              }
            }
          },
          ClassProperty(path) {
            const {
              node,
              scope,
            } = path;

            if (node.key.name === 'propTypes') {
              const id = scope.block.id;

              let superClass = scope.path.get('superClass');

              if (superClass.matchesPattern('React.Component') ||
                superClass.node.name === 'Component') {
                path.remove();
              } else if (superClass.node.name) { // Check for inheritance
                const className = superClass.node.name;
                const binding = scope.getBinding(className);
                superClass = binding.path.get('superClass');

                if (superClass.matchesPattern('React.Component') ||
                  (superClass.node && superClass.node.name === 'Component')) {
                  path.remove();
                }
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
              if (superClass.matchesPattern('React.Component') || superClass.matchesPattern('Component')) {
                path.remove();
              }
            } else if (isStatelessComponent(binding.path)) {
              path.remove();
            }
          },
        });
      },
    },
  };
}
