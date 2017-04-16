class PureRenderComponent extends Component {}

class Foo1 extends PureRenderComponent {

  render() {}
}

Foo1.contextTypes = {
  foo1: PropTypes.string.isRequired
};
Foo1.childContextTypes = {
  foo1: PropTypes.string.isRequired
};
class Foo2 extends PureRenderComponent {
  render() {}
}

Foo2.contextTypes = {
  foo2: PropTypes.string.isRequired
};

Foo2.childContextTypes = {
  foo2: PropTypes.string.isRequired
};

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
