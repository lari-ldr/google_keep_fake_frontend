import React, {useContext} from 'react';
import { MdHighlight, MdNotifications, MdLabelOutline, MdEdit, MdArchive, MdDelete } from 'react-icons/md';
import {NotaContext} from '../contexts/NotaContext';


const SideBar = ()=>{
    const context = useContext(NotaContext);
    
    const idea = <MdHighlight/>;
    const reminder = <MdNotifications/>;
    const label = <MdLabelOutline/>;
    const editLabel = <MdEdit/>;
    const archive = <MdArchive/>;
    const del = <MdDelete/>;
    return(
    <div className="SideBar" onClick={()=>{context.handleFormVisibilityOutside()}}>
        <div className="OptionsContainer">
            <p className="OptionsIcon">{idea}</p>
            <span className="OptionsText">Notes</span>
        </div>
        <div className="OptionsContainer">
            <p className="OptionsIcon">{reminder}</p>
            <span className="OptionsText">Reminders</span>
        </div>
        <div className="OptionsContainer">
            <p className="OptionsIcon">{label}</p>
            <span className="OptionsText">Some Label</span>
        </div>
        <div className="OptionsContainer">
            <p className="OptionsIcon">{editLabel}</p>
            <span className="OptionsText">Edit Label</span>
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
    );
}


export default SideBar;
