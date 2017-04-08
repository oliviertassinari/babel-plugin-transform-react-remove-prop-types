class Foo1 extends GlobalComponent {
  static propTypes = {
    foo1: PropTypes.string
  };
  render() {}
}

class Foo2 extends GlobalComponent {
  render() {}
}

Foo2.propTypes = {
  foo2: PropTypes.string
};
