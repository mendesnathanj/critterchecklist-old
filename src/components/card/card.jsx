import React from 'react';
import BugCard from './bug_card';
import FishCard from './fish_card';
import MusicCard from './music_card';
import FossilCard from './fossil_card';


const Card = (props) => {
  let card;
  if (props.collectible.type === 'bug')
    card = <BugCard {...props} />;
  else if (props.collectible.type === 'fish')
    card = <FishCard {...props} />;
  else if (props.collectible.type === 'music')
    card = <MusicCard {...props} />
  else
    card = <FossilCard {...props} />

  const fossil = props.fossil ? ' fossil' : '';

  return (
    <div className={`card-wrapper${fossil}`}>
      { card }
    </div>
  );
}


export default Card;
