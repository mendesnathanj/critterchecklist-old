import React from 'react';
import Title from './title';
import Picture from './picture';
import { fileName } from '../../utils/utils';
import MusicLocationInfo from './music_location.info';
import Checkbox from './checkbox';


const MusicCard = ({ collectible, toggle }) => {
  const { id, name, liveOnly, found, type } = collectible;

  return (
    <div className="card">
      <Title name={name} />
      <Picture src={fileName(name)} folder={type} alt={name} height={165} />
      <MusicLocationInfo liveOnly={liveOnly} />
      <div className="music-checkbox">
        <Checkbox id={id} found={found} toggle={toggle} />
      </div>
    </div>
  );
}


export default MusicCard;
