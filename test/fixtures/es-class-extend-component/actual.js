class Foo1 extends Component {
  static propTypes = {
    foo1: PropTypes.string,
  };

  render() {}
}

class Foo2 extends Component {
  render() {}
}

Foo2.propTypes = {
  foo2: PropTypes.string,
};

class Foo1Flow extends Component {
  props:  {
    foo1?: string,
  };
  render() {}
}

type Props = {
  foo2?: string
}

class Foo2Flow extends Component<void, Props, void> {
  props: Props;
  render() {}
}
