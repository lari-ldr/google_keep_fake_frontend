import React, { useState } from 'react';
import { MdAddAlert, MdPersonAdd, MdPalette, MdInsertPhoto, MdArchive, MdMoreVert, MdUndo, MdRedo, MdCheck} from 'react-icons/md'
import { FaThumbtack } from 'react-icons/fa';

const IconsHead = ({pin})=>{
    const [isMoreSettings, setIsMoreSettings] = useState(false)
    const [hover, setHover] = useState(false)
    const alert =<MdAddAlert/>;
    const person =<MdPersonAdd/>;
    const palette =<MdPalette/>;
    const insertPhoto =<MdInsertPhoto/>;
    const archive  =<MdArchive/>;
    const more =<MdMoreVert/>;
    const check =<MdCheck/>;
    // const pin =<FaThumbtack/>;
    const undo = <MdUndo/>;
    const redo = <MdRedo/>;
    return(
        <>
        <ul className="NotesIconsHead">
        <li className="NoteIconHeadCheck">{check}</li>
        {/* <li className="NoteIconHeadPin">{pin}</li> */}
        <li className={`NoteIconHeadPin ${pin === true ? 'material-icons' : 'material-icons-outlined' }`}>push_pin</li>
        </ul>
        </>
    );
}

export default IconsHead;