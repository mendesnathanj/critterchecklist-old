import React from 'react';
import FilterCheckbox from './filter_checkbox';


const FossilFilter = props => {
  const { notFoundYet } = props.filter;
  const { toggleAlreadyFound } = props;

  return (
    <div className="filter-nav">
      <FilterCheckbox header='Not found yet' active={notFoundYet} toggle={toggleAlreadyFound} />
    </div>
  )
};


export default FossilFilter;
