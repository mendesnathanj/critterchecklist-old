import React from 'react';


const MusicLocationInfo = ({ liveOnly }) => (
  <div className="location-info music-location">
    <h3>{ liveOnly ? 'Live Request Only' : 'Resident Services or Live' }</h3>
  </div>
);


export default MusicLocationInfo;
