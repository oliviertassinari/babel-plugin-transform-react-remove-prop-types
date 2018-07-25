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
