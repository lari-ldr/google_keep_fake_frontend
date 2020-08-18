import React from 'react';
import IconsEditAndNewForms from './ButtonsAndIcons/IconsEditAndNewForms.js';
import IconsHead from './ButtonsAndIcons/IconsHead.js';
import {NotaContext} from '../contexts/NotaContext';

class EditNote extends React.Component{
    constructor(props){
        super(props)
        this.editingMode = this.editingMode.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleChangeEditSubmit = this.handleChangeEditSubmit.bind(this)
        this.handleChangeDeleteSubmit = this.handleChangeDeleteSubmit.bind(this)
        this.state={
          id: props.note.id,
          title: props.note.title,
          content: props.note.content,
          isEditing: true,
          isMoreSettings: false,
          hover: false
        }
      }
      static contextType = NotaContext

      componentDidMount(){
        const context = this.context
      }

      handleChange(event){
        const {name, value} = event.target
        this.setState({
            [name]: value,
        })
      }
    
      handleChangeEditSubmit(event){
        event.preventDefault()
        const noteEdited = this.state
        const putRequest = this.context.editNote;
        putRequest(noteEdited)
        this.setState({isEditing: null}, ()=>{
            const isEditing = this.state.isEditing;
          this.props.componentEditModeClose(isEditing)
        })
      }
    
      handleChangeDeleteSubmit(event){
        event.preventDefault();
        const noteDeleted = this.state
        const deleteRequest = this.context.deleteNote;
        deleteRequest(noteDeleted)
        this.setState({isEditing: null}, ()=>{
            const isEditing = this.state.isEditing
          this.props.componentEditModeClose(isEditing)
        })
      }
    
      editingMode(){
          console.log("you clicked to close")
          this.setState({isEditing: null}, ()=>{
              const isEditing = this.state.isEditing
            this.props.componentEditModeClose(isEditing)
          })
      }

      render(){
        return(
            <>
          {/* <div id={note.id} className={`NoteModal ${isEditing === false ? 'Nothing' : '' }`}> */}
          <div
          id={this.state.id}
            className={`NoteModal`}
          >
          <div
            className="NoteContainerModal"
          >
          <div
            className="NoteDesign"
            style={{borderColor: this.props.note.background_color}, {backgroundColor: this.props.note.background_color}}
          >
            <IconsHead pin={this.props.note.is_pinned}></IconsHead>
      <form
        className="NoteContentModal"
        onSubmit={this.handleChangeEditSubmit}
      >      
      
      <input
        className="EditTextInputTitle Both"
        aria-label="Note Title"
        type="text"
        name="title"
        defaultValue={this.state.title}
        onChange={this.handleChange}
      />
      
      <textarea
        className="EditTextInputMessage Both"
        aria-label="Note Text"
        name="content"
        defaultValue={this.state.content}
        onChange={this.handleChange}
        rows="10"
        cols="10"
        />
      <button className={`SendEdit`} type="submit">Submit</button>
      
      {/* <button className="FormIconsItself CloseBtn" onClick={this.editingMode}>Close</button> */}
      </form>
      
      <div>
      </div>
        <IconsEditAndNewForms
            editingMode={this.editingMode}
            onClick={this.handleChangeDeleteSubmit}
            onChange={this.handleChange}
            value={this.state.id}
            isEditing={this.state.isEditing}
        >
    
        </IconsEditAndNewForms>
              </div>
              </div>
              </div>
          </>
        )
      }
}

// const EditNote = ({note})=>{
    
//     return(
//         <>
//       {/* <div id={note.id} className={`NoteModal ${isEditing === false ? 'Nothing' : '' }`}> */}
//       <div
//         className={`NoteModal`}
//       >
//       <div
//         className="NoteContainerModal"
//       >
//       <div
//         className="Teste"
//       >
//   <form
//     className="NoteContentModal"
//     // onSubmit={this.handleChangeEditSubmit}
//   >      
  
//   <input
//     className="EditTextInputTitle Both"
//     aria-label="Note Title"
//     type="text"
//     name="title"
//     defaultValue={note.title}
//     // onChange={this.handleChange}
//   />
  
//   <textarea
//     className="EditTextInputMessage Both"
//     aria-label="Note Text"
//     name="content"
//     defaultValue={note.content}
//     // onChange={this.handleChange}
//     rows="10"
//     cols="10"
//     />
//   <button className={`SendEdit`} type="submit">Submit</button>
  
//   {/* <button className="FormIconsItself CloseBtn" onClick={this.editingMode}>Close</button> */}
//   </form>
  
//   <div>
//   </div>
//     <IconsEditAndNewForms
//         // editingMode={this.editingMode}
//         // onClick={this.handleChangeDeleteSubmit}
//         // onChange={this.handleChange}
//         // value={this.state.id}
//         // isEditing={this.state.isEditing}
//     >

//     </IconsEditAndNewForms>
//           </div>
//           </div>
//           </div>
//       </>
//     )
// }

export default EditNote;