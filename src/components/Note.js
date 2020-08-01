import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import { MdAddAlert, MdPersonAdd, MdPalette, MdInsertPhoto, MdArchive, MdMoreVert, MdUndo, MdRedo, MdCheck} from 'react-icons/md'
import { FaThumbtack } from 'react-icons/fa';
import {NotaContext} from '../contexts/NotaContext';

// class Note extends React.Component{
//     constructor(props){
//       super(props)
//       this.editingMode = this.editingMode.bind(this)
//       this.renderNote = this.renderNote.bind(this)
//       this.renderEditingNote = this.renderEditingNote.bind(this)
//       this.handleChange = this.handleChange.bind(this)
//       this.handleChangeEditSubmit = this.handleChangeEditSubmit.bind(this)
//       this.handleChangeDeleteSubmit = this.handleChangeDeleteSubmit.bind(this)
//       this.state={
//         id: props.note.id,
//         title: props.note.title,
//         content: props.note.content,
//         isEditing: false
//       }
//     }
    
    // handleChange(event){
    //   const {name, value} = event.target
    //   this.setState({
    //       [name]: value,
    //   })
    // }
  
//     handleChangeEditSubmit(event){
//       const id = this.state.id
//       event.preventDefault()
//       axios.put(`http://localhost:9000/index/${id}`, {
//         title: this.state.title,
//         content: this.state.content
//       })
//       .then(response =>{
//         response.data={
//           title: this.state.title,
//           content: this.state.content
//         }
//       })
//       this.setState({ isEditing: false })
//     }
  
//     handleChangeDeleteSubmit(event){
//       const id = this.state.id
//       event.preventDefault();
//       axios.delete(`http://localhost:9000/index/${id}`)
//       .then( response => {
//         console.log(response)
//       })
//       const indexID = this.props.indexID
//       this.props.onDelete(indexID)
//     }

//     editingMode(){
//       this.setState({
//         isEditing: !this.state.isEditing
//       })
//     }
  
//     renderNote(){

//       return(
//         <div id={this.state.id} key={this.state.id} className="Item">
//         <ul className="ItemContent">
//         <li className="ItemTitle Both">{this.state.title}</li>
//         <li className="ItemMessage Both">{this.state.content}</li>
//         </ul>
//         <div className="NoteBtn">
  
//         <form className="DeleteForm" onClick={this.handleChangeDeleteSubmit}>
//           <label className="Delete">delete
//               <input
//                 className="InputDelete"
//                 type="submit"
//                 name="id"
//                 value={this.state.id}
//                 onChange={this.handleChange}
//               />
//           </label>
//         </form>
  
//         <button className="Edit" onClick={this.editingMode}>edit</button>
//         </div>
//         </div>
//       )
//     }
  
//     renderEditingNote(){
     
//   return(
//   <div key={this.state.id} className="Item">
//   <form onSubmit={this.handleChangeEditSubmit}>
  
//   <label className="EditTextLabelTitle">
//   <input
//     className="EditTextInputTitle Both"
//     type="text"
//     name="title"
//     defaultValue={this.state.title}
//     onChange={this.handleChange}
//   />
//   </label>
      
//   <label className="EditTextLabelMessage">
//   <textarea
//   className="EditTextInputMessage Both"
//     name="content"
//     defaultValue={this.state.content}
//     rows="10"
//     cols="10"
//     onChange={this.handleChange}
//     />
//   </label>
//   <div>
//   <button className="Save">submit</button>
//   <button className="Close" onClick={this.editingMode}>close</button>
//   </div>
//   </form>
//   </div>
//   )
//     }
  
//     render(){
//       const isEditing = this.state.isEditing
//       const switchBetweenModes = isEditing ? this.renderEditingNote() : this.renderNote()
//       return(
//         switchBetweenModes
//       )
//     }
//   }

