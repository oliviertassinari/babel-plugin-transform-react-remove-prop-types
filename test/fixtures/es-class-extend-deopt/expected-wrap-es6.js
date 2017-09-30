import BaseComponent from 'components/base';

class Foo extends BaseComponent {
  render() {}

}

Object.defineProperty(Foo, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    foo: PropTypes.string.isRequired
  }
});
