class Foo1 extends Component {
  render() {}
}

Foo1.contextTypes = {
  bar1: PropTypes.string
};
Foo1.childContextTypes = {
  bar1: PropTypes.string
};
class Foo2 extends Component {
  render() {}
}

Foo2.contextTypes = {
  bar2: PropTypes.string
};

Foo1.childContextTypes = {
  bar2: PropTypes.string
};
