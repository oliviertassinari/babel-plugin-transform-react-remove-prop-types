class PureRenderComponent extends Component {
}

class Foo1 extends PureRenderComponent {
  static propTypes = {
    foo1: PropTypes.string.isRequired,
  };

  static contextTypes = {
    foo1: PropTypes.string.isRequired,
  };

  static childContextTypes = {
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

Foo2.contextTypes = {
  foo2: PropTypes.string.isRequired,
};

Foo2.childContextTypes = {
  foo2: PropTypes.string.isRequired,
};

// With no inheritance
export class Foo3 {
  static propTypes = {
    foo3: PropTypes.string,
  };

  static contextTypes = {
    foo3: PropTypes.string,
  };

  static childContextTypes = {
    foo3: PropTypes.string,
  };

  render() {}
}
