import React, {useState} from 'react';


const Pin = ({ checkedPin, onChangePinned}) =>{
    const [isPinned, setIsPinned] = useState(false)
  
    const handlePinIcon = ()=>{
        setIsPinned(!isPinned)
    }
    return(
        <>
            <label 
              className={`PinBtn ${isPinned === false ? 'material-icons-outlined' : 'material-icons' }`}
              // className="FormIconsItself"
            >            
            <input
            // aria-label="true"  
            type="checkbox"
            name="is_pinned"
            checked={checkedPin}
            onChange={onChangePinned}
            onClick={handlePinIcon}
            />push_pin
          </label> 
        </>
    )
}

export default Pin;