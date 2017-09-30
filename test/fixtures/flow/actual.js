class Foo1 extends Component {
  props: {
    bar1?: string,
  };
  render() {}
}

export type Props2 = {
  bar2?: string
}

class Foo2 extends Component {
  props: Props2;
  render() {}
}

type Props3 = {
  bar3?: string,
}

function Foo3(props: Props3) {
  return <div />;
}
