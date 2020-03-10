import React from "react";

import TypesMenu from "./TypesMenu"
import SearchMenu from "./SearchMenu"

function Navbar() {
  return (
    <header className="header-sticky">
      <nav className="nav-bar">
        <TypesMenu/>
        <SearchMenu/>
      </nav>
    </header>
  );
}

export default Navbar;
