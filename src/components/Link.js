import React, { useContext } from "react";
import { NotaContext, history } from "../contexts/NotaContext";

const Link = (props) => {
  // const context = useContext(NotaContext);

  const { to, onClick, children } = props;
  const { route } = useContext(NotaContext);

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
