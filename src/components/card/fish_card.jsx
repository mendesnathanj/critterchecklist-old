import React from 'react';


const FishCard = ({ collectible, toggle }) => {
  const { name, months, times, location, value, id, found, type, shadowSize } = collectible;

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


export default FishCard;
