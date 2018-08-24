const FooBasic = () => <div />;

const FooExtraReference = () => <div />;

const FooExtraReferenceSpread = () => <div />;

const FooWrapped = () => <div />;

const propTypesReferenced = {
  foo: PropTypes.string
};

const FooReferenced = () => <div bar={propTypesReferenced} />;

export const propTypesExported = {
  foo: PropTypes.string
};

const FooExported = () => <div />;

const FooCreateClass = createReactClass({});

const propTypesFunction = function () {
  return {
    foo: PropTypes.string
  };
};

const FooFunction = () => <div />;

const propTypesArrowFunction = () => ({
  foo: PropTypes.string
});

const FooArrowFunction = () => <div />;
