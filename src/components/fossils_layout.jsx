import React from 'react';


export default ({ children }) => {
  return (
    <div className="collectibles-wrapper">
      <div className="fossil-layout">
        { children }
      </div>
    </div>
  )
};
