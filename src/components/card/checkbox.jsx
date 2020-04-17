import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-regular-svg-icons';

const Checkbox = ({ id, found, toggle }) => {
  const icon = found ? faCheckSquare : faSquare;

  return <FontAwesomeIcon className="card-checkbox checkbox" icon={icon} onClick={() => toggle(id)} />;
}


export default Checkbox;
