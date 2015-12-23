var App = {
  init: function(assets) {
    assets = assets || {};
    if (assets.templates) {
      TemplateStore.init(assets.templates);
    }
  }
};
