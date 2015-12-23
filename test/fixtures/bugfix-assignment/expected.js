"use strict";

var App = {
  init: function init(assets) {
    assets = assets || {};
    if (assets.templates) {
      TemplateStore.init(assets.templates);
    }
  }
};
