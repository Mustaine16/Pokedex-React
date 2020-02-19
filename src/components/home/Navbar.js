import React from "react";

function Navbar(props) {
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
            <li onClick={props.onClick} data-value="all" className="allTypes">
              All
            </li>
            <li onClick={props.onClick} data-value="grass" className="grass">
              Grass
            </li>
            <li onClick={props.onClick} data-value="water" className="water">
              Water
            </li>
            <li onClick={props.onClick} data-value="fire" className="fire">
              Fire
            </li>
            <li onClick={props.onClick} data-value="bug" className="bug">
              Bug
            </li>
            <li onClick={props.onClick} data-value="steel" className="steel">
              Steel
            </li>
            <li onClick={props.onClick} data-value="dragon" className="dragon">
              Dragon
            </li>
            <li
              onClick={props.onClick}
              data-value="electric"
              className="electric">
              Electric
            </li>
            <li onClick={props.onClick} data-value="ghost" className="ghost">
              Ghost
            </li>
            <li onClick={props.onClick} data-value="fairy" className="fairy">
              Fairy
            </li>
            <li onClick={props.onClick} data-value="ice" className="ice">
              Ice
            </li>
            <li
              onClick={props.onClick}
              data-value="fighting"
              className="fighting">
              Fighting
            </li>
            <li onClick={props.onClick} data-value="normal" className="normal">
              Normal
            </li>
            <li
              onClick={props.onClick}
              data-value="psychic"
              className="psychic">
              Psychic
            </li>
            <li onClick={props.onClick} data-value="rock" className="rock">
              Rock
            </li>
            <li onClick={props.onClick} data-value="dark" className="dark">
              Dark
            </li>
            <li onClick={props.onClick} data-value="ground" className="ground">
              Ground
            </li>
            <li onClick={props.onClick} data-value="poison" className="poison">
              Poison
            </li>
            <li onClick={props.onClick} data-value="flying" className="flying">
              Flying
            </li>
          </ul>
        </div>
        <div className="search-text">
          <input
            type="text"
            className="search-input"
            placeholder="Search for a Pokemon..."
            onChange={props.onChangeName}
          />
          <button className="clear-search"></button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
