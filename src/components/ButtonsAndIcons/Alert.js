import React from 'react';

const Alert = () => {
  return (
    <>
      <label for='alertBtn' className='material-icons FormIconsItself'>
        add_alert
      </label>
      <input id='alertBtn' type='button' />
      {/* <li className="FormIconsItself">{alert}</li> */}
    </>
  );
};

export default Alert;
