import React, { useState, useContext } from "react";

import PokemonListContext from '../../context/HomeContext'

export default function TypesMenu() {

  const {actions:{filterByType}} = useContext(PokemonListContext)

  const [open, setOpen] = useState(false);

  const types = [
    "reset",
    "grass",
    "water",
    "fire",
    "electric",
    "bug",
    "poison",
    "rock",
    "ground",
    "flying",
    "normal",
    "ghost",
    "fighting",
    "psychic",
    "ice",
    "dark",
    "steel",
    "dragon",
    "fairy"
  ];

  return (
    <>
      <div className="burger-button" onClick={() => setOpen(!open)}>
        <div className="burgerline"></div>
        <div className="burgerline"></div>
        <div className="burgerline"></div>
      </div>
      <div
        className={open ? "search-types search-types-active" : "search-types"}
      >
        <span>By Types</span>

        {/* TYPES LIST */}

        <ul className="search-types-list">
          {types.map((type) => {
            return (
              <li
                key={type + "filter"}
                onClick={(event)=>{
                  filterByType(event)
                  setOpen(false)
                }}
                data-value={type}
                className={type}
              >
                {type.toUpperCase()}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
