import React from 'react';
import ValueInfo from './value_info';
import Checkbox from './checkbox';


const CardFooter = ({ id, value, found, toggle }) => (
  <div className="card-footer">
    <ValueInfo value={value} />
    <Checkbox id={id} found={found} toggle={toggle} />
  </div>
);


export default CardFooter;
