import React, { useContext } from "react";
import { NotaContext } from "../contexts/NotaContext";

const Route = ({ path, children }) => {
  // const context = useContext(NotaContext);
  const { route } = useContext(NotaContext);
  console.log(route);
  if (route.path !== path) {
    return null;
  }
  return children;
};

export default Route;
