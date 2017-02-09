// @flow weak

function isInside(scope, regex) {
  if (!scope.hub.file.opts) {
    return true;
  }

  const filename = scope.hub.file.opts.filename;

  if (!filename) {
    return true;
  }

  return filename.match(regex) !== null;
}

// Remove a specific path.
export default function remove(path, globalOptions, options) {
  const {
    visitedKey,
    wrapperIfTemplate,
    mode,
    ignoreFilenames,
    types,
  } = globalOptions;

  if (ignoreFilenames && isInside(path.scope, ignoreFilenames)) {
    return;
  }

  if (mode === 'remove') {
    // remove() crash in some conditions.
    if (path.parentPath.type === 'ConditionalExpression') {
      path.replaceWith(types.unaryExpression('void', types.numericLiteral(0)));
    } else {
      path.remove();
    }
  } else if (mode === 'wrap') {
    // Prevent infinity loop.
    if (path.node[visitedKey]) {
      return;
    }

    path.node[visitedKey] = true;

    switch (options.type) {
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
