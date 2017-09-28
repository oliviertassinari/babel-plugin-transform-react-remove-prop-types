class PureRenderComponent extends Component {}

class Foo1 extends PureRenderComponent {
  render() {}

}

class Foo2 extends PureRenderComponent {
  render() {}

}

// With no inheritance
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