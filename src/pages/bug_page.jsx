import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/card/card';

const BugPage = props => {
  const bugs = props.bugs.map(bug => (
    <Card key={bug.id} collectible={bug} toggleBug={props.toggleBug} />
  ));

  return (
    <div>
      <div>hewwo i am the bugs page</div>
      <Link to='/'>Home</Link>
      { bugs }
    </div>
  )
};


export default BugPage;
