import React, { useState, useContext } from 'react';
import IconsColors from './IconsColors.js';
import DeleteBtn from './DeleteBtn.js';
import AddLabel from './AddLabel';
import CheckBoxes from './CheckBoxes';
import { MdAddAlert, MdPersonAdd, MdPalette, MdInsertPhoto, MdArchive, MdMoreVert, MdUndo, MdRedo, MdPinDrop} from 'react-icons/md'
import { FaThumbtack } from 'react-icons/fa';
import {NotaContext} from '../../contexts/NotaContext';

const IconsEditAndNewForms=({children, onClick, onChange, value, isEditing, editingMode})=>{
    const context = useContext(NotaContext);
    const isClicked = context.state.isClicked;
    const [isMoreSettings, setIsMoreSettings] = useState(false)
    const [hover, setHover] = useState(false) //colocar um set timeout no function hover
    const alert =<MdAddAlert/>;
    const person =<MdPersonAdd/>;
    const palette =<MdPalette/>;
    const insertPhoto =<MdInsertPhoto/>;
    const archive  =<MdArchive/>;
    const more =<MdMoreVert/>;
    const undo =<MdUndo/>;
    const redo =<MdRedo/>;
    const pin =<FaThumbtack/>

    return(
        <>
            <ul className={`IconsNote FormIconsPadding`}>
                <li className="FormIconsItself">{alert}</li>
                <li className="FormIconsItself NotShare">{person}</li>
                <li className="FormIconsItself" onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}}>{palette}</li>
                <li className="FormIconsItself">{insertPhoto}</li>
                <li className="FormIconsItself">{archive}</li>
                <li className="FormIconsItself" onClick={()=>{setIsMoreSettings(!isMoreSettings)}}>{more}</li>
                <li className="FormIconsItself">{undo}</li>
                <li className="FormIconsItself">{redo}</li>
                {/* mudar conforme se for nota editada ou nova nota? */}
                <li className="FormIconsItself CloseBtn" onClick={editingMode}>Close</li>
                <li className="PinBtn">{pin}</li>
              </ul>
            <div className={`MoreColors ColorsEditMode ${hover === false ? 'HideColors' : '' }`} onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}}>
            <IconsColors></IconsColors>
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