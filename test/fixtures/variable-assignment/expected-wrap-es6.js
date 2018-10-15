const propTypesBasic = process.env.NODE_ENV !== "production" ? {
  foo: PropTypes.string
} : {};

const FooBasic = () => <div />;

FooBasic.propTypes = process.env.NODE_ENV !== "production" ? propTypesBasic : {};
const extraReference = process.env.NODE_ENV !== "production" ? {
  bar: PropTypes.string
} : {};
const propTypesWithExtraReference = process.env.NODE_ENV !== "production" ? Object.assign({}, extraReference, {
  foo: PropTypes.string
}) : {};

const FooExtraReference = () => <div />;

FooExtraReference.propTypes = process.env.NODE_ENV !== "production" ? propTypesWithExtraReference : {};
const propTypesWithExtraReferenceSpread = process.env.NODE_ENV !== "production" ? babelHelpers.objectSpread({}, extraReference, {
  foo: PropTypes.string
}, {
  bar: PropTypes.string
}) : {};

const FooExtraReferenceSpread = () => <div />;

FooExtraReferenceSpread.propTypes = process.env.NODE_ENV !== "production" ? propTypesWithExtraReferenceSpread : {};
const propTypesWrapped = process.env.NODE_ENV !== "production" ? {
  foo: PropTypes.string
} : {};

const FooWrapped = () => <div />;

FooWrapped.propTypes = process.env.NODE_ENV !== "production" ? someWrappingFunction(propTypesWrapped) : {};
const propTypesReferenced = {
  foo: PropTypes.string
};

const FooReferenced = () => <div bar={propTypesReferenced} />;

FooReferenced.propTypes = process.env.NODE_ENV !== "production" ? propTypesReferenced : {};
export const propTypesExported = {
  foo: PropTypes.string
};

const FooExported = () => <div />;

FooExported.propTypes = process.env.NODE_ENV !== "production" ? propTypesExported : {};
const propTypesCreateClass = process.env.NODE_ENV !== "production" ? {
  foo: PropTypes.string
} : {};
const FooCreateClass = createReactClass({
  propTypes: propTypesCreateClass
});
