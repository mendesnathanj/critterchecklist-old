import React from 'react';
import { Link } from 'react-router-dom';
import CollectiblesLayout from '../components/collectibles_layout';
import Card from '../components/card/card';

const MusicPage = props => {
  const music = props.music
    .sort((a, b) => ('' + a.name).localeCompare(b.name))
    .map(music => (
      <Card key={music.id} collectible={music} toggle={props.toggleMusic} />
    ));

  return (
    <div>
      <div>hewwo i am the music page</div>
      <Link to='/'>Home</Link>
      <CollectiblesLayout>
        { music }
      </CollectiblesLayout>
    </div>
  );
};


export default MusicPage;
