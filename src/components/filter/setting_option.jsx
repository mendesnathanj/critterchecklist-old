import React from 'react';


const SettingOption = (props) => {
  const { toggle, option } = props;

  return (
    <div onClick={() => toggle(option)}>
      { option }
    </div>
  );
}


export default SettingOption;
