const shapePropType = process.env.NODE_ENV !== "production" ? PropTypes.shape({
  foo: PropTypes.string
}) : {};

const ComponentA = () => <div />;

ComponentA.propTypes = process.env.NODE_ENV !== "production" ? {
  foo: shapePropType.isRequired
} : {};
const somePropTypes = process.env.NODE_ENV !== "production" ? {
  foo: PropTypes.string,
  bar: PropTypes.number
} : {};

const ComponentB = () => <div />;

ComponentB.propTypes = process.env.NODE_ENV !== "production" ? {
  foo: somePropTypes.foo.isRequired
} : {};
const somePropTypesC = process.env.NODE_ENV !== "production" ? {
  foo: PropTypes.string,
  bar: PropTypes.number
} : {};

const ComponentC = () => <div />;

ComponentC.propTypes = process.env.NODE_ENV !== "production" ? {
  foo: somePropTypesC['foo'].isRequired
} : {};
const somePropTypesD = process.env.NODE_ENV !== "production" ? {
  foo: PropTypes.string,
  bar: PropTypes.number
} : {};

const ComponentD = () => <div />;

const foo = {
  bar: 'foo'
};
ComponentD.propTypes = process.env.NODE_ENV !== "production" ? {
  [foo.bar]: somePropTypesD['foo'].isRequired
} : {};
