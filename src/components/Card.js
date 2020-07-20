import React, { Fragment } from 'react';
import Note from './Note.js'

import NoteEdit from './NoteEdit.js'

const Card = (props) =>{
    // const [isEditing, setStateIsEditing] = useState();
    const allNotes = props.results.map((item) =>{
        return(
            <>
            <Note key={item.id} indexID={item.id} note={item}/>
            <NoteEdit key={item.id} indexID={item.id} note={item} />
            </>
        )
    })

// const switchBetweenModes = isEditing ? <NoteEdit/> : {allNotes}
return(
    <div className="ContainerItems">
    {allNotes}
    {/* <p>testing</p> */}
    </div>
    
);
}

export default Card;