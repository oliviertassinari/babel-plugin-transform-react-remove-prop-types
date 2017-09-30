var App = {
  init: function (assets) {
    assets = assets || {};

    if (assets.templates) {
      TemplateStore.init(assets.templates);
    }
  }
};

const FormattedPlural = () => <div />;

process.env.NODE_ENV !== 'production' ? void 0 : void 0;
