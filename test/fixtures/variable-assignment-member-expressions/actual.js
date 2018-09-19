const shapePropType = PropTypes.shape({
  foo: PropTypes.string,
});

const ComponentA = () => <div />;
ComponentA.propTypes = {
  foo: shapePropType.isRequired,
};

const somePropTypes = {
  foo: PropTypes.string,
  bar: PropTypes.number,
};

const ComponentB = () => <div />;
ComponentB.propTypes = {
  foo: somePropTypes.foo.isRequired,
};

const somePropTypesC = {
  foo: PropTypes.string,
  bar: PropTypes.number,
};

const ComponentC = () => <div />;
ComponentC.propTypes = {
  foo: somePropTypesC['foo'].isRequired,
};

const somePropTypesD = {
  foo: PropTypes.string,
  bar: PropTypes.number,
};

const ComponentD = () => <div />;
const foo = { bar: 'foo' };
ComponentD.propTypes = {
  [foo.bar]: somePropTypesD['foo'].isRequired,
};
