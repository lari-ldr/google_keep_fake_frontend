import React, {useState} from 'react';

const Archived = ({ checked, onChangeArchived}) =>{

    return(
        <>
        <label 
              className="material-icons"
              // className="FormIconsItself"
            >            
            <input
            // aria-label="true"  
            type="checkbox"
            name="is_archived"
            checked={checked}
            onChange={onChangeArchived}
            />archive
          </label> 
        </>
    )
}

export default Archived;