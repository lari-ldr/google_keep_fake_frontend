import React from 'react';
import './App.css';
import NotaProvider from './contexts/NotaContext.js';
import RouterProvider from './contexts/RouterContext.js';
import {
  history,
  // RouterContext,
  // RouterProvider,
  // Route,
  // Link,
} from './contexts/RouterContext.js';
import Route from './components/Route';
import Link from './components/Link';
import Board from './components/Board.js';
import Nav from './components/Nav.js';
import SideBar from './components/SideBar.js';

const routes = {
  home: { path: '/' },
  about: { path: '/about' },
};

const NotFound = () => {
  return (
    <div>
      <p>404 - Not Found</p>
      <Link to={routes.home.path}>Back to home</Link>
    </div>
  );
};

const App = () => {
  return (
    // <NotaProvider>
    //   <Nav></Nav>
    //   <SideBar></SideBar>
    //   <Board></Board>
    // </NotaProvider>
    <RouterProvider routes={routes} NotFound={NotFound}>
      <Route path={routes.home.path}>
        <p>Home</p>
        <Link to={routes.about.path}>Go to about</Link>
        <br />
        <Link to='/unknown'>Go to unknown route</Link>
        <div className='link' onClick={() => history.push(routes.about.path)}>
          Programmatically go to about
        </div>
      </Route>

      <Route path={routes.about.path}>
        <p>About</p>
        <Link to={routes.home.path}>Go to home</Link>
      </Route>
    </RouterProvider>
  );
};

export default App;
