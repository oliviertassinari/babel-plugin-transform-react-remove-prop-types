class Foo1 extends React.Component {
  render() {}
}

Foo1.propTypes = {
  bar1: PropTypes.string,
};

Foo1.contextTypes = {
  bar1: PropTypes.string,
};

Foo1.childContextTypes = {
  bar1: PropTypes.string,
};

class Foo2 extends React.PureComponent {
  render() {}
}

Foo2.propTypes = {
  bar2: PropTypes.string,
};

Foo2.contextTypes = {
  bar2: PropTypes.string,
};

Foo2.childContextTypes = {
  bar2: PropTypes.string,
};
