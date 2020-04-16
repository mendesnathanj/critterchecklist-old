import React from 'react';
import Title from './title';
import Picture from './picture';
import SeasonInfo from './season_info';
import TimeInfo from './time_info';
import LocationInfo from './location_info';
import ValueInfo from './value_info';
import Checkbox from './checkbox';
import { fileName } from '../../utils/utils';
import './Card.css';

const Card = ({ collectible, toggleBug }) => (
  <div>
    <Title name={collectible.name} />
    <Picture src={fileName(collectible.name)} />
    <SeasonInfo seasons={collectible.months.north} />
    <TimeInfo times={collectible.times} />
    <LocationInfo text={collectible.location} />
    <div>
      <ValueInfo value={collectible.value} />
      <Checkbox id={collectible.id} found={collectible.found} toggleBug={toggleBug} />
    </div>
  </div>
)


export default Card;
