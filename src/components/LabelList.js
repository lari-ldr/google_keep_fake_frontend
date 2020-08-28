import React, { useContext } from 'react';
import {NotaContext} from '../contexts/NotaContext';
import Label from './Label'

const LabelList = ({labelIconOutlined, labelIcon })=>{
    const context = useContext(NotaContext);

    const allLabels = context.state.labels.map((label) =>{
        return(
            <Label key={label.id} label={label} labelIconOutlined={labelIconOutlined} labelIcon={labelIcon} ></Label>
        )
    })

    return(
    <>
    {allLabels}
    </>
    );
}

export default LabelList;