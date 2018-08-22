const propTypesBasic = {
  foo: PropTypes.string
};

const FooBasic = () => (
  <div />
);

FooBasic.propTypes = propTypesBasic;

const extraReference = {
  bar: PropTypes.string
};

const propTypesWithExtraReference = Object.assign({}, extraReference, {
  foo: PropTypes.string
});

const FooExtraReference = () => (
  <div />
);

FooExtraReference.propTypes = propTypesWithExtraReference;

const propTypesWithExtraReferenceSpread = {
  ...extraReference,
  ...({ foo: PropTypes.string }),
  bar: PropTypes.string
};

const FooExtraReferenceSpread = () => (
  <div />
);

FooExtraReferenceSpread.propTypes = propTypesWithExtraReferenceSpread;

const propTypesWrapped = {
  foo: PropTypes.string
};

const FooWrapped = () => (
  <div />
);

FooWrapped.propTypes = someWrappingFunction(propTypesWrapped);

const propTypesReferenced = {
  foo: PropTypes.string
};

const FooReferenced = () => (
  <div bar={propTypesReferenced} />
);

FooReferenced.propTypes = propTypesReferenced;

export const propTypesExported = {
  foo: PropTypes.string
};

const FooExported = () => (
  <div />
);

FooExported.propTypes = propTypesExported;

const propTypesCreateClass = { foo: PropTypes.string };
const FooCreateClass = createReactClass({
  propTypes: propTypesCreateClass
});
