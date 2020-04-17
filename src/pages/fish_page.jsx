import React from 'react';
import { Link } from 'react-router-dom';
import CollectiblesLayout from '../components/collectibles_layout';
import Card from '../components/card/card';

const FishPage = props => {
  const fish = props.fish.map(fish => (
    <Card collectible={fish} toggle={props.toggleFish} />
  ));

  return (
    <div>
      <Link to='/'>Home</Link>
      <div>hewwo i am the fish page</div>
      <CollectiblesLayout>
        { fish }
      </CollectiblesLayout>
    </div>
  )
};


export default FishPage;
