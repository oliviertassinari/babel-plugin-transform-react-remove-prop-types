class PureRenderComponent extends Component {}

class Foo1 extends PureRenderComponent {
  render() {}

}

Foo1.propTypes = process.env.NODE_ENV !== "production" ? {
  foo1: PropTypes.string.isRequired
} : {};

class Foo2 extends PureRenderComponent {
  render() {}

}

Foo2.propTypes = process.env.NODE_ENV !== "production" ? {
  foo2: PropTypes.string.isRequired
} : {}; // With no inheritance

export class Foo3 {
  render() {}

}
Object.defineProperty(Foo3, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    foo3: PropTypes.string
  }
});
