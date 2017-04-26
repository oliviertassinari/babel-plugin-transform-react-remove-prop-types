class Foo1 extends React.Component {
  render() {}
}

Foo1.propTypes = {
  bar1: PropTypes.string,
};

class Foo2 extends React.Component {
  static propTypes = {
    bar2: PropTypes.string,
  };

  render() {}
}

const Foo3 = () => (
  <div />
);

Foo3.propTypes = {
  bar3: PropTypes.string
};
