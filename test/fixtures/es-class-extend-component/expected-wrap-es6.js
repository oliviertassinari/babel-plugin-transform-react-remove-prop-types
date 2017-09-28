class Foo1 extends Component {
  render() {}

}

Foo1.propTypes = process.env.NODE_ENV !== "production" ? {
  foo1: PropTypes.string
} : {};

class Foo2 extends Component {
  render() {}

}

Foo2.propTypes = process.env.NODE_ENV !== "production" ? {
  foo2: PropTypes.string
} : {};
