import React, {useState} from 'react';

const InsertPhoto = ({InsertPhoto}) =>{

    return(
        <>
        <label className="FormIconsItself">
            <input type="file" />{InsertPhoto}
        </label>
        {/* <li className="FormIconsItself">{InsertPhoto}</li> */}
        </>
    )
}

export default InsertPhoto;