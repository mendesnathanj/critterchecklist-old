import React from 'react';
import Title from './title';
import Picture from './picture';
import SeasonInfo from './season_info';
import TimeInfo from './time_info';
import LocationInfo from './location_info';
import CardFooter from './card_footer';
import { fileName } from '../../utils/utils';
import './Card.css';

const BugCard = ({ collectible, toggle }) => {
  const { name, months, times, location, value, id, found, type } = collectible;

  return (
    <div className="card">
      <Title name={name} />
      <Picture folder={type} src={fileName(name)} height={165} />
      <SeasonInfo seasons={months.north} />
      <TimeInfo times={times} />
      <LocationInfo text={location} />
      <CardFooter value={value} id={id} found={found} toggle={toggle} />
    </div>
  );
};


export default BugCard;