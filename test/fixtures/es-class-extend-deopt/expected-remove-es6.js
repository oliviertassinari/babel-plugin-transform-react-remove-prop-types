import BaseComponent from 'components/base';

class Foo extends BaseComponent {
  render() {}
}
Foo.propTypes = {
  foo: PropTypes.string.isRequired
};