import React from 'react';


const SettingOption = (props) => {
  const { toggle, option } = props;
  const active = option.includes(props.curr) ? ' active' : '';
  return (
    <div className="option-wrapper" onClick={() => toggle(option)}>
      <span className={`option${active}`}>
        { option[0].toUpperCase() + option.substring(1) }
      </span>
    </div>
  );
}


export default SettingOption;
