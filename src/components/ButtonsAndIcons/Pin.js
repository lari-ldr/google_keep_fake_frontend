import React, {useState} from 'react';


const Pin = ({ handlePin, isPinned}) =>{
    // const [pinNote, setPinNote] = useState(false)
  
    const handlePinSetting = ()=>{
        // setPinNote(!pinNote)
        handlePin()
    }
    return(
        <>
        {/* <li className="PinBtn" onClick={handlePinSetting}>{pin}</li> */}
        <li className={`PinBtn ${isPinned === false ? 'material-icons-outlined' : 'material-icons' }`} onClick={handlePinSetting}>push_pin</li>
        {/* <i className="material-icons">push_pin</i>
        <i className="material-icons-outlined">push_pin</i> */}
        </>
    )
}

export default Pin;