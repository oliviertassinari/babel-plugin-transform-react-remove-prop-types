class Foo1 extends GlobalComponent {
  render() {}

}

Object.defineProperty(Foo1, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    foo1: PropTypes.string
  }
});

class Foo2 extends GlobalComponent {
  render() {}

}

Foo2.propTypes = {
  foo2: PropTypes.string
};
