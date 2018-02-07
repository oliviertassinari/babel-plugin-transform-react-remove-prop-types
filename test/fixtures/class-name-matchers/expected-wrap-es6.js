import BaseComponent from 'components/base';

class Foo extends BaseComponent {
  render() {}

}

Foo.propTypes = process.env.NODE_ENV !== "production" ? {
  bar: PropTypes.string
} : {};
