import React from 'react';
import Masonry from 'react-masonry-component';
import Note from './Note.js';
import EditNote from './EditNote.js';
import Pinned from './Pinned.js';
import NotPinned from './NotPinned.js';
import { NotaContext } from '../contexts/NotaContext';

class Card extends React.Component{
    constructor(props){
        super(props)
        this.componentEditMode = this.componentEditMode.bind(this)
        this.componentEditModeClose = this.componentEditModeClose.bind(this)
        this.state={
            editComponent: '',
        }
      }
      static contextType = NotaContext

      componentDidMount(){
        const context = this.context
        // const state = this.context.state.isEditing
        // console.log(context.state.isEditing)
      }
      componentEditMode(id){
        return this.setState({editComponent: id})
    }

    componentEditModeClose(isEditing){
        return (
            this.setState({editComponent: isEditing})
        )
    }
 
      render(){
       const allNotes = this.context.state.data.map((note)=>{
            return(
                <>
                <Note
                    componentEditMode={this.componentEditMode}
                    key={note.id}
                    indexID={note.id}
                    isPinned={note.is_pinned}
                    note={note}
                />    
                </>
            )
    
    })


    const allNotesEdit = this.context.state.data.map((note)=>{
        if(note.id === this.state.editComponent){
            return(
                <EditNote componentEditModeClose={this.componentEditModeClose} key={note.id} indexID={note.id} note={note}></EditNote>
            )
        } else{
            if(this.state.editComponent === null){

                return( null )
            }
        }
    })
        return(
            // <></>
            <div style={{paddingLeft: '300px'}}>
            {/* <h4 className="NotesAreaTitle">Pinned / Others</h4> */}
            <Masonry>
               
                {allNotes}
            </Masonry>
                {allNotesEdit}
            </div>
        );
      }
    }
    
// const style = {
//     backgroundColor: 'tomato'
// };

// const Card = () =>{
//     const [editComponent, setEditComponent] = useState()
//     const context = useContext(NotaContext);

//     const componentEditMode = (id)=>{
//         return setEditComponent(id)
//     }

//     const componentEditModeClose =(isEditing)=>{
//         return (
//             setEditComponent(isEditing)
//         )
//     }
//     const allNotes = context.state.data.map((note)=>{
//             return(
//                 <>
//                 <Note
//                     componentEditMode={componentEditMode}
//                     key={note.id}
//                     indexID={note.id}
//                     note={note}
//                 />
//                 </>
//             )
    
//     })


//     const allNotesEdit = context.state.data.map((note)=>{
//         if(note.id === editComponent){
//             return(
//                 <EditNote componentEditModeClose={componentEditModeClose} key={note.id} indexID={note.id} note={note}></EditNote>
//             )
//         } else{
//             if(editComponent === null){

//                 return( null )
//             }
//         }
//     })
// return(
//     // <></>
//     <div
//         style={{paddingLeft: '300px'}}
//         // className="ContainerItems"
//         // onClick={()=>{context.handleFormVisibilityOutside()}}
//     >
//     <h4 className="NotesAreaTitle">Pinned / Others</h4>
//     {/* <h5 className={`${isLoaded ? 'None' : 'Block'}`} >Loading... wait a minute</h5> */}
   
//     {/* <div className="ContainerNotes"> */}
    
//     <Masonry
//         // className={'ContainerNotes'}
//         // options={masonryOptions}
//         style={style}
//     >
//     {allNotes}
//     </Masonry>

    
//     {allNotesEdit}
//     {/* </div> */}
//     </div>
// );
// }

export default Card;