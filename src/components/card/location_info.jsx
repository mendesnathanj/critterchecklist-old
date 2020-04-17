import React from 'react';


const LocationInfo = ({ text }) => (
  <div className="location-info">
    <span className="location-header">Location:</span>
    <p className="location-text">{ text }</p>
  </div>
);


export default LocationInfo;
