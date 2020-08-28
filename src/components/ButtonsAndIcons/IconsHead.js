import React from 'react';


const IconsHead = ({pin})=>{

    return(
        <>
        <ul className="NotesIconsHead">
        <li className="material-icons NoteIconHeadCheck">check</li>
        {/* <li className="NoteIconHeadPin">{pin}</li> */}
        <li className={`NoteIconHeadPin ${pin === true ? 'material-icons' : 'material-icons-outlined' }`}>push_pin</li>
        </ul>
        </>
    );
}

export default IconsHead;