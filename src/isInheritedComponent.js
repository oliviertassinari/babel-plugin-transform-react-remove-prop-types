const VALID_POSSIBLE_INHERITED_COMPONENT_TYPES = ['VariableDeclarator', 'AssignmentExpression']

export default function isInheritedComponent(path, { types }) {
  if (VALID_POSSIBLE_INHERITED_COMPONENT_TYPES.indexOf(path.node.type) === -1) {
    return false
  }
  let visited = false
  path.traverse({
    CallExpression(path2) {
      if (visited) {
        return
      }
      if (types.isVariableDeclarator(path2.parent) || types.isAssignmentExpression(path2.parent)) {
        const args = path2.node && path2.node.arguments
        if (args) {
          visited = args.some(
            node =>
              node.property &&
              (node.property.name === 'Component' || node.property.name === 'PureComponent')
          )
        }
      }
    },
  })
  return visited
}
