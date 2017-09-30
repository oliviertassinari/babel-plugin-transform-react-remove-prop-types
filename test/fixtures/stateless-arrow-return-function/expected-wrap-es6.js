import React, { PropTypes } from 'react';
import map from 'lodash/map';

var Message = ({
  mapList
}) => {
  return map(mapList, index => {
    return <div />;
  });
};

Message.propTypes = process.env.NODE_ENV !== "production" ? {
  mapList: PropTypes.array.isRequired
} : {};
export default Message;
