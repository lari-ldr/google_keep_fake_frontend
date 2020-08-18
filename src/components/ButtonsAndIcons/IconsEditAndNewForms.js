import React, { useState, useContext } from 'react';
import IconsColors from './IconsColors.js';
import DeleteBtn from './DeleteBtn.js';
import AddLabel from './AddLabel';
import CheckBoxes from './CheckBoxes';
import Pin from './Pin';
import Archived from './Archived';
import { MdAddAlert, MdPersonAdd, MdPalette, MdInsertPhoto, MdArchive, MdMoreVert, MdUndo, MdRedo, MdPinDrop} from 'react-icons/md'
import { FaThumbtack } from 'react-icons/fa';
import {NotaContext} from '../../contexts/NotaContext';

const IconsEditAndNewForms=({children, onClick, onChange, value, isEditing, editingMode, handleColor, handlePin, handleArchived})=>{
    const context = useContext(NotaContext);
    const isClicked = context.state.isClicked;
    const [isMoreSettings, setIsMoreSettings] = useState(false)
    const [hover, setHover] = useState(false)
    // const [pinNote, setPinNote] = useState(false)
    // const [archivedNote, setArchivedNote] = useState(false)

    const alert =<MdAddAlert/>;
    const person =<MdPersonAdd/>;
    const palette =<MdPalette/>;
    const insertPhoto =<MdInsertPhoto/>;
    const archive  =<MdArchive/>;
    const more =<MdMoreVert/>;
    const undo =<MdUndo/>;
    const redo =<MdRedo/>;
    const pin =<FaThumbtack/>

    const hoverIn = ()=>{setHover(true)}
    const hoverOut = ()=>{setHover(false)}
    const handleMoreSettings = ()=>{setIsMoreSettings(!isMoreSettings)}
    // const handlePinSetting = ()=>{
    //     setPinNote(!pinNote)
    //     handlePin(pinNote)
    // }
    // const handleArchivedSetting = ()=>{
    //     setArchivedNote(!archivedNote)
    //     handleArchived(archivedNote)
    // }
    // console.log(pinNote)
    return(
    <>
        <ul className={`IconsNote FormIconsPadding`}>
            <li className="FormIconsItself">{alert}</li>
            <li className="FormIconsItself NotShare">{person}</li>
            <li className="FormIconsItself" onMouseEnter={hoverIn} onMouseLeave={hoverOut}>{palette}</li>
            <li className="FormIconsItself">{insertPhoto}</li>
            <Archived handleArchived={handleArchived} archive={archive}></Archived>
            {/* <li className="FormIconsItself" onClick={handleArchivedSetting}>{archive}</li> */}
            <li className="FormIconsItself" onClick={handleMoreSettings}>{more}</li>
            <li className="FormIconsItself">{undo}</li>
            <li className="FormIconsItself">{redo}</li>
            {/* mudar conforme se for nota editada ou nova nota? */}
            <li className="FormIconsItself CloseBtn" onClick={editingMode}>Close</li>
            {/* <li className="PinBtn" onClick={handlePinSetting}>{pin}</li> */}
            {/* <Pin handlePin={handlePin} pin={pin}></Pin> */}
        </ul>

        <div className={`MoreColors ColorsEditMode ${hover === false ? 'HideColors' : '' }`} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
            <IconsColors handleColor={handleColor}>{palette}</IconsColors>
        </div>

        <ul className={`MoreOptions OptionsEditMode ${isMoreSettings === false ? 'Hide' : ''}`}>
            {/* options for new note only */}
            {isClicked ?
                <>
                    <AddLabel></AddLabel>
                    <CheckBoxes></CheckBoxes>
                </> 
            : ''}

            {/* options for note edit only */}
            {isEditing ?
                <>
            <DeleteBtn onClick={onClick} onChange={onChange} value={value}></DeleteBtn>
            <AddLabel></AddLabel>
            <li>Make a copy</li>
            <CheckBoxes></CheckBoxes>
            <li>Copy to Google Docs</li>
                </> : ''
            }
        </ul>
        </>
    );
}

export default IconsEditAndNewForms;