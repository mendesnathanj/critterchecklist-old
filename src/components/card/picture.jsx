import React from 'react';
import LazyLoad from 'react-lazyload';

export default ({ src, name, height, folder }) => (
  <LazyLoad once height={height} offset={100}>
    <img className="card-picture" src={require(`../../assets/${folder}/${src}`)} alt={name} />
  </LazyLoad>
);
