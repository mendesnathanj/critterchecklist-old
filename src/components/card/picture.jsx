import React from 'react';

export default ({ src, name }) => (
  <img className="card-picture" src={require(`../../assets/bugs/${src}`)} alt={name} />
);
