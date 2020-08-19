import React from 'react';

const TitleInput = ({aria-label="title of the note",
type="text",
name="title",
value={newNote.title},
title="colocar explicações",
placeholder="Title",
onChange={handleChangeInput},
className={`Title ${isClicked === false ? 'None' : ''}`}})=>{

    return(
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
    );
}

export default TitleInput;