import React, {useState, useContext} from 'react';
import Masonry from 'react-masonry-component';
import Note from './Note.js';
import EditNote from './EditNote.js';

import { NotaContext } from '../contexts/NotaContext';

const SearchResults=()=>{
  const [editComponent, setEditComponent] = useState()
  const context = useContext(NotaContext);

  const componentEditMode = (id)=>{
    // return this.setState({editComponent: id})
    return setEditComponent(id)
}

const componentEditModeClose = (isEditing)=>{
    return (
        // this.setState({editComponent: isEditing})
        setEditComponent(isEditing)
    )
}
  const allNotesSearch = context.state.notesSearch.map((note)=>{
    return(
        <>
        <Note
            componentEditMode={componentEditMode}
            // key={note.id}
            indexID={note.id}
            isPinned={note.is_pinned}
            note={note}
        />    
        </>
    )
})

const allNotesEdit = context.state.notesSearch.map((note)=>{
  if(note.id === editComponent){
      return(
          <EditNote
            componentEditModeClose={componentEditModeClose}
            // key={note.id}
            indexID={note.id}
            note={note}
          ></EditNote>
      )
  } else{
      if(editComponent === null){

          return( null )
      }
  }
})
    return(
        <div style={{paddingLeft: '300px'}}>
        <Masonry>
           <p>search result will appears here</p>
           {allNotesSearch}
        </Masonry>
        {allNotesEdit}
        </div>
    );
}

export default SearchResults;