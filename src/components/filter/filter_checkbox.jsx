import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-regular-svg-icons';


const FilterCheckbox = ({ header, active, toggle }) => {
  const icon = active === true ? faCheckSquare : faSquare;

  return (
    <div className="filter-checkbox-container">
      <h3 className="filter-header">{ header }</h3>
      <FontAwesomeIcon className="checkbox" icon={icon} onClick={() => toggle()} />
    </div>
  );
};


export default FilterCheckbox;
