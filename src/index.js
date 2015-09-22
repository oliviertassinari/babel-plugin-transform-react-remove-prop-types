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
    }
  };

  return new Plugin('react-remove-prop-types', {
    visitor,
    metadata: {
      group: 'builtin-pre'
    }
  });
};
