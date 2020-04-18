import React from 'react';
import FilterCheckbox from './filter_checkbox';


const FishFilter = props => {
  const { activeMonth, leavesThisMonth, notFoundYet } = props.filter;
  const { toggleLeavesThisMonth, toggleActiveThisMonth, toggleAlreadyFound } = props;

  return (
    <div className="filter-nav">
      <FilterCheckbox header='Leaves this month' active={leavesThisMonth} toggle={toggleLeavesThisMonth} />
      <FilterCheckbox header='Found This Month' active={activeMonth} toggle={toggleActiveThisMonth} />
      <FilterCheckbox header='Not found yet' active={notFoundYet} toggle={toggleAlreadyFound} />
    </div>
  )
};


export default FishFilter;
