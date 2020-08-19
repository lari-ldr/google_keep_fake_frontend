import React, {useState} from 'react';

const InsertPhoto = () =>{

    return(
        <>
        <label for="img" className="material-icons FormIconsItself">insert_photo</label>
            <input type="file" id="img" name="img" accept="image/*" />
        </>
    )
}

export default InsertPhoto;