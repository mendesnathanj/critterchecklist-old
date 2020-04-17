import React from 'react';

const ValueInfo = ({ value }) => (
  <span className="value">Value: {value.toLocaleString()}</span>
);

export default ValueInfo;
