import React, { PropTypes } from 'react';

const Component = () => <div />;

const referencedPropTypes = process.env.NODE_ENV !== "production" ? {
  variant3: () => {
    const willBeWrapped = 1;
    return null;
  }
} : {};
Component.propTypes = process.env.NODE_ENV !== "production" ? babelHelpers.objectSpread({
  variant1: props => {
    const variants = [null];
    return variantſ[0];
  },
  variant2: chainPropTypes(PropTypes.oneOf(['foo']), props => {
    const deprecatedVariants = ['display4', 'display3', 'display2', 'display1', 'headline', 'title', 'subheading'];
    return null;
  })
}, referencedPropTypes) : {};
export default Component;
