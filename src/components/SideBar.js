import React, {useContext, useState} from 'react';
import LabelList from './LabelList';
import NewLabel from './NewLabel';
import { MdHighlight, MdNotifications, MdEdit, MdArchive, MdDelete } from 'react-icons/md';
import {NotaContext} from '../contexts/NotaContext';



const SideBar = ()=>{
    const context = useContext(NotaContext);

    const [openLabelEdit, setOpenLabelEdit] = useState(false)
    const handleOpenLabelEdit = ()=>{setOpenLabelEdit(!openLabelEdit)}
    const idea = <MdHighlight/>;
    const reminder = <MdNotifications/>;
    const editLabel = <MdEdit/>;
    const archive = <MdArchive/>;
    const del = <MdDelete/>;
    return(
        <>
    <div className="SideBar" onClick={()=>{context.handleFormVisibilityOutside()}}>
        <div className="OptionsContainer">
            <p className="OptionsIcon">{idea}</p>
            <span className="OptionsText">Notes</span>
        </div>
        <div className="OptionsContainer">
            <p className="OptionsIcon">{reminder}</p>
            <span className="OptionsText">Reminders</span>
        </div>
        {/* <div className="OptionsContainer">
            <p className="OptionsIcon">{label}</p>
            <span className="OptionsText">Some Label</span>
        </div> */}
        <LabelList labelIconOutlined="material-icons-outlined" ></LabelList>
        <div className="OptionsContainer">
            <p className="OptionsIcon">{editLabel}</p>
            <span className="OptionsText" onClick={handleOpenLabelEdit}>Edit Label</span>
        </div>
        <div className="OptionsContainer">
            <p className="OptionsIcon">{archive}</p>
            <span className="OptionsText">Archive</span>
        </div>
        <div className="OptionsContainer">
            <p className="OptionsIcon">{del}</p>
            <span className="OptionsText">Trash</span>
        </div>
        
            {/* <ul>
                <li>Privacy</li>
                <li>Terms</li>
                <li>Open-source licenses</li>
            </ul> */}
        </div>
        {openLabelEdit ? <NewLabel handleOpenLabelEdit={handleOpenLabelEdit}></NewLabel> : null }
        </>
    );
}


export default SideBar;
