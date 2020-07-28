import React, {useState, useContext} from 'react';
// import axios from 'axios';
import { MdAddAlert, MdPersonAdd, MdPalette, MdInsertPhoto, MdArchive, MdMoreVert, MdUndo, MdRedo, MdPinDrop} from 'react-icons/md'
import { FaThumbtack } from 'react-icons/fa';
import {NotaContext} from '../contexts/NotaContext';


const NewNote = ()=>{
  const {saveNote, handleFormVisibilityInside, handleFormVisibilityOutside, isClicked} = useContext(NotaContext);
  const [newNote, setNewNote] = useState({
    id: 1,
    title: '',
    content: ''
  });

  const clickForm =(event)=>{
    const id = event.currentTarget.id
    if(id !== "NoteForm"){
      handleFormVisibilityOutside();
    }
    handleFormVisibilityInside()
  }

  const handleChangeInput = event =>{
    const {name, value} = event.target
    setNewNote({...newNote, [name]: value})
  }

  const handleChangeSubmitInput = event=>{
    event.preventDefault();
    saveNote(newNote);
    setNewNote({
      id: '',
      title: '',
      content: ''
    })
  }

  const alert =<MdAddAlert/>;
  const person =<MdPersonAdd/>;
  const palette =<MdPalette/>;
  const insertPhoto =<MdInsertPhoto/>;
  const archive  =<MdArchive/>;
  const more =<MdMoreVert/>;
  const undo =<MdUndo/>;
  const redo =<MdRedo/>;
  const pin =<FaThumbtack/>
        return(
          <div id="NoteForm" className={`FormInput ${isClicked === false ? 'ChangeFormHeight' : ''}`} onClick={clickForm} >
          <form className="NewNote" onSubmit={handleChangeSubmitInput}>
                    <input 
                      aria-label="title of the note"
                      type="text"
                      name="title"
                      value={newNote.title}
                      title="colocar explicações"
                      placeholder="Title"
                      onChange={handleChangeInput}
                      className={`Title ${isClicked === false ? 'None' : ''}`}
                  />

                  <textarea 
                      className={`NoteItself ${isClicked === false ? 'HideForm' : ''}`}
                      name="content"
                      value={newNote.content}
                      rows="10"
                      cols="10"
                      title="colocar explicações"
                      placeholder="Take a note..."
                      onChange={handleChangeInput}
                  />
                  <button 
                    className={`Send ${isClicked === false ? 'None' : ''}`}
                    type="submit">
                      Submit
                    </button>
              </form>
              <ul className={`FormIcons ${isClicked === false ? 'None' : ''}`}>
                <li className="FormIconsItself">{alert}</li>
                <li className="FormIconsItself">{person}</li>
                <li className="FormIconsItself">{palette}</li>
                <li className="FormIconsItself">{insertPhoto}</li>
                <li className="FormIconsItself">{archive}</li>
                <li className="FormIconsItself">{more}</li>
                <li className="FormIconsItself">{undo}</li>
                <li className="FormIconsItself">{redo}</li>
                <li className="FormIconsItself CloseBtn">Close</li>
                <li className="PinBtn">{pin}</li>
              </ul>
            </div>
        )
}

// new note with divs
{/* <div id="NoteForm" className={`FormInput ${isClicked === false ? 'ChangeFormHeight' : ''}`} onClick={clickForm} >
<div className="NewNote" >
<div
aria-label="title of the note"
className={`Title ${isClicked === false ? 'None' : ''}`}
id="title"
contentEditable="true"
type="text"
name="text"
onInput={handleChangeInput}>Title</div>
<div
className={`NoteItself ${isClicked === false ? 'HideForm' : ''}`}
id="content"
contentEditable="true"
type="text"
name="text"
onInput={handleChangeInput}>Take a note...</div>
  <form  onSubmit={handleChangeSubmitInput}>
      <button
        className={`Send ${isClicked === false ? 'None' : ''}`}
        type="submit"
      >Submit</button>
  </form>
  <ul className={`FormIcons ${isClicked === false ? 'None' : ''}`}>
    <li className="FormIconsItself">{alert}</li>
    <li className="FormIconsItself">{person}</li>
    <li className="FormIconsItself">{palette}</li>
    <li className="FormIconsItself">{insertPhoto}</li>
    <li className="FormIconsItself">{archive}</li>
    <li className="FormIconsItself">{more}</li>
    <li className="FormIconsItself">{undo}</li>
    <li className="FormIconsItself">{redo}</li>
    <li className="FormIconsItself CloseBtn">Close</li>
    <li className="PinBtn">{pin}</li>
  </ul>
</div>

</div> */}

