const propTypes = {
  foo: PropTypes.string
};

class Foo extends React.Component {
  render() {}
}

Foo.propTypes = propTypes;

class Getter extends React.Component {
  get foo() {
    return { foo: PropTypes.string };
  }

  render() {}
}

Getter.propTypes = Getter.foo;
