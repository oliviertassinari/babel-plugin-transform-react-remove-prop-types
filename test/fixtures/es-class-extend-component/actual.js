class Foo1 extends Component {
  static propTypes = {
    foo1: PropTypes.string,
  };

  static contextTypes = {
    bar1: PropTypes.string,
  };

  static childContextTypes = {
    bar1: PropTypes.string,
  };
  render() {}
}

class Foo2 extends Component {
  render() {}
}

Foo2.propTypes = {
  foo2: PropTypes.string,
};

Foo2.contextTypes = {
  bar2: PropTypes.string,
};

Foo1.childContextTypes = {
  bar2: PropTypes.string,
};
