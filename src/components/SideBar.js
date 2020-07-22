import React from 'react';
import { MdHighlight, MdNotifications, MdLabelOutline, MdEdit, MdArchive, MdDelete } from 'react-icons/md'


const SideBar = ()=>{
    const idea = <MdHighlight/>;
    const reminder = <MdNotifications/>;
    const label = <MdLabelOutline/>;
    const editLabel = <MdEdit/>;
    const archive = <MdArchive/>;
    const del = <MdDelete/>;
    return(
        <div className="SideBar">
            <ul className="OptionsContainer">
    <li className="Options">{idea}<span>Notes</span></li>
    <li className="Options">{reminder}<span>Reminders</span></li>
    <li className="Options">{label}<span>Some Label</span></li>
    <li className="Options">{editLabel}<span>Edit Label</span></li>
    <li className="Options">{archive}<span>Archive</span></li>
    <li className="Options">{del}<span>Trash</span></li>
            </ul>
            {/* <ul>
                <li>Privacy</li>
                <li>Terms</li>
                <li>Open-source licenses</li>
            </ul> */}
        </div>
    );
}


export default SideBar;
