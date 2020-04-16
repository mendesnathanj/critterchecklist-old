import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-regular-svg-icons';

const Checkbox = ({ id, found, toggleBug }) => {
  const icon = found ? faCheckSquare : faSquare;

  return <FontAwesomeIcon icon={icon} onClick={() => toggleBug(id)} />;
}


export default Checkbox;
