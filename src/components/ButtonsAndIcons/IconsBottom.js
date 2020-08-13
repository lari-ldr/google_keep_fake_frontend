import React, { useState } from 'react';
import DeleteBtn from './DeleteBtn.js';
import IconsColors from './IconsColors.js';
import { MdAddAlert, MdPersonAdd, MdPalette, MdInsertPhoto, MdArchive, MdMoreVert, MdUndo, MdRedo, MdCheck} from 'react-icons/md'
// import { FaThumbtack } from 'react-icons/fa';

const IconsBottom = ({children, onClick, onChange, value})=>{
    const [isMoreSettings, setIsMoreSettings] = useState(false)
    const [hover, setHover] = useState(false)
    const alert =<MdAddAlert/>;
    const person =<MdPersonAdd/>;
    const palette =<MdPalette/>;
    const insertPhoto =<MdInsertPhoto/>;
    const archive  =<MdArchive/>;
    const more =<MdMoreVert/>;
    // const check =<MdCheck/>;
    // const pin =<FaThumbtack/>;
    // const undo = <MdUndo/>;
    // const redo = <MdRedo/>;

    return(
        <>
    <ul className={`IconsNote`}>
      <li className="FormIconsItself">{alert}</li>
      <li className="FormIconsItself NotShare" aria-disabled="true">{person}</li>
      <li className="FormIconsItself" onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}}>{palette}</li>
      <li className="FormIconsItself">{insertPhoto}</li>
      <li className="FormIconsItself">{archive}</li>
      <li className="FormIconsItself" onClick={()=>{setIsMoreSettings(!isMoreSettings)}}>{more}</li>
      </ul>
      <div className={`MoreColors ${hover === false ? 'HideColors' : '' }`} onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}}>
        <IconsColors></IconsColors>
      </div>
      <ul className={`MoreOptions ${isMoreSettings === false ? 'Hide' : ''}`}>
          <DeleteBtn onClick={onClick} onChange={onChange} value={value}></DeleteBtn>
          <li>Add label</li>
          <li>Make a copy</li>
          <li>Show checkboxes</li>
          <li>Copy to Google Docs</li>
      </ul>
        </>
    );
}

export default IconsBottom;