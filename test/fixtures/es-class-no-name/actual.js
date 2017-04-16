export default class extends React.Component {
  static propTypes = {
    foo: PropTypes.string,
  };

  static contextTypes = {
    foo: PropTypes.string.isRequired,
  };

  static childContextTypes = {
    foo: PropTypes.string.isRequired,
  };

  render() {}
}
