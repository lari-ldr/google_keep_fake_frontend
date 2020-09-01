import React, { useContext } from 'react';
import { RouterContext } from '../contexts/RouterContext';

const Route = ({ path, children }) => {
  // const context = useContext(NotaContext);
  const { route } = useContext(RouterContext);

  if (route.path !== path) {
    return null;
  }
  return children;
};

export default Route;
