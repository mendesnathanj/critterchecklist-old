import React from 'react';
import FilterCheckbox from './filter_checkbox';
import LocationFilterContainer from './location_filter_container';
import TimeAvailabilityInputContainer from './time_availability_container';


const FishFilter = props => {
  const { activeMonth, leavesThisMonth, notFoundYet } = props.filter;
  const { toggleLeavesThisMonth, toggleActiveThisMonth, toggleAlreadyFound } = props;

  return (
    <div className="filter-nav">
      <FilterCheckbox header='Leaves this month' active={leavesThisMonth} toggle={toggleLeavesThisMonth} />
      <FilterCheckbox header='Found this month' active={activeMonth} toggle={toggleActiveThisMonth} />
      <FilterCheckbox header='Not found yet' active={notFoundYet} toggle={toggleAlreadyFound} />
      <FilterCheckbox active={props.hideAllDay} header='Hide All Day' toggle={props.toggleShowAllDay} />
      <LocationFilterContainer />
      <TimeAvailabilityInputContainer />
    </div>
  )
};


export default FishFilter;
