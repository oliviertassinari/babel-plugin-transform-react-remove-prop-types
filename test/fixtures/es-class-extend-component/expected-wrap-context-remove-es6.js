class Foo1 extends Component {
  render() {}
}

process.env.NODE_ENV !== "production" ? Foo1.propTypes = {
  foo1: PropTypes.string
} : void 0;
class Foo2 extends Component {
  render() {}
}

process.env.NODE_ENV !== "production" ? Foo2.propTypes = {
  foo2: PropTypes.string
} : void 0;
