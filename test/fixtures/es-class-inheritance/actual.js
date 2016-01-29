class PureRenderComponent extends React.Component {
}

class Foo extends PureRenderComponent {
  static propTypes = {
    foo: PropTypes.string.isRequired
  };
  render () {
  }
}
