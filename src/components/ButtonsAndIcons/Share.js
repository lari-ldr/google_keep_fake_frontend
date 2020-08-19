import React, {useState} from 'react';

const Share = ({person}) =>{

    return(
        <>
        <button className="FormIconsItself">{person}</button>
        {/* <li className="FormIconsItself NotShare">{person}</li> */}
        </>
    )
}

export default Share;