import React from "react";

import TypesMenu from "./TypesMenu"
import SearchMenu from "./SearchMenu"

function Navbar(props) {
  return (
    <header className="header-sticky">
      <nav className="nav-bar">
        <TypesMenu onChangeType={props.onChangeType}/>
        <SearchMenu onChangeName = {props.onChangeName}/>
      </nav>
    </header>
  );
}

export default Navbar;
