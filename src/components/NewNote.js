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

  const clickForm =(event)=>{
    const id = event.currentTarget.id
    if(id !== "NoteForm"){
      context.handleFormVisibilityOutside();
    }
    context.handleFormVisibilityInside()
  }

  const handleChangeInput = (event) =>{
    const {name, value, type, checked} = event.target
    type === 'checkbox' ? setNewNote({...newNote, [name]: checked}) : setNewNote({...newNote, [name]: value})
  }

  const handleChangeSubmitInput = event=>{
    event.preventDefault();
    context.saveNote(newNote);
    context.saveNotesettings(newNote)
    setNewNote({
      // id: Number(),
      title: '',
      content: '',
      is_pinned: false,
      is_archived: false,
      background_color: '#fff'
    }) 
  }

  const bgColorChange = {
    backgroundColor: newNote.background_color,
    // backgroundColor: newNoteColors,
  }

        return(
          <>
          <div 
            style={bgColorChange} 
            id="NoteForm" className={`FormInput ${isClicked === false ? 'ChangeFormHeight' : ''}`} onClick={clickForm} >
          <div className={`${isClicked === false ? 'None' : ''}`}>
          </div>
          <form className="NewNote" onSubmit={handleChangeSubmitInput}>
            <Pin checkedPin={newNote.is_pinned} onChangePinned={handleChangeInput}></Pin>
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

           {/* <Archived checked={newNote.is_archived} onChangeArchived={handleChangeInput}></Archived> */}
           <IconsEditAndNewForms checked={newNote.is_archived} onChangeArchived={handleChangeInput} onChangeBgColor={handleChangeInput}></IconsEditAndNewForms>
                  <button 
                    className={`Send ${isClicked === false ? 'None' : ''}`}
                    type="submit">
                      Submit
                    </button>
              </form>
              
              <div className={`${isClicked === false ? 'None' : ''}`}>
              </div>
            </div>
          </>
        )
}

// const alert =<MdAddAlert/>;
// const person =<MdPersonAdd/>;
// const palette =<MdPalette/>;
// const insertPhoto =<MdInsertPhoto/>;
// const archiveIcon  =<MdArchive/>;
// const more =<MdMoreVert/>;
// const undo =<MdUndo/>;
// const redo =<MdRedo/>;

// const NewNote = ()=>{
//   const context = useContext(NotaContext);
//   const isClicked = context.state.isClicked
//   const [newNote, setNewNote] = useState({
//     // id: Number(),
//     title: '',
//     content: '',
//     is_pinned: false,
//     is_archived: false,
//     background_color: '#fff'
//   });

//   const [isMoreSettings, setIsMoreSettings] = useState(false)
//   const [hover, setHover] = useState(false)

//     const hoverIn = ()=>{setHover(true)}
//     const hoverOut = ()=>{setHover(false)}
//     const handleMoreSettings = ()=>{setIsMoreSettings(!isMoreSettings)}

//   const bgColorChange = {
//     backgroundColor: newNote.background_color,
//     // backgroundColor: newNoteColors,
//   }

//   const handleColor = (theColor)=>{
  
//     // setNewNoteColors(theColor)
//     setNewNote({background_color: theColor})
//   }


//   const clickForm =(event)=>{
//     const id = event.currentTarget.id
//     if(id !== "NoteForm"){
//       context.handleFormVisibilityOutside();
//     }
//     context.handleFormVisibilityInside()
//   }

//   const handleChangeInput = event =>{
//     const {name, value, type, checked} = event.target
//     // console.log(event.target)
//     type === 'checkbox' ? setNewNote({...newNote, [name]: checked}) : setNewNote({...newNote, [name]: value})

//   }

//   const handleChangeSubmitInput = event=>{
//     event.preventDefault();
//     context.saveNote(newNote);
//     setNewNote({
//       // id: Number(),
//       title: '',
//       content: '',
//       is_pinned: false,
//       is_archived: false,
//       background_color: '#fff'
//     }) 

//   }

//         return(
//           <>
//           <div style={bgColorChange} id="NoteForm" className={`FormInput ${isClicked === false ? 'ChangeFormHeight' : ''}`} onClick={clickForm} >
//           <div className={`${isClicked === false ? 'None' : ''}`}>
//           </div>
//           <form className="NewNote" onSubmit={handleChangeSubmitInput}>

//                     <input 
//                       aria-label="title of the note"
//                       type="text"
//                       name="title"
//                       value={newNote.title}
//                       title="colocar explicações"
//                       placeholder="Title"
//                       onChange={handleChangeInput}
//                       className={`Title ${isClicked === false ? 'None' : ''}`}
//                   />

//                   <textarea 
//                       className={`NoteItself ${isClicked === false ? 'HideForm' : ''}`}
//                       name="content"
//                       value={newNote.content}
//                       rows="10"
//                       cols="10"
//                       title="colocar explicações"
//                       placeholder="Take a note..."
//                       onChange={handleChangeInput}
//                   />
//                   <br/>

//                 <div className={`IconsNote FormIconsPadding`}>
//             <li className="FormIconsItself">{alert}</li>
//             <li className="FormIconsItself NotShare">{person}</li>
            
//             <li className="FormIconsItself" onMouseEnter={hoverIn} onMouseLeave={hoverOut}>{palette}</li>
//             <li className="FormIconsItself">{insertPhoto}</li>
           
//             <label 
//               // className="material-icons"
//               className="FormIconsItself"
//             >            
//             <input
//             // aria-label="true"  
//             type="checkbox"
//             name="is_archived"
//             checked={newNote.is_archived}
//             onChange={handleChangeInput}
//             />{archiveIcon}
//           </label> 

//             <button className="FormIconsItself" onClick={handleMoreSettings}>{more}</button>
//             <li className="FormIconsItself">{undo}</li>
//             <li className="FormIconsItself">{redo}</li>
//             {/* mudar conforme se for nota editada ou nova nota? */}
//             <li className="FormIconsItself CloseBtn" onClick={editingMode}>Close</li>

//                 </div> 
//         <div className={`MoreColors ColorsEditMode ${hover === false ? 'HideColors' : '' }`} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
//             <IconsColors handleColor={handleColor}>{palette}</IconsColors>
//         </div>

//                   <button 
//                     className={`Send ${isClicked === false ? 'None' : ''}`}
//                     type="submit">
//                       Submit
//                     </button>
//               </form>
              
//               <div className={`${isClicked === false ? 'None' : ''}`}>
//               </div>
//             </div>
//           </>
//         )
// }

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