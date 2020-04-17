import React from 'react';
import BugsFilter from './bugs_filter_container';
import Settings from './settings';

const Filter = props => {
  let filter;

  if (props.page === 'bugs')
    filter = <BugsFilter page={props.page} filter={props.filter} />;

  return (
    <div>
      { filter }
      <Settings toggleCurrentHemisphere={props.toggleCurrentHemisphere} />
    </div>
  )
};


export default Filter;
