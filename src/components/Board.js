import React, {useContext} from 'react';
import NewNote from './NewNote.js';
import SearchResults from './SearchResults';
import Pinned from './Pinned.js';
import NotPinned from './NotPinned.js';
// import EditNote from './EditNote.js';
import { NotaContext } from '../contexts/NotaContext';

const Board=()=>{
  const context = useContext(NotaContext);
  const isSearchInputClicked = context.state.isSearchInputClicked

  // TRAZER O MAP PRA CA E PASSA-LOS PARA OS DEMAIS COMPONENTES
    return(
      <>
      {isSearchInputClicked ? null : <NewNote></NewNote> }
      {/* <NewNote></NewNote> */}
      <main className="BoardMain" onClick={()=>{context.handleFormVisibilityOutside()}} > 
      {
      isSearchInputClicked ? <SearchResults></SearchResults>
      :
      <>
      <Pinned></Pinned>
      <NotPinned></NotPinned>
      </>
      }
    </main>
    </>
    );
}

export default Board;