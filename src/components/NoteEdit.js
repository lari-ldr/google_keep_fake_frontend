import React from 'react';

const NoteEdit = (props) =>{
    return(
        <div key={props.note.id} className="Item">
        <form>
        
        <label className="EditTextLabelTitle">
        <input
          className="EditTextInputTitle Both"
          type="text"
          name="title"
          defaultValue={props.note.title}
        />
        </label>
            
        <label className="EditTextLabelMessage">
        <textarea
        className="EditTextInputMessage Both"
          name="content"
          defaultValue={props.note.content}
          rows="10"
          cols="10"
          />
        </label>
        <div>
        <button className="Save">save</button>
        <button className="Close">close</button>
        </div>
        </form>
        </div>
    );
}

export default NoteEdit;