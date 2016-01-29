class PureRenderComponent extends Component {
}

class Foo extends PureRenderComponent {
  static propTypes = {
    foo: PropTypes.string.isRequired
  };
  render () {
  }
}
