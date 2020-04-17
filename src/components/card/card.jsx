import React from 'react';
import BugCard from './bug_card';
import FishCard from './fish_card';
import MusicCard from './music_card';


const Card = (props) => {
  let card;
  if (props.collectible.type === 'bug')
    card = <BugCard {...props} />;
  else if (props.collectible.type === 'fish')
    card = <FishCard {...props} />;
  else if (props.collectible.type === 'music')
    card = <MusicCard {...props} />

  return (
    <div className="card-wrapper">
      { card }
    </div>
  );
}


export default Card;
