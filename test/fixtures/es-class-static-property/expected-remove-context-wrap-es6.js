class Foo1 extends React.Component {

  render() {}
}

process.env.NODE_ENV !== "production" ? Foo1.childContextTypes = {
  bar1: PropTypes.string
} : void 0;
process.env.NODE_ENV !== "production" ? Foo1.contextTypes = {
  bar1: PropTypes.string
} : void 0;
export default class Foo2 extends React.Component {

  render() {}
}
process.env.NODE_ENV !== "production" ? Foo2.childContextTypes = {
  bar2: PropTypes.string
} : void 0;
process.env.NODE_ENV !== "production" ? Foo2.contextTypes = {
  bar2: PropTypes.string
} : void 0;
