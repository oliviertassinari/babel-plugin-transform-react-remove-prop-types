"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.propTypesExported = void 0;

var FooBasic = function FooBasic() {
  return React.createElement("div", null);
};

var FooExtraReference = function FooExtraReference() {
  return React.createElement("div", null);
};

var FooExtraReferenceSpread = function FooExtraReferenceSpread() {
  return React.createElement("div", null);
};

var FooWrapped = function FooWrapped() {
  return React.createElement("div", null);
};

var propTypesReferenced = {
  foo: PropTypes.string
};

var FooReferenced = function FooReferenced() {
  return React.createElement("div", {
    bar: propTypesReferenced
  });
};

var propTypesExported = {
  foo: PropTypes.string
};
exports.propTypesExported = propTypesExported;

var FooExported = function FooExported() {
  return React.createElement("div", null);
};

var FooCreateClass = createReactClass({
  displayName: "FooCreateClass"
});

var propTypesFunction = function propTypesFunction() {
  return {
    foo: PropTypes.string
  };
};

var FooFunction = function FooFunction() {
  return React.createElement("div", null);
};

var propTypesArrowFunction = function propTypesArrowFunction() {
  return {
    foo: PropTypes.string
  };
};

var FooArrowFunction = function FooArrowFunction() {
  return React.createElement("div", null);
};