const Note = ({note}) =>{
    const [onNoteChanges, setOnNoteChanges] = useState({
        id: note.id,
        title: note.title,
        content: note.content
    });
    const [isEditing, setIsEditing] = useState(false)
    const {editNote, deleteNote} = useContext(NotaContext);
    
    const [count, setCount] = useState(0)
    // useEffect(()=>{
    //   const id = setInterval(()=>{
    //     setCount(count+1);
    //   }, 1000);
    //   return()=> clearInterval(id);
    // }, [count])

    const handleChange =(event)=>{
        // this.setState({[name]: value})
        const {name, value} = event.target
        setOnNoteChanges({...onNoteChanges, [name]: value})
      }
    
    const handleSubmitEdit = (event) =>{
        event.preventDefault();
        editNote(onNoteChanges);
        setIsEditing(false)
    }

    const handleSubmitDelete = (event) =>{
        event.preventDefault();
        // deleteNote(onNoteChanges);
    }

    const editingMode =()=>{
        // this.setState({isEditing: !this.state.isEditing})
        setIsEditing(!isEditing)
      }

    const renderNote=()=>{
        return(
            <>
            {/* <div id={note.id} className={`Item ${isEditing === true ? 'Nothing' : '' }`} > */}
            <div id={note.id} key={note.id} className={`Item`} >
            {/* <div onClick={handleEditingMode}> */}
            <div >
            <ul className="ItemContent">
            <li className="ItemTitle Both">{note.title}</li>
            <li className="ItemMessage Both">{note.content}</li>
            </ul>
    
            {/* <form onClick={handleSubmitDelete}>
            <label>Delete
                <input
                  type="submit"
                  name="id"
                  value={note.id}
                  onChange={handleChangeEdit}
                />
            </label>
          </form> */}
            <button onClick={editingMode}>open me</button>
            </div>
            </div>
            </>
            );
    }
    
    const renderEditingNote =()=>{
        return(
            // <div id={note.id} className={`NoteModal ${isEditing === false ? 'Nothing' : '' }`}>
            <div className={`NoteModal`}>
            <div className="NoteContainerModal">
            <div className="Teste">
        <form className="NoteContentModal" onSubmit={handleSubmitEdit}>      
        
        <input
          className="EditTextInputTitle Both"
          aria-label="Note Title"
          type="text"
          name="title"
          defaultValue={note.title}
          onChange={handleChange}
        />
        
        <textarea
          className="EditTextInputMessage Both"
          aria-label="Note Text"
          name="content"
          defaultValue={note.content}
          onChange={handleChange}
          rows="10"
          cols="10"
          />
        <button>Submit</button>
        <button onClick={editingMode}>close</button>
        </form>
                </div>
                </div>
                </div>
            );
    }
    const switchBetweenModes = isEditing ? renderEditingNote() : renderNote()
    return(
      <>
      {/* <button onClick={()=>{setCount(count + 1)}}></button> */}
    {/* <h1>{count}</h1> */}
        {switchBetweenModes}
      </>
    );
}


// const Note = ({note}) =>{
//     const {editNote, deleteNote} = useContext(NotaContext);
//     const context = useContext(NotaContext);

//     const [isEditing, setIsEditing] = useState(false)
//     const [isMoreSettings, setIsMoreSettings] = useState(false)
//     const [hover, setHover] = useState(false)
//     const [onNoteChanges, setOnNoteChanges] = useState({
//         id: note.id,
//         title: note.title,
//         content: note.content
//     })
    
//     const handleEditingMode = ()=> setIsEditing(!isEditing)

//     const handleChangeEdit = event =>{
//         const {name, value} = event.target
//         setOnNoteChanges({...onNoteChanges, [name]: value})
//     }

//     const handleSubmitEdit = event =>{
//         event.preventDefault();
//         editNote(onNoteChanges);
//         setIsEditing(false)
//         setOnNoteChanges(onNoteChanges)
//         console.log(note)
//         console.log(onNoteChanges)
//     }

//     const handleSubmitDelete = event =>{
//         event.preventDefault();
//         // deleteNote(onNoteChanges);
//     }
    
//     const alert =<MdAddAlert/>;
//     const person =<MdPersonAdd/>;
//     const palette =<MdPalette/>;
//     const insertPhoto =<MdInsertPhoto/>;
//     const archive  =<MdArchive/>;
//     const more =<MdMoreVert/>;
//     const check =<MdCheck/>;
//     const pin =<FaThumbtack/>;
//     const undo = <MdUndo/>;
//     const redo = <MdRedo/>;
    
//     const item = ()=>{
//         return(
//         <>
//         {/* <div id={note.id} className={`Item ${isEditing === true ? 'Nothing' : '' }`} > */}
//         <div id={note.id} key={note.id} className={`Item`} >
//         {/* <div onClick={handleEditingMode}> */}
//         <div >
//         <ul className="NotesIconsHead">
//         <li className="NoteIconHeadCheck">{check}</li>
//         <li className="NoteIconHeadPin">{pin}</li>
//         </ul>
//         <ul className="ItemContent">
//         <li className="ItemTitle Both">{note.title}</li>
//         <li className="ItemMessage Both">{note.content}</li>
//         </ul>

