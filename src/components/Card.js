import React, {useContext} from 'react';
import Note from './Note.js'
import { NotaContext } from '../contexts/NotaContext';

const Card = () =>{
    const context = useContext(NotaContext);
    // const [isEditing, setStateIsEditing] = useState();
    const allNotes = context.data.map((note) =>{
        return(
            <>
            <Note key={note.id} indexID={note.id} note={note}/>
            </>
        )
    })

// const switchBetweenModes = isEditing ? <NoteEdit/> : {allNotes}
return(
    <div className="ContainerItems">
    {allNotes}
    {/* <p>testing</p> */}
    </div>
    
);
}

export default Card;