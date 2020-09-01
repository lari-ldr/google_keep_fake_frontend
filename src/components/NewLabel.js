import React, { useContext, useState } from 'react';
import LabelList from './LabelList';
import { NotaContext } from '../contexts/NotaContext';

const NewLabel = ({ handleOpenLabelEdit }) => {
  const [newLabel, setNewLabel] = useState({
    labels: '',
  });
  const context = useContext(NotaContext);

  const handleChangeLabel = (event) => {
    const { name, value } = event.target;
    setNewLabel({ ...newLabel, [name]: value });
  };

  const handleSubmitLabel = (event) => {
    event.preventDefault();
    context.saveNewLabel(newLabel);
    setNewLabel({
      labels: '',
    });
  };
  return (
    <div className={`NoteModal`}>
      <div className='LabelContainerModal'>
        <div className='LabelDesign'>
          <p className='LabelEdit'>Edit labels</p>
          <form className='LabelForm' onSubmit={handleSubmitLabel}>
            <button className='material-icons'>+</button>
            <input
              aria-label='Label-input'
              className='LabelInput'
              type='text'
              name='labels'
              value={newLabel.labels}
              placeholder='Create new label'
              onChange={handleChangeLabel}
            ></input>
            <button className='material-icons'>checked</button>
          </form>
          <LabelList labelIcon='material-icons'></LabelList>
          <button onClick={handleOpenLabelEdit}>Done</button>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default NewLabel;
