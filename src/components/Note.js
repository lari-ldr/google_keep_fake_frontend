import React, {useState} from 'react';


const Note = ({note}) =>{
    const [isEditing, setIsEditing] = useState(false)
    const handleEditingMode = ()=> setIsEditing(!isEditing)

    const item = ()=>{
        return(
        <>
        <ul className="ItemContent">
        <li className="ItemTitle Both">{note.title}</li>
        <li className="ItemMessage Both">{note.content}</li>
        </ul> 
        <div className="NoteBtn">
        <button className="Delete">delete</button>
        <button onClick={handleEditingMode}>OPEN</button>
        {/* <button className="Edit" onClick={()=> setIsEditing(true) }>edit</button>
        {isEditing ? (<NoteEdit></NoteEdit>) : null} */}
        </div>
        </>
        );
    }

    const itemEdit = ()=>{
    return(
        <>
        <form>      
        <label className="EditTextLabelTitle">
        <input
          className="EditTextInputTitle Both"
          type="text"
          name="title"
          defaultValue={note.title}
        />
        </label> 
        <label className="EditTextLabelMessage">
        <textarea
        className="EditTextInputMessage Both"
          name="content"
          defaultValue={note.content}
          rows="10"
          cols="10"
          />
        </label>
        <div>
        {/* <button className="Close">close</button> */}
        <button onClick={handleEditingMode}>CLOSE</button>
        </div>
        </form>
        </>
    );
    }

    return(
        <div id={note.id} className="Item">
            {isEditing ? (itemEdit()) : (item())}
        </div>
    );
}

export default Note;