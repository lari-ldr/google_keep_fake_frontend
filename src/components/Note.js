import React from 'react';

const Note = (props) =>{
    return(
    <div id={props.note.id} className="Item">
    <ul className="ItemContent">
    <li className="ItemTitle Both">{props.note.title}</li>
    <li className="ItemMessage Both">{props.note.content}</li>
    </ul>
    <div className="NoteBtn">
    <button className="Delete">delete</button>
    <button className="Edit">edit</button>
    </div>
    </div>
    );
}

export default Note;