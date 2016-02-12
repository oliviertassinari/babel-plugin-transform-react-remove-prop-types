function isReturningJSXElement(path) {
  /**
   * Early exit for ArrowFunctionExpressions, there is no ReturnStatement node.
   */
  if (path.node.init && path.node.init.body && path.node.init.body.type === 'JSXElement') {
    return true;
  }

  let visited = false;

  path.traverse({
    ReturnStatement(path2) {
      // We have already found what we are looking for.
      if (visited) {
        return;
      }

      const argument = path2.get('argument');

      if (argument.node.type === 'JSXElement') {
        visited = true;
      } else if (argument.node.type === 'CallExpression') {

        const node = argument.get('callee').node;
        if (node.object.name === 'React' && node.property.name === 'createElement') {
          visited = true;
        }
        
        const name = argument.get('callee').node.name;
        const binding = path.scope.getBinding(name);

        if (!binding) {
          return;
        }

        if (isReturningJSXElement(binding.path)) {
          visited = true;
        }
      }
    },
  });

  return visited;
}

const validPossibleStatelessComponentTypes = [
  'VariableDeclarator',
  'FunctionDeclaration',
];

/**
 * Returns `true` if the path represents a function which returns a JSXElment
 */
export default function isStatelessComponent(path) {
  const node = path.node;

  if (validPossibleStatelessComponentTypes.indexOf(node.type) === -1) {
    return false;
  }

  if (isReturningJSXElement(path)) {
    return true;
  }

  return false;
}
