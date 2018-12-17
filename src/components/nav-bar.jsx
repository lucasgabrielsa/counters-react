import React, { Component } from "react";

//Stateless Functional Component
const NavBar = props => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar -> Total de Contadores: {props.counters.length}
      </a>
    </nav>
  );
};

export default NavBar;
