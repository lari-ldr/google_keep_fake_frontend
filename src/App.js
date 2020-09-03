import React from 'react';
import './App.css';
import NotaProvider from './contexts/NotaContext.js';
import Board from './components/Board.js';
import Nav from './components/Nav.js';
import SideBar from './components/SideBar.js';

const App = () => {
  return (
    <NotaProvider>
      <Nav></Nav>
      <SideBar></SideBar>
      <Board></Board>
    </NotaProvider>
  );
};

export default App;
