import React, {useState} from 'react';

const Archived = ({ handleArchived, archive }) =>{
    // const [archivedNote, setArchivedNote] = useState(false)
    const handleArchivedSetting = ()=>{
        // setArchivedNote(!archivedNote)
        handleArchived()
    }
    return(
        <>
        <li className="FormIconsItself" onClick={handleArchivedSetting}>{archive}</li>
        </>
    )
}

export default Archived;