import React, {useContext} from 'react';
import NotaListItem from './NotaListItem';
import { NotaContext } from '../contextTest/NotaContext';
 
// tanto o btnEdit quando o Notalist usam o state e o true e o false, se colocar no context, da pra ambos ter acesso
const NotaList = ()=>{
    // vamos pegar uma referencia do context
    const context = useContext(NotaContext);
    const {notas} = useContext(NotaContext);
    console.log(...notas)
    const data = context.notas.map(nota =>(
        <>
        <NotaListItem key={nota.id} nota={nota}></NotaListItem>
        </>
    ))
    return(
        <div className="NotaList">
            {data}
        </div>
    );
}

export default NotaList;