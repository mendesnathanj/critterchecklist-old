import React from 'react';
import BugCard from './bug_card';
import FishCard from './fish_card';


const Card = (props) => {
  let card;
  if (props.collectible.type === 'bug')
    card = <BugCard {...props} />;
  else if (props.collectible.type === 'fish')
    card = <FishCard {...props} />;

  return (
    <div className="card-wrapper">
      { card }
    </div>
  );
}


export default Card;
