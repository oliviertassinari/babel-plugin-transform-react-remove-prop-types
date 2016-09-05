import React, { PropTypes } from 'react';
import map from 'lodash/map';

var Message = ({ mapList }) => {
  return map(mapList, index => {
    return <div />;
  });
};

export default Message;