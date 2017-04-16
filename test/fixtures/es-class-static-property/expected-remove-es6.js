class Foo1 extends React.Component {

  render() {}
}

Foo1.contextTypes = {
  bar1: PropTypes.string
};
Foo1.childContextTypes = {
  bar1: PropTypes.string
};
export default class Foo2 extends React.Component {

  render() {}
}
Foo2.contextTypes = {
  bar2: PropTypes.string
};
Foo2.childContextTypes = {
  bar2: PropTypes.string
};
