import React, { useState } from "react";

export default function TypesMenu(props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="burger-button" onClick={() => setOpen(!open)}>
        <div className="burgerline"></div>
        <div className="burgerline"></div>
        <div className="burgerline"></div>
      </div>
      <div className={open ? "search-types search-types-active" : "search-types"}>
        <span>By Types</span>
        <ul className="search-types-list">
          <li
            onClick={props.onChangeType}
            data-value="all"
            className="allTypes"
          >
            All
          </li>
          <li onClick={props.onChangeType} data-value="grass" className="grass">
            Grass
          </li>
          <li onClick={props.onChangeType} data-value="water" className="water">
            Water
          </li>
          <li onClick={props.onChangeType} data-value="fire" className="fire">
            Fire
          </li>
          <li onClick={props.onChangeType} data-value="bug" className="bug">
            Bug
          </li>
          <li onClick={props.onChangeType} data-value="steel" className="steel">
            Steel
          </li>
          <li
            onClick={props.onChangeType}
            data-value="dragon"
            className="dragon"
          >
            Dragon
          </li>
          <li
            onClick={props.onChangeType}
            data-value="electric"
            className="electric"
          >
            Electric
          </li>
          <li onClick={props.onChangeType} data-value="ghost" className="ghost">
            Ghost
          </li>
          <li onClick={props.onChangeType} data-value="fairy" className="fairy">
            Fairy
          </li>
          <li onClick={props.onChangeType} data-value="ice" className="ice">
            Ice
          </li>
          <li
            onClick={props.onChangeType}
            data-value="fighting"
            className="fighting"
          >
            Fighting
          </li>
          <li
            onClick={props.onChangeType}
            data-value="normal"
            className="normal"
          >
            Normal
          </li>
          <li
            onClick={props.onChangeType}
            data-value="psychic"
            className="psychic"
          >
            Psychic
          </li>
          <li onClick={props.onChangeType} data-value="rock" className="rock">
            Rock
          </li>
          <li onClick={props.onChangeType} data-value="dark" className="dark">
            Dark
          </li>
          <li
            onClick={props.onChangeType}
            data-value="ground"
            className="ground"
          >
            Ground
          </li>
          <li
            onClick={props.onChangeType}
            data-value="poison"
            className="poison"
          >
            Poison
          </li>
          <li
            onClick={props.onChangeType}
            data-value="flying"
            className="flying"
          >
            Flying
          </li>
        </ul>
      </div>
    </>
  );
}
