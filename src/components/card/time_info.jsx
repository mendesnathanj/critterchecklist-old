import React from 'react';
import { parsedTime } from '../../utils/utils';

const TimeInfo = ({ times }) => {
  const parsed = parsedTime(times).map((time, i) => <span key={i} className="time">{time}</span>);

  return (
    <div className="time-info">
      <span className="time-header">Time:</span>
      <span className="available-times">{parsed}</span>
    </div>
  );
};


export default TimeInfo;
