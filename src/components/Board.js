import React, {useContext} from 'react';
import NewNote from './NewNote.js';
import Card from './Card.js';
import { NotaContext } from '../contexts/NotaContext';

const Board=()=>{
  const context = useContext(NotaContext);
    return(
      <>
      <NewNote></NewNote>
      <main className="BoardMain" onClick={()=>{context.handleFormVisibilityOutside()}} > 
      <Card></Card>
    </main>
    </>
    );
}

export default Board;