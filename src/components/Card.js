import React, {useContext} from 'react';
import Note from './Note.js'
import { NotaContext } from '../contexts/NotaContext';

const Card = () =>{
    const context = useContext(NotaContext);
    const {handleFormVisibilityOutside, isLoaded} = useContext(NotaContext);
    // const isLoaded = context.state.isLoaded

    const allNotes = context.data.map((note)=>{
        return(
            <>
            <Note key={note.id} indexID={note.id} note={note}/>
            </>
        )
    })
return(
    // <></>
    <div className="ContainerItems" onClick={()=>{handleFormVisibilityOutside()}}>
    <h4 className="NotesAreaTitle">Pinned / Others</h4>
    <h5 className={`${isLoaded ? 'None' : 'Block'}`} >Loading... wait a minute</h5>
    <div className="ContainerNotes">
    {allNotes}
    </div>
    </div>
);
}

export default Card;