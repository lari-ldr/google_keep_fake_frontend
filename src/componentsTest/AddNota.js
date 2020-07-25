import React, { useContext, useState } from 'react';
import {NotaContext} from '../contextTest/NotaContext'; 

const AddNota = ()=>{
    const {saveNota} = useContext(NotaContext);
    const [nota, setNota] = useState()

    const handleFormSubmit = (e)=>{
        e.preventDefault();
        saveNota(nota);
    }

    const handleInputChange = (e)=>{
        setNota({
            ...nota,
            title: e.target.value,
        })
    }
    return(
        <form onSubmit={handleFormSubmit}>
            <input
                type="text"
                name="title"
                id="title"
                placeholder="add nova nota"
                onChange={handleInputChange}
            />
            <button>Add</button>
        </form>
    );
}

export default AddNota;