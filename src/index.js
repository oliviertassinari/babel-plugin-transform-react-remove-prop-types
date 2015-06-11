module.exports = function ({Transformer}) {
  return new Transformer('minification.removeReactPropTypes', {
    Property: {
      exit(node) {
        if (node.computed || node.key.name !== 'propTypes') {
          return;
        }

        const parent = this.findParent((parent) => {
          return parent.type === 'CallExpression';
        });

        if (parent && parent.get('callee').matchesPattern('React.createClass')) {
          if (this.dangerouslyRemove) {
            this.dangerouslyRemove();
          } else {
            this.remove();
          }
        }
      }
    }
  });
};
