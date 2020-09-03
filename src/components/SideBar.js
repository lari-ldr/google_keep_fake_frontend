import React, { useContext, useState } from 'react';
import { Link } from 'wouter';
import NewLabel from './NewLabel';
import { NotaContext } from '../contexts/NotaContext';

const SideBar = () => {
  const context = useContext(NotaContext);
  const labelsLinks = context.state.labels.map((label) => {
    return (
      <>
        <div className='OptionsContainer'>
          <p className={`material-icons-outlined OptionsIcon`}>label</p>
          <Link href={`${label.labels}`}>
            <a className='OptionsText'>{label.labels}</a>
          </Link>
        </div>
      </>
    );
  });

  const [openLabelEdit, setOpenLabelEdit] = useState(false);
  const handleOpenLabelEdit = () => {
    setOpenLabelEdit(!openLabelEdit);
  };

  return (
    <>
      <div
        className='SideBar'
        onClick={() => {
          context.handleFormVisibilityOutside();
        }}
      >
        <div className='OptionsContainer'>
          <p className='material-icons-outlined OptionsIcon'>emoji_objects</p>
          <Link href='/home'>
            <a className='OptionsText'>Notes</a>
          </Link>
        </div>
        <div className='OptionsContainer'>
          <p className='material-icons-outlined OptionsIcon'>notifications</p>
          <Link href='/reminders'>
            <a className='OptionsText'>Reminders</a>
          </Link>
        </div>
        {labelsLinks}
        <div className='OptionsContainer'>
          <p className='material-icons-outlined OptionsIcon'>edit</p>
          <span className='OptionsText' onClick={handleOpenLabelEdit}>
            Edit Label
          </span>
        </div>
        <div className='OptionsContainer'>
          <p className='material-icons-outlined OptionsIcon'>archive</p>
          <Link href='/archived'>
            <a className='OptionsText'>Archive</a>
          </Link>
        </div>
        <div className='OptionsContainer'>
          <p className='material-icons-outlined OptionsIcon'>delete</p>
          <Link href='/trash'>
            <a className='OptionsText'>Trash</a>
          </Link>
        </div>

        {/* <ul>
                <li>Privacy</li>
                <li>Terms</li>
                <li>Open-source licenses</li>
            </ul> */}
      </div>
      {openLabelEdit ? (
        <NewLabel handleOpenLabelEdit={handleOpenLabelEdit}></NewLabel>
      ) : null}
    </>
  );
};

export default SideBar;
