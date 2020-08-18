import React, {useState, useContext} from 'react';
import IconsEditAndNewForms from './ButtonsAndIcons/IconsEditAndNewForms.js';
import Pin from './ButtonsAndIcons/Pin';
import {NotaContext} from '../contexts/NotaContext';


const NewNote = ()=>{
  const context = useContext(NotaContext);
  const isClicked = context.state.isClicked
  const [newNote, setNewNote] = useState({
    // id: Number(),
    title: '',
    content: '',
    is_pinned: false,
    is_archived: false,
    background_color: '#fff'
  });


  // const [isPinned, setIsPinned] = useState(false)
  // const [isArchived, setIsArchived] = useState(false)
  // const [newNoteColors, setNewNoteColors] = useState('#fff') //rgb(255, 255, 255)

  const bgColorChange = {
    backgroundColor: newNote.background_color,
    // backgroundColor: newNoteColors,
  }

  const handleColor = (theColor)=>{
  
    // setNewNoteColors(theColor)
    setNewNote({background_color: theColor})
  }

  const handlePin = ()=>{
    setNewNote({is_pinned: !newNote.is_pinned})
    // setIsPinned(!isPinned)
  }

  const handleArchived = () =>{
    // setIsArchived(!isArchived)
    setNewNote({is_archived: !newNote.is_archived})
  }

  const clickForm =(event)=>{
    const id = event.currentTarget.id
    if(id !== "NoteForm"){
      context.handleFormVisibilityOutside();
    }
    context.handleFormVisibilityInside()
  }

  const handleChangeInput = event =>{
    const {name, value} = event.target
    setNewNote({...newNote, [name]: value})
  }

  const handleChangeSubmitInput = event=>{
    event.preventDefault();
    // context.saveNote(newNote, isPinned, isArchived, newNoteColors);
    context.saveNote(newNote);
    setNewNote({
      // id: Number(),
      title: '',
      content: '',
      is_pinned: false,
      is_archived: false,
      background_color: '#fff'
    }) 
    // setIsPinned(false)
    // setIsArchived(false)
  }
console.log(newNote.is_pinned)
        return(
          <>
          <div style={bgColorChange} id="NoteForm" className={`FormInput ${isClicked === false ? 'ChangeFormHeight' : ''}`} onClick={clickForm} >
          <div className={`${isClicked === false ? 'None' : ''}`}>
          <Pin
            isPinned={newNote.is_pinned}
            // isPinned={isPinned}
            handlePin={handlePin}></Pin>
          </div>
          <form className="NewNote" onSubmit={handleChangeSubmitInput}>
                    {/* <input name="id" value={context.state.data.length + 1} onChange={handleChangeInput} /> */}
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
              
              <div className={`${isClicked === false ? 'None' : ''}`}>
              <IconsEditAndNewForms handleColor={handleColor} handlePin={handlePin} handleArchived={handleArchived}></IconsEditAndNewForms>
              </div>
            </div>
          </>
        )
}

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