import React, {PropTypes} from 'react';
import map from 'lodash/map';

var Message = ({mapList}) => {
  return map(mapList, (index) => {
    return <div />
  });
};

Message.propTypes = {
  mapList: PropTypes.array.isRequired,
};


Message.contextTypes = {
  mapList: PropTypes.array.isRequired,
};


Message.childContextTypes = {
  mapList: PropTypes.array.isRequired,
};

export default Message;
