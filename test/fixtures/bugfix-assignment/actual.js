var App = {
  init: function(assets) {
    assets = assets || {};
    if (assets.templates) {
      TemplateStore.init(assets.templates);
    }
  },
};

const FormattedPlural = () => <div />;

process.env.NODE_ENV !== 'production' ? FormattedPlural.propTypes = {
  value: PropTypes.any.isRequired,
} : void 0;
