class Foo1 extends Component {
  static propTypes = {
    foo1: React.PropTypes.string,
  };

  render() {}
}

class Foo2 extends Component {
  render() {}
}

Foo2.propTypes = {
  foo2: React.PropTypes.string,
};
