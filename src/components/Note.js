import React, {useState, useContext} from 'react';
import { MdAddAlert, MdPersonAdd, MdPalette, MdInsertPhoto, MdArchive, MdMoreVert, MdUndo, MdRedo, MdCheck} from 'react-icons/md'
import { FaThumbtack } from 'react-icons/fa';
import {NotaContext} from '../contexts/NotaContext';

const Note = ({note}) =>{
    // const {editNote, deleteNote} = useContext(NotaContext);
    const context = useContext(NotaContext);

    const [isEditing, setIsEditing] = useState(false)
    const [isMoreSettings, setIsMoreSettings] = useState(false)
    const [hover, setHover] = useState(false)
    const [onNoteChanges, setOnNoteChanges] = useState({
        id: note.id,
        title: note.title,
        content: note.content
    })
    
    const handleEditingMode = ()=> setIsEditing(!isEditing)

    const handleChangeEdit = event =>{
        const {name, value} = event.target
        setOnNoteChanges({...onNoteChanges, [name]: value})
    }

    const handleSubmitEdit = event =>{
        event.preventDefault();
        context.editNote(onNoteChanges);
        // setOnNoteChanges([
        //     ...context.state.data,
        //     onNoteChanges
        // ])
    }
    
    const alert =<MdAddAlert/>;
    const person =<MdPersonAdd/>;
    const palette =<MdPalette/>;
    const insertPhoto =<MdInsertPhoto/>;
    const archive  =<MdArchive/>;
    const more =<MdMoreVert/>;
    const check =<MdCheck/>;
    const pin =<FaThumbtack/>;
    const undo = <MdUndo/>;
    const redo = <MdRedo/>;
    
    const item = ()=>{
        return(
        <>
        {/* <div id={note.id} className={`Item ${isEditing === true ? 'Nothing' : '' }`} > */}
        <div id={note.id} className={`Item`} >
        <div onClick={()=> setIsEditing(true) }>
        <ul className="NotesIconsHead">
        <li className="NoteIconHeadCheck">{check}</li>
        <li className="NoteIconHeadPin">{pin}</li>
        </ul>
        <ul className="ItemContent">
        <li className="ItemTitle Both">{note.title}</li>
        <li className="ItemMessage Both">{note.content}</li>
        </ul>
        </div>
        <ul className="IconsNote">
        <li className="FormIconsItself">{alert}</li>
        <li className="FormIconsItself NotShare" aria-disabled="true">{person}</li>
        <li className="FormIconsItself" onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}}>{palette}</li>
        <li className="FormIconsItself">{insertPhoto}</li>
        <li className="FormIconsItself">{archive}</li>
        <li className="FormIconsItself" onClick={()=>{setIsMoreSettings(!isMoreSettings)}}>{more}</li>
        </ul>
        <div className={`MoreColors ${hover === false ? 'HideColors' : '' }`} onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}}>
            <ul className="GroupColors">
            <li className="DefaultWhite"></li>
            <li className="Red"></li>
            <li className="Orange"></li>
            <li className="Yellow"></li>
            </ul>
            <ul className="GroupColors">
            <li className="Green"></li>
            <li className="Teal"></li>
            <li className="Blue"></li>
            <li className="DarkBlue"></li>
            </ul>
            <ul className="GroupColors">
            <li className="Purple"></li>
            <li className="Pink"></li>
            <li className="Brown"></li>
            <li className="Gray"></li>
            </ul>
        </div>
        <ul className={`MoreOptions ${isMoreSettings === false ? 'Hide' : ''}`}>
            <li>Delete note</li>
            <li>Add label</li>
            <li>Make a copy</li>
            <li>Show checkboxes</li>
            <li>Copy to Google Docs</li>
        </ul>
        </div>
        </>
        );
    }

    const itemEdit = ()=>{
    return(
    // <div id={note.id} className={`NoteModal ${isEditing === false ? 'Nothing' : '' }`}>
    <div id={note.id} className={`NoteModal`}>
    <div className="NoteContainerModal">
    <div className="Teste">
<form className="NoteContentModal" onSubmit={handleSubmitEdit}>      

<input
  className="EditTextInputTitle Both"
  aria-label="Note Title"
  type="text"
  name="title"
  defaultValue={note.title}
  onChange={handleChangeEdit}
/>

<textarea
  className="EditTextInputMessage Both"
  aria-label="Note Text"
  name="content"
  defaultValue={note.content}
  onChange={handleChangeEdit}
  rows="10"
  cols="10"
  />
<button className={`SendEdit`} type="submit">Submit</button>
</form>

<div>
</div>
<ul className="FormIcons">
    <li className="FormIconsItself">{alert}</li>
    <li className="FormIconsItself">{person}</li>
    <li className="FormIconsItself" onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}}>{palette}</li>
    <li className="FormIconsItself">{insertPhoto}</li>
    <li className="FormIconsItself">{archive}</li>
    <li className="FormIconsItself" onClick={()=>{setIsMoreSettings(!isMoreSettings)}}>{more}</li>
    <li className="FormIconsItself">{undo}</li>
    <li className="FormIconsItself">{redo}</li>
    <li className="FormIconsItself CloseBtn" onClick={handleEditingMode}>Close</li>
    <li className="PinBtnEdit">{pin}</li>
</ul>
<div className={`MoreColors ColorsEditMode ${hover === false ? 'HideColors' : '' }`} onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}}>
            <ul className="GroupColors">
            <li className="DefaultWhite"></li>
            <li className="Red"></li>
            <li className="Orange"></li>
            <li className="Yellow"></li>
            </ul>
            <ul className="GroupColors">
            <li className="Green"></li>
            <li className="Teal"></li>
            <li className="Blue"></li>
            <li className="DarkBlue"></li>
            </ul>
            <ul className="GroupColors">
            <li className="Purple"></li>
            <li className="Pink"></li>
            <li className="Brown"></li>
            <li className="Gray"></li>
            </ul>
        </div>
        <ul className={`MoreOptions OptionsEditMode ${isMoreSettings === false ? 'Hide' : ''}`}>
            <li>Delete note</li>
            <li>Add label</li>
            <li>Make a copy</li>
            <li>Show checkboxes</li>
            <li>Copy to Google Docs</li>
        </ul>
        </div>
        </div>
        </div>
    );
    }

    return(
        <>
            {isEditing ? (itemEdit()) : (item())}
            {/* {item()} */}
            {/* {itemEdit()} */}
        </>
    );
}

export default Note;