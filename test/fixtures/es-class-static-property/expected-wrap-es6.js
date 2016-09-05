class Foo1 extends React.Component {

  render() {}
}

process.env.NODE_ENV !== "production" ? Foo1.propTypes = {
  bar1: React.PropTypes.string
} : void 0;
export default class Foo2 extends React.Component {

  render() {}
}
process.env.NODE_ENV !== "production" ? Foo2.propTypes = {
  bar2: React.PropTypes.string
} : void 0;