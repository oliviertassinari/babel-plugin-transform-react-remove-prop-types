class PureRenderComponent extends Component {}

class Foo1 extends PureRenderComponent {
  render() {}
}

process.env.NODE_ENV !== "production" ? Foo1.propTypes = {
  foo1: PropTypes.string.isRequired
} : void 0;
class Foo2 extends PureRenderComponent {
  render() {}
}

process.env.NODE_ENV !== "production" ? Foo2.propTypes = {
  foo2: PropTypes.string.isRequired
} : void 0;

// With no inheritance
export class Foo3 {

  render() {}
}
Foo3.propTypes = {
  foo3: PropTypes.string
};
