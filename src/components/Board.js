import React, {useContext} from 'react';
import NewNote from './NewNote.js';
import Card from './Card.js';
import Pinned from './Pinned.js';
import NotPinned from './NotPinned.js';
// import EditNote from './EditNote.js';
import { NotaContext } from '../contexts/NotaContext';

const Board=()=>{
  const context = useContext(NotaContext);
    return(
      <>
      <NewNote></NewNote>
      <main className="BoardMain" onClick={()=>{context.handleFormVisibilityOutside()}} > 
      {/* <Card></Card> */}
      <Pinned></Pinned>
      <NotPinned></NotPinned>
      {/* <EditNote></EditNote> */}
    </main>
    </>
    );
}

export default Board;