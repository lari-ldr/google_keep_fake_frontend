import React, {useState} from 'react';

const Archived = ({ checked, onChangeArchived }) =>{
const [isArchived, setIsArchived] = useState(false)

const handleArchivedIcon=()=>{
    setIsArchived(!isArchived)
}
    return(
        <>
        <label for="archive" className="material-icons FormIconsItself">{isArchived === false ? "archive" : "unarchive"}</label> 
        <input id="archive" type="checkbox" name="is_archived" checked={checked} onChange={onChangeArchived} onClick={handleArchivedIcon}/>
        </>
    )
}
 
export default Archived;