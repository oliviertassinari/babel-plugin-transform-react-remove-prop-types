class Foo1 extends React.Component {
  render() {}
}

process.env.NODE_ENV !== "production" ? Foo1.propTypes = {
  bar1: PropTypes.string
} : void 0;

Foo1.contextTypes = {
  bar1: PropTypes.string
};

Foo1.childContextTypes = {
  bar1: PropTypes.string
};

class Foo2 extends React.PureComponent {
  render() {}
}

process.env.NODE_ENV !== "production" ? Foo2.propTypes = {
  bar2: PropTypes.string
} : void 0;

Foo1.contextTypes = {
  bar2: PropTypes.string
};

Foo1.childContextTypes = {
  bar2: PropTypes.string
};
