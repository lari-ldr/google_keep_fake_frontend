import React from 'react';
import NewNote from './NewNote.js';
import Card from './Card.js';

const Board=()=>{
    return(
      <main className="BoardMain"> 
      <NewNote></NewNote>
      <Card></Card>
    </main>
    );
}

export default Board;