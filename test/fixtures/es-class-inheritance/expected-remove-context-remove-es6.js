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
Foo3.propTypes = {
  foo3: PropTypes.string
};
Foo3.contextTypes = {
  foo3: PropTypes.string
};
Foo3.childContextTypes = {
  foo3: PropTypes.string
};
