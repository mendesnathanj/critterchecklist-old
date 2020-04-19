import React from 'react';
import Pill from './pill';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


const SeasonInfo = ({ seasons }) => {
  const pills = MONTHS.map(month => {
    const active = seasons[month] ? true : false;
    return <Pill key={month} month={month} active={active} />;
  });

  return (
    <div className="season-info-container">
      <h3 className="season-header">Season:</h3>
      <div className="pills-container">
        { pills }
      </div>
    </div>
  )
}

export default SeasonInfo;
