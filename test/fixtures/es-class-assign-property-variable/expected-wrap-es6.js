const propTypes = process.env.NODE_ENV !== "production" ? {
  foo: PropTypes.string
} : {};

class Foo extends React.Component {
  render() {}

}

Foo.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};

class Getter extends React.Component {
  get foo() {
    return {
      foo: PropTypes.string
    };
  }

  render() {}

}

Getter.propTypes = process.env.NODE_ENV !== "production" ? Getter.foo : {};
