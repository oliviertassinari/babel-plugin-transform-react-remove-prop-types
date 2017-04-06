class PureRenderComponent extends Component {
}

class Foo1 extends PureRenderComponent {
  static propTypes = {
    foo1: PropTypes.string.isRequired,
  };
  render() {
  }
}

class Foo2 extends PureRenderComponent {
  render() {
  }
}

Foo2.propTypes = {
  foo2: PropTypes.string.isRequired,
};

// With no inheritance
export class Foo3 {
  static propTypes = {
    foo3: React.PropTypes.string,
  };

  render() {}
}