//         {/* <form onClick={handleSubmitDelete}>
//         <label>Delete
//             <input
//               type="submit"
//               name="id"
//               value={note.id}
//               onChange={handleChangeEdit}
//             />
//         </label>
//       </form> */}
//         <button onClick={handleEditingMode}>open me</button>
//         </div>
//         <ul className="IconsNote">
//         <li className="FormIconsItself">{alert}</li>
//         <li className="FormIconsItself NotShare" aria-disabled="true">{person}</li>
//         <li className="FormIconsItself" onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}}>{palette}</li>
//         <li className="FormIconsItself">{insertPhoto}</li>
//         <li className="FormIconsItself">{archive}</li>
//         <li className="FormIconsItself" onClick={()=>{setIsMoreSettings(!isMoreSettings)}}>{more}</li>
//         </ul>
//         <div className={`MoreColors ${hover === false ? 'HideColors' : '' }`} onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}}>
//             <ul className="GroupColors">
//             <li className="DefaultWhite"></li>
//             <li className="Red"></li>
//             <li className="Orange"></li>
//             <li className="Yellow"></li>
//             </ul>
//             <ul className="GroupColors">
//             <li className="Green"></li>
//             <li className="Teal"></li>
//             <li className="Blue"></li>
//             <li className="DarkBlue"></li>
//             </ul>
//             <ul className="GroupColors">
//             <li className="Purple"></li>
//             <li className="Pink"></li>
//             <li className="Brown"></li>
//             <li className="Gray"></li>
//             </ul>
//         </div>
//         <ul className={`MoreOptions ${isMoreSettings === false ? 'Hide' : ''}`}>
//             <li>Delete note</li>
//             <li>Add label</li>
//             <li>Make a copy</li>
//             <li>Show checkboxes</li>
//             <li>Copy to Google Docs</li>
//         </ul>
//         </div>
//         </>
//         );
//     }

//     const itemEdit = ()=>{
//     return(
//     // <div id={note.id} className={`NoteModal ${isEditing === false ? 'Nothing' : '' }`}>
//     <div className={`NoteModal`}>
//     <div className="NoteContainerModal">
//     <div className="Teste">
// <form className="NoteContentModal" onSubmit={handleSubmitEdit}>      

// <input
//   className="EditTextInputTitle Both"
//   aria-label="Note Title"
//   type="text"
//   name="title"
//   defaultValue={note.title}
//   onChange={handleChangeEdit}
// />

// <textarea
//   className="EditTextInputMessage Both"
//   aria-label="Note Text"
//   name="content"
//   defaultValue={note.content}
//   onChange={handleChangeEdit}
//   rows="10"
//   cols="10"
//   />
// <button className={`SendEdit`} type="submit">Submit</button>
// </form>

// <div>
// </div>
// <ul className="FormIcons">
//     <li className="FormIconsItself">{alert}</li>
//     <li className="FormIconsItself">{person}</li>
//     <li className="FormIconsItself" onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}}>{palette}</li>
//     <li className="FormIconsItself">{insertPhoto}</li>
//     <li className="FormIconsItself">{archive}</li>
//     <li className="FormIconsItself" onClick={()=>{setIsMoreSettings(!isMoreSettings)}}>{more}</li>
//     <li className="FormIconsItself">{undo}</li>
//     <li className="FormIconsItself">{redo}</li>
//     <li className="FormIconsItself CloseBtn" onClick={handleEditingMode}>Close</li>
//     <li className="PinBtnEdit">{pin}</li>
// </ul>
// <div className={`MoreColors ColorsEditMode ${hover === false ? 'HideColors' : '' }`} onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}}>
//             <ul className="GroupColors">
//             <li className="DefaultWhite"></li>
//             <li className="Red"></li>
//             <li className="Orange"></li>
//             <li className="Yellow"></li>
//             </ul>
//             <ul className="GroupColors">
//             <li className="Green"></li>
//             <li className="Teal"></li>
//             <li className="Blue"></li>
//             <li className="DarkBlue"></li>
//             </ul>
//             <ul className="GroupColors">
//             <li className="Purple"></li>
//             <li className="Pink"></li>
//             <li className="Brown"></li>
//             <li className="Gray"></li>
//             </ul>
//         </div>
//         <ul className={`MoreOptions OptionsEditMode ${isMoreSettings === false ? 'Hide' : ''}`}>
//             <li>Delete note</li>
//             <li>Add label</li>
//             <li>Make a copy</li>
//             <li>Show checkboxes</li>
//             <li>Copy to Google Docs</li>
//         </ul>
//         </div>
//         </div>
//         </div>
//     );
//     }

//     return(
//         <>
//             {isEditing ? (itemEdit()) : (item())}
//             {/* {item()} */}
//             {/* {itemEdit()} */}
//         </>
//     );
// }

export default Note;