// class NewNot extends React.Component{
//     constructor(props){
//         super(props)
//         this.handleChangeInput = this.handleChangeInput.bind(this)
//         this.handleChangeSubmitInput = this.handleChangeSubmitInput.bind(this)
//         this.clickForm = this.clickForm.bind(this)
//         this.state = {
//           id: Number(),
//           title: '',
//           content: '',
//           isEmpty: true,
//           componentShouldUpdate: false
//         }
//     }
  
//     clickForm(event){
//       const id = event.currentTarget.id
//       if(id !== "NoteForm"){
//         this.props.clickOutside()
//       }
//       this.props.clickInside()
//     }
  
//     handleChangeInput(event){
//         const {name, value} = event.target
//         this.setState({
//           [name]: value,
//           isEmpty: false
//         })
//     }
  
//     handleChangeSubmitInput(event){
//       event.preventDefault();
//         const CancelToken = axios.CancelToken;
//         const source = CancelToken.source();
        // const id = this.state.id
//         const isEmpty = this.state.isEmpty
//         const isEmptyCancel = isEmpty ? source.token : ''
//         axios.post(`http://localhost:9000/index/${id}`, {
//           params:{id},
//           title: this.state.title,
//           content: this.state.content
//         }, {
//           cancelToken: isEmptyCancel
//         })
//         .then( response =>{
//           response.data = {
//             params:{id},
//             title: this.state.title,
//             content: this.state.content
//           }
//           this.setState({
//             componentShouldUpdate: true,
//           }, ()=>{
//             const updateComponent = this.state.componentShouldUpdate
//             this.props.onFormInput(updateComponent)
//           })
//         })
//         source.cancel('Operation canceled by the user')
//         isEmpty ? console.log("Operation canceled") : console.log("Item added frontend")
//         this.setState({
//           title: '',
//           content: '',
//           isEmpty: true
//         })
//     }
  
//     render(){
//       const isClicked = this.props.isClicked
      
//       const alert =<MdAddAlert/>;
//       const person =<MdPersonAdd/>;
//       const palette =<MdPalette/>;
//       const insertPhoto =<MdInsertPhoto/>;
//       const archive  =<MdArchive/>;
//       const more =<MdMoreVert/>;
//       const undo =<MdUndo/>;
//       const redo =<MdRedo/>;
//       const pin =<FaThumbtack/>
  
//         return(
//           // <div id="NoteForm" className={`FormInput ${isClicked === false ? 'HideForm' : ''}`} onClick={this.clickForm} >
//           <div id="NoteForm" className={`FormInput`}>
//           <form className="NewNote" onSubmit={this.handleChangeSubmitInput}>
//                   {/* <label> */}
//                     <input 
//                       aria-label="title of the note"
//                       type="text"
//                       name="title"
//                       value={this.state.title}
//                       title="colocar explicações"
//                       placeholder="Title"
//                       onChange={this.handleChangeInput}
//                       // className={`Title ${isClicked === false ? 'None' : ''}`}
//                       className={`Title`}
//                   />
//                   {/* </label> */}
  
//                   {/* <label className="FormLabel"> */}
//                   <textarea 
//                       // className={`NoteItself ${isClicked === false ? 'HideForm' : ''}`}
//                       className={`NoteItself`}
//                       name="content"
//                       value={this.state.content}
//                       rows="10"
//                       cols="10"
//                       title="colocar explicações"
//                       placeholder="Take a note..."
//                       onChange={this.handleChangeInput}
//                   />
//                   {/* <div
//                     contentEditable="true"
//                     // className={`NoteItself ${isClicked === false ? 'HideForm' : ''}`}
//                     className={`NoteItself`}
//                     name="content"
//                     value={this.state.content}
//                     title="colocar explicações"
//                     aria-multiline="true"
//                     role="textbox"
//                     aria-label="Take a note..."
//                     placeholder="Take a note..."
//                     tabIndex="0"
//                     spellCheck="true"
//                     onChange={this.handleChangeInput}
//                   >
//                   </div> */}
//                   {/* <div className="NotePlaceholder">Take a note...</div> */}
//                   {/* </label> */}
//                   {/* <button 
//                     // className={`Send ${isClicked === false ? 'None' : ''}`}
//                     className={`Send`}
//                     type="submit">
//                       {this.props.send}
//                     </button> */}
//               </form>
//               <ul className="FormIcons">
//                 <li className="FormIconsItself">{alert}</li>
//                 <li className="FormIconsItself">{person}</li>
//                 <li className="FormIconsItself">{palette}</li>
//                 <li className="FormIconsItself">{insertPhoto}</li>
//                 <li className="FormIconsItself">{archive}</li>
//                 <li className="FormIconsItself">{more}</li>
//                 <li className="FormIconsItself">{undo}</li>
//                 <li className="FormIconsItself">{redo}</li>
//                 <li className="FormIconsItself CloseBtn">Close</li>
//                 <li className="PinBtn">{pin}</li>
//               </ul>
//             </div>
//         )
//     }
//   }

  export default NewNote;