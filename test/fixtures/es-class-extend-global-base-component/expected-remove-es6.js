class Foo1 extends GlobalComponent {
  render() {}

}

babelHelpers.defineProperty(Foo1, "propTypes", {
  foo1: PropTypes.string
});

class Foo2 extends GlobalComponent {
  render() {}

}

Foo2.propTypes = {
  foo2: PropTypes.string
};
