import React, {useState} from 'react';
import NoteEdit from './NoteEdit.js'
import BtnEdit from './BtnEdit.js'

const Note = (props) =>{
    // const [isEditing, setIsEditing] = useState(false)
    return(
    <div id={props.note.id} className="Item">
    <ul className="ItemContent">
    <li className="ItemTitle Both">{props.note.title}</li>
    <li className="ItemMessage Both">{props.note.content}</li>
    </ul>
    <div className="NoteBtn">
    <button className="Delete">delete</button>
    <BtnEdit/>
    {/* <button className="Edit" onClick={()=> setIsEditing(true) }>edit</button>
    {isEditing ? (<NoteEdit></NoteEdit>) : null} */}
    </div>
    </div>
    );
}

export default Note;