const propTypes = process.env.NODE_ENV !== "production" ? {
  foo: PropTypes.string
} : {};;

class Foo extends React.Component {
  render() {}

}

Foo.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
