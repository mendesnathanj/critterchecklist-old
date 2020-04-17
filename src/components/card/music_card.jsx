import React from 'react';
import Title from './title';
import Picture from './picture';
import { fileName } from '../../utils/utils';
import MusicLocationInfo from './music_location.info';
import Checkbox from './checkbox';


const MusicCard = ({ collectible }) => {
  console.log(collectible);

  const { id, name, liveOnly, found, type } = collectible;

  return (
    <div className="card">
      <Title name={name} />
      <Picture src={fileName(name)} folder={type} alt={name} height={165} />
      <MusicLocationInfo liveOnly={liveOnly} />
      <div className="music-checkbox">
        <Checkbox />
      </div>
    </div>
  );
}


export default MusicCard;
