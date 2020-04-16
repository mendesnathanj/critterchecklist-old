import React from 'react';
import { parsedTime } from '../../utils/utils';

const TimeInfo = ({ times }) => (
  <div className="time-info">
    <span>Time:</span>
    <span>{parsedTime(times)}</span>
  </div>
);


export default TimeInfo;
