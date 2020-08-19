import React, { useState, useContext } from 'react';
import IconsColors from './IconsColors.js';
import DeleteBtn from './DeleteBtn.js';
import AddLabel from './AddLabel';
import CheckBoxes from './CheckBoxes';
import Pin from './Pin';
import Alert from './Alert';
import Share from './Share';
import InsertPhoto from './InsertPhoto';
import Archived from './Archived';
import Undo from './Undo';
import Redo from './Redo';
import More from './More';
import MakeACopy from './MakeACopy';
import CopyToGoogleDocs from './CopyToGoogleDocs';
import { MdAddAlert, MdPersonAdd, MdPalette, MdInsertPhoto, MdArchive, MdMoreVert, MdUndo, MdRedo, MdPinDrop} from 'react-icons/md'
import { FaThumbtack } from 'react-icons/fa';
import {NotaContext} from '../../contexts/NotaContext';

const alert =<MdAddAlert/>;
const person =<MdPersonAdd/>;
const palette =<MdPalette/>;
const insertPhoto =<MdInsertPhoto/>;
const archiveIcon  =<MdArchive/>;
const more =<MdMoreVert/>;
const undo =<MdUndo/>;
const redo =<MdRedo/>;
const pin =<FaThumbtack/>

const IconsEditAndNewForms=({onClick, onChange, value, isEditing, editingMode, handleColor, onChangeArchived, checked})=>{
    const context = useContext(NotaContext);
    const isClicked = context.state.isClicked;
    const [isMoreSettings, setIsMoreSettings] = useState(false)
    const [hover, setHover] = useState(false)

    const hoverIn = ()=>{setHover(true)}
    const hoverOut = ()=>{setHover(false)}
    const handleMoreSettings = ()=>{setIsMoreSettings(!isMoreSettings)}

    return(
    <>
        <div className={`IconsNote FormIconsPadding`}>
            <Alert alert={alert}></Alert>
            
            <Share person={person}></Share>
            
            <li className="FormIconsItself" onMouseEnter={hoverIn} onMouseLeave={hoverOut}>{palette}</li>
            <InsertPhoto insertPhoto={insertPhoto}></InsertPhoto>
            
            <Archived checked={checked} onChangeArchived={onChangeArchived}></Archived>
            {/* <More more={more}></More> */}
            <li className="FormIconsItself" onClick={handleMoreSettings}>{more}</li>

            <Undo undo={undo}></Undo>
            <Redo redo={redo}></Redo>
            {/* mudar conforme se for nota editada ou nova nota? */}
            <li className="FormIconsItself CloseBtn" onClick={editingMode}>Close</li>
            {/* <li className="PinBtn" onClick={handlePinSetting}>{pin}</li> */}
            {/* <Pin handlePin={handlePin} pin={pin}></Pin> */}
        </div>

        <div className={`MoreColors ColorsEditMode ${hover === false ? 'HideColors' : '' }`} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
            <IconsColors handleColor={handleColor}>{palette}</IconsColors>
        </div>

        <div className={`MoreOptions OptionsEditMode ${isMoreSettings === false ? 'Hide' : ''}`}>
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
            <MakeACopy></MakeACopy>
            <CheckBoxes></CheckBoxes>
            <CopyToGoogleDocs></CopyToGoogleDocs>
                </> : ''
            }
        </div>
        </>
    );
}

export default IconsEditAndNewForms;