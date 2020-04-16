import React from 'react';
import { Link } from 'react-router-dom';

const BugPage = props => {
  console.log(props);

  const bugs = props.bugs.map(bug => (
    <div key={bug.id}>
      <div>{bug.name}</div>
      <div>{bug.found === true ? 'found' : 'not found'}</div>
      <button onClick={() => {
        const newBug = Object.assign({}, bug);
        newBug.found = true;
        props.updateBug(newBug);
      }}>Find me</button>
    </div>
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
