class Foo1 extends React.Component {
  render() {}

}

Foo1.propTypes = process.env.NODE_ENV !== "production" ? {
  bar1: PropTypes.string
} : {};

class Foo2 extends React.PureComponent {
  render() {}

}

Foo2.propTypes = process.env.NODE_ENV !== "production" ? {
  bar2: PropTypes.string
} : {};