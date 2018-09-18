import BaseComponent from 'components/base';

class Foo extends BaseComponent {
  render() {}

}

babelHelpers.defineProperty(Foo, "propTypes", {
  foo: PropTypes.string.isRequired
});
