import React, {useState} from 'react';
import NoteEdit from './NoteEdit.js'

const BtnEdit = () =>{
    const [isEditing, setIsEditing] = useState(false)
    return(
    <>
    <button className="Edit" onClick={()=> setIsEditing(true) }>edit</button>
    {/* {isEditing ? (<NoteEdit></NoteEdit>) : null} */}
    {/* {isEditing ? (<NoteEdit/>) : null}
    // assim da erro: typeError: props.note is undefined, porque não estamos passando nada de informações por aqui */}
    {isEditing ? (<p>this is will be the edit BtnEdit button</p>) : null}
    </>
    );
}

export default BtnEdit;