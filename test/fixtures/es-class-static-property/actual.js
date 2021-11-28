class Foo1 extends React.Component {
  static propTypes = {
    bar1: PropTypes.string,
  };

  render() {}
}

export default class Foo2 extends React.Component {
  static propTypes = {
    bar2: PropTypes.string,
  };

  render() {}
}

const componentFactory = () => {
  return class Foo3 extends React.Component {
    static propTypes = {
      bar3: PropTypes.string,
    }

    render() {}
  };
};
