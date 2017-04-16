class Foo1 extends React.Component {

  render() {}
}

process.env.NODE_ENV !== "production" ? Foo1.propTypes = {
  bar1: PropTypes.string
} : void 0;
export default class Foo2 extends React.Component {

  render() {}
}
process.env.NODE_ENV !== "production" ? Foo2.propTypes = {
  bar2: PropTypes.string
} : void 0;
