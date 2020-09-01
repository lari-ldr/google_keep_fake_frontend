import React, { useContext } from 'react';
import { RouterContext, history } from '../contexts/RouterContext';

const Link = (props) => {
  // const context = useContext(NotaContext);

  const { to, onClick, children } = props;
  const { route } = useContext(RouterContext);

  const handleClick = (event) => {
    event.preventDefault();
    if (route.path === to) {
      return;
    }
    if (onClick) {
      onClick(event);
    }
    history.push(to);
  };

  return (
    <a {...props} onClick={handleClick}>
      {children}
    </a>
  );
};

export default Link;
