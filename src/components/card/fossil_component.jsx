import React from 'react';
import Title from './title';
import CardFooter from './card_footer';


const FossilComponent = ({ component, toggle }) => {
  const { id, name, value, found } = component;

  return (
    <div className="fossil-component">
      <Title name={name} />
      <CardFooter id={id} found={found} value={value} toggle={toggle} />
    </div>
  )
}


export default FossilComponent;
