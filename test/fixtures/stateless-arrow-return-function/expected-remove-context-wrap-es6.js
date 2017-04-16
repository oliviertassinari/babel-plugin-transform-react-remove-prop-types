import React, { PropTypes } from 'react';
import map from 'lodash/map';

var Message = ({ mapList }) => {
  return map(mapList, index => {
    return <div />;
  });
};

process.env.NODE_ENV !== "production" ? Message.contextTypes = {
  mapList: PropTypes.array.isRequired
} : void 0;

process.env.NODE_ENV !== "production" ? Message.childContextTypes = {
  mapList: PropTypes.array.isRequired
} : void 0;

export default Message;
