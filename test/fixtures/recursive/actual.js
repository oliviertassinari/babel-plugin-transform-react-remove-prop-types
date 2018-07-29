import { cloneElement } from 'react'
import PropTypes from 'prop-types'

export default function Composer(props) {
  return renderRecursive(props.children, props.components)
}

Composer.propTypes = {
  children: PropTypes.func.isRequired,
  components: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.element, PropTypes.func]))
    .isRequired,
}

function renderRecursive(render, remaining, results) {
  results = results || []
  if (!remaining[0]) {
    return render(results)
  }

  function nextRender(value) {
    return renderRecursive(render, remaining.slice(1), results.concat([value]))
  }

  return typeof remaining[0] === 'function'
    ? remaining[0]({ results, render: nextRender })
    : cloneElement(remaining[0], { children: nextRender })
}
