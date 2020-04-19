import React from 'react';


export default ({ children, additionalClass, fossilHeight }) => {

  if (fossilHeight === undefined) fossilHeight = 'auto';

  let el;
  if (additionalClass !== undefined) {
    el = (
      <div style={{height: fossilHeight}} className={`collectibles${additionalClass}`}>
        { children }
      </div>
    )
  } else {
    el = (
      <div className='collectibles'>
        {children}
      </div>
    );
  }

  return (
    <div className="collectibles-wrapper">
      { el }
    </div>
  )
};
