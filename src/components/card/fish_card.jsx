import React from 'react';
import Title from './title';
import Picture from './picture';
import SeasonInfo from './season_info';
import TimeInfo from './time_info';
import LocationInfo from './location_info';
import CardFooter from './card_footer';
import './Card.css';
import ShadowInfo from './shadow_info';

const FishCard = ({ collectible, toggle }) => {
  const { name, months, times, location, value, id, found, type, shadowSize, fileName } = collectible;

  return (
    <div className="card">
      <Title name={name} />
      <Picture folder={type} src={fileName} height={125} />
      <SeasonInfo seasons={months.north} />
      <TimeInfo times={times} />
      <ShadowInfo size={shadowSize} />
      <LocationInfo text={location} />
      <CardFooter value={value} id={id} found={found} toggle={toggle} />
    </div>
  );
};


export default FishCard;
