class Foo1 extends React.Component {

  render() {}
}

Foo1.contextTypes = {
  bar1: PropTypes.string
};
Foo1.childContextTypes = {
  bar1: PropTypes.string
};
process.env.NODE_ENV !== "production" ? Foo1.propTypes = {
  bar1: PropTypes.string
} : void 0;
export default class Foo2 extends React.Component {

  render() {}
}
Foo2.contextTypes = {
  bar2: PropTypes.string
};
Foo2.childContextTypes = {
  bar2: PropTypes.string
};
process.env.NODE_ENV !== "production" ? Foo2.propTypes = {
  bar2: PropTypes.string
} : void 0;
