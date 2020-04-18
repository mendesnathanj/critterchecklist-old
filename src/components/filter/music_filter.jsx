import React from 'react';
import FilterCheckbox from './filter_checkbox';


const MusicFilter = props => {
  const { notFoundYet, liveOnly } = props.filter;
  const { toggleOnlyLive, toggleAlreadyFound } = props;

  return (
    <div className="filter-nav">
      <FilterCheckbox header='Live request only' active={liveOnly} toggle={toggleOnlyLive} />
      <FilterCheckbox header='Not found yet' active={notFoundYet} toggle={toggleAlreadyFound} />
    </div>
  )
};


export default MusicFilter;
