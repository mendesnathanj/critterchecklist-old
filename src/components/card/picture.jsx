import React from 'react';
import LazyLoad from 'react-lazyload';

export default ({ src, name, height, folder }) => (
  <LazyLoad height={height} offset={150}>
    <img className={`card-picture ${folder}-picture`} src={require(`../../assets/${folder}/${src}`)} alt={name} />
  </LazyLoad>
);
