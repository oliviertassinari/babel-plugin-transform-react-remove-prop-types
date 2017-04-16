class Foo1 extends React.Component {
  static propTypes = {
    bar1: PropTypes.string,
  };

  static contextTypes = {
    bar1: PropTypes.string,
  };

  static childContextTypes = {
    bar1: PropTypes.string,
  };

  render() {}
}

export default class Foo2 extends React.Component {
  static propTypes = {
    bar2: PropTypes.string,
  };

  static contextTypes = {
    bar2: PropTypes.string,
  };
  
  static childContextTypes = {
    bar2: PropTypes.string,
  };

  render() {}
}
