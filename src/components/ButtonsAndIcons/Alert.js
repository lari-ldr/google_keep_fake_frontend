import React, {useState} from 'react';

const Alert = ({alert}) =>{

    return(
        <>
        <button className="FormIconsItself">{alert}</button>
        {/* <li className="FormIconsItself">{alert}</li> */}
        </>
    )
}

export default Alert;