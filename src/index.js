export default function ({ Plugin, types: t }) {
  const visitor = {
    Property: {
      exit(node) {
        if (node.computed || node.key.name !== 'propTypes') {
          return;
        }

        const parent = this.findParent((parent) => {
          if (parent.type !== 'CallExpression') {
            return false;
          }

          return parent.get('callee').matchesPattern('React.createClass');
        });

        if (parent) {
          this.dangerouslyRemove();
        }
      }
    },
    AssignmentExpression(node) {
      if (node.left.computed || node.left.property.name !== 'propTypes') {
        return;
      }

      const className = node.left.object.name;
      const binding = this.scope.getBinding(className);
      if (!binding || !binding.path.isClassDeclaration()) {
        return;
      }

      const superClass = binding.path.get('superClass');
      if (superClass.matchesPattern('React.Component') || superClass.matchesPattern('Component')) {
        this.dangerouslyRemove();
      }
    }
  };

  return new Plugin('react-remove-prop-types', {
    visitor,
    metadata: {
      group: 'builtin-pre'
    }
  });
};
