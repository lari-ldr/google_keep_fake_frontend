import React, {useState, useContext} from 'react';
import {NotaContext} from '../contexts/NotaContext';
import DeleteBtn from './ButtonsAndIcons/DeleteBtn';

const Label = ({label, labelIconOutlined, labelIcon })=>{
    const context = useContext(NotaContext);
    const [labelEditing, setLabelEditing] = useState(false)
    const [edLabel, setEdLabel] = useState({
        id: label.id,
        labels: label.labels
    })

    const handleChangeLabel=(event)=>{
        const {name, value} = event.target
        setEdLabel({...edLabel, [name]: value})
    }

    const handleSubmitLabel=(event)=>{
        event.preventDefault()
        const labelDeleted = label;
        context.putEditLabel(labelDeleted);
        setLabelEditing(false)
    }

    const handleSubmitEditedLabel=(event)=>{
        event.preventDefault()
        context.putEditLabel(edLabel);
    }

    const labelEdit=()=>{
        setLabelEditing(!labelEditing)
    }

return(
<>
<div className="OptionsContainer" id={edLabel.id}>
    {labelIcon ? <p className={`${labelIcon} IconHover OptionsIcon`}>label</p> : <p className={`${labelIconOutlined} OptionsIcon`} >label</p> }
    {labelIcon ? <DeleteBtn labelId={label.id} handleChangeLabel={handleChangeLabel} handleSubmitLabel={handleSubmitLabel} materialIcon="material-icons OptionsIcon"></DeleteBtn> : null }
    {labelEditing === true ? <form
        className="LabelForm"
        onSubmit={handleSubmitEditedLabel}
    >
        <input
            aria-label="true"
            className="LabelInput"
            type="text"
            name="labels"
            // value={label.labels}
            defaultValue={edLabel.labels}
            onChange={handleChangeLabel}
        ></input>
        <button>send</button>
    </form> :  <span className="OptionsText">{label.labels}</span>}
    {labelIcon ? <button className="material-icons" onClick={labelEdit}>checked</button> : ''}
</div> 
</>
);
}

export default Label;