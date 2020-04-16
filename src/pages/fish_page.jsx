import React from 'react';
import { Link } from 'react-router-dom';

const FishPage = props => {
  const fish = props.fish.map(fish => (
    <div key={fish.id}>
      <div>{fish.name}</div>
      <div>{fish.found === true ? 'found' : 'not found'}</div>
      <button onClick={() => props.toggleFish(fish.id)}>Find me</button>
    </div>
  ));

  return (
    <div>
      <div>hewwo i am the fish page</div>
      <Link to='/'>Home</Link>
      { fish }
    </div>
  )
};


export default FishPage;
