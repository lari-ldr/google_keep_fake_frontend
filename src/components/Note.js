import React, {useState} from 'react';
import { MdAddAlert, MdPersonAdd, MdPalette, MdInsertPhoto, MdArchive, MdMoreVert, MdUndo, MdRedo, MdCheck} from 'react-icons/md'
import { FaThumbtack } from 'react-icons/fa';

const Note = ({note}) =>{
    const [isEditing, setIsEditing] = useState(false)
    const handleEditingMode = ()=> setIsEditing(!isEditing)
    const alert =<MdAddAlert/>;
    const person =<MdPersonAdd/>;
    const palette =<MdPalette/>;
    const insertPhoto =<MdInsertPhoto/>;
    const archive  =<MdArchive/>;
    const more =<MdMoreVert/>;
    const check =<MdCheck/>;
    const pin =<FaThumbtack/>
    const item = ()=>{
        return(
        <>
        <ul className="NotesIconsHead">
        <li className="NoteIconHeadCheck">{check}</li>
        <li className="NoteIconHeadPin">{pin}</li>
        </ul>
        <ul className="ItemContent">
        <li className="ItemTitle Both">{note.title}</li>
        <li className="ItemMessage Both">{note.content}</li>
        </ul>
        {/* 255.25x416 */}
        <ul className="FormIcons">
        <li className="FormIconsItself">{alert}</li>
        <li className="FormIconsItself">{person}</li>
        <li className="FormIconsItself">{palette}</li>
        <li className="FormIconsItself">{insertPhoto}</li>
        <li className="FormIconsItself">{archive}</li>
        <li className="FormIconsItself">{more}</li>
        </ul>
        {/* <div className="NoteBtn"> */}
        {/* <button className="Delete">delete</button>
        <button onClick={handleEditingMode}>OPEN</button> */}
        {/* <button className="Edit" onClick={()=> setIsEditing(true) }>edit</button>
        {isEditing ? (<NoteEdit></NoteEdit>) : null} */}
        {/* </div> */}
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