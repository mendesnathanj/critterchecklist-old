import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/card/card';
import CollectiblesLayout from '../components/collectibles_layout';


const FossilPage = props => {
  const fossils = props.fossils.map(fossil => {
    const components = fossil.components.map(id => props.components[id]);
    return <Card key={fossil.id} collectible={fossil} components={components} toggle={props.toggleComponent} />;
  });

  return (
    <div>
      <div>hewwo i am the fossils page</div>
      <Link to='/'>Home</Link>
      <CollectiblesLayout>
        { fossils }
      </CollectiblesLayout>
    </div>
  );
};


export default FossilPage;
