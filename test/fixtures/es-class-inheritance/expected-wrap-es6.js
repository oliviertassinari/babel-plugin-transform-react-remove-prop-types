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
babelHelpers.defineProperty(Foo3, "propTypes", {
  foo3: PropTypes.string
});
