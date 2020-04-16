import React from 'react';


const Pill = ({month, active}) => (
  <div className={active ? 'active pill' : 'pill'}>{ month }</div>
);



export default Pill;
