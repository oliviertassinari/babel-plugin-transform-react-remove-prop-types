"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.propTypesExported = void 0;
var propTypesBasic = process.env.NODE_ENV !== "production" ? {
  foo: PropTypes.string
} : {};;

var FooBasic = function FooBasic() {
  return React.createElement("div", null);
};

FooBasic.propTypes = process.env.NODE_ENV !== "production" ? propTypesBasic : {};
var extraReference = process.env.NODE_ENV !== "production" ? {
  bar: PropTypes.string
} : {};;
var propTypesWithExtraReference = process.env.NODE_ENV !== "production" ? Object.assign({}, extraReference, {
  foo: PropTypes.string
}) : {};;

var FooExtraReference = function FooExtraReference() {
  return React.createElement("div", null);
};

FooExtraReference.propTypes = process.env.NODE_ENV !== "production" ? propTypesWithExtraReference : {};
var propTypesWrapped = process.env.NODE_ENV !== "production" ? {
  foo: PropTypes.string
} : {};;

var FooWrapped = function FooWrapped() {
  return React.createElement("div", null);
};

FooWrapped.propTypes = process.env.NODE_ENV !== "production" ? someWrappingFunction(propTypesWrapped) : {};
var propTypesReferenced = {
  foo: PropTypes.string
};

var FooReferenced = function FooReferenced() {
  return React.createElement("div", {
    bar: propTypesReferenced
  });
};

FooReferenced.propTypes = process.env.NODE_ENV !== "production" ? propTypesReferenced : {};
var propTypesExported = {
  foo: PropTypes.string
};
exports.propTypesExported = propTypesExported;

var FooExported = function FooExported() {
  return React.createElement("div", null);
};

FooExported.propTypes = process.env.NODE_ENV !== "production" ? propTypesExported : {};

