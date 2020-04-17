import React from 'react';


const Pill = ({month, active}) => (
  <div className="pill-wrapper">
    <div className={active ? 'active pill' : 'pill'}>{ month }</div>
  </div>
);



export default Pill;
