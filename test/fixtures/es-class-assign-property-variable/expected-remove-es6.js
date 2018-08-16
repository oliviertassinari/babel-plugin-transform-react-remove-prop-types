class Foo extends React.Component {
  render() {}

}

class Getter extends React.Component {
  get foo() {
    return {
      foo: PropTypes.string
    };
  }

  render() {}

}
