export const propTypes = {
  foo: React.PropTypes.string
};

class Foo extends React.Component {
  render() {}
}

process.env.NODE_ENV !== "production" ? Foo.propTypes = propTypes : void 0;