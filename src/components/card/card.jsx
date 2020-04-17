import React from 'react';
import BugCard from './bug_card';


const Card = (props) => {
  let card;
  if (props.collectible.type === 'bug')
    card = <BugCard {...props} />;

  return (
    <div className="card-wrapper">
      { card }
    </div>
  );
}


export default Card;
