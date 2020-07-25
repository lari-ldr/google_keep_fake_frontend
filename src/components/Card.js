import React, {useContext} from 'react';
import Note from './Note.js'
import { NotaContext } from '../contexts/NotaContext';

const Card = () =>{
    const context = useContext(NotaContext);
    const {handleFormVisibilityOutside} = useContext(NotaContext);
    const allNotes = context.data.map((note) =>{
        return(
            <>
            <Note key={note.id} indexID={note.id} note={note}/>
            </>
        )
    })

return(
    <div className="ContainerItems" onClick={()=>{handleFormVisibilityOutside()}}>
    <h4 className="NotesAreaTitle">Pinned / Others</h4>
    <div className="ContainerNotes">
    {allNotes}
    </div>
    </div>
);
}

export default Card;