import React from "react";

function Navbar() {
  return (
    <header className="header-sticky">
      <nav className="nav-bar">
        <div className="burger-button">
          <div className="burgerline"></div>
          <div className="burgerline"></div>
          <div className="burgerline"></div>
        </div>
        <div className="search-types">
          <span>By Types</span>
          <ul className="search-types-list">
            <li className="allTypes">All</li>
            <li className="grass">Grass</li>
            <li className="water">Water</li>
            <li className="fire">Fire</li>
            <li className="bug">Bug</li>
            <li className="steel">Steel</li>
            <li className="dragon">Dragon</li>
            <li className="electric">Electric</li>
            <li className="ghost">Ghost</li>
            <li className="fairy">Fairy</li>
            <li className="ice">Ice</li>
            <li className="fighting">Fighting</li>
            <li className="normal">Normal</li>
            <li className="psychic">Psychic</li>
            <li className="rock">Rock</li>
            <li className="dark">Dark</li>
            <li className="ground">Ground</li>
            <li className="poison">Poison</li>
            <li className="flying">Flying</li>
          </ul>
        </div>
        <div className="search-text">
          <input
            type="text"
            className="search-input"
            placeholder="Search for a Pokemon..."
          />
          <button className="clear-search"></button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
