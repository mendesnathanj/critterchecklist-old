import React from 'react';
import { Link } from 'react-router-dom';
import CollectiblesLayout from '../components/collectibles_layout';
import Card from '../components/card/card';

const BugPage = props => {
  const bugs = props.bugs
    .sort((a, b) => ('' + a.name).localeCompare(b.name))
    .map(bug => (
      <Card key={bug.id} collectible={bug} toggle={props.toggleBug} />
    ));

  return (
    <div>
      <Link to='/'>Home</Link>
      <div>hewwo i am the bugs page</div>
      <CollectiblesLayout>
        { bugs }
      </CollectiblesLayout>
    </div>
  )
};


export default BugPage;
