import React, { useState, useContext } from "react";

import PokemonListContext from '../../context/PokemonsContext'

import {useFilterByTypes} from '../../hooks/useFilterType'

export default function TypesMenu(props) {
  const [state, dispatch] = useContext(PokemonListContext)
  const [open, setOpen] = useState(false);
  const handleFilterByType = useFilterByTypes(dispatch)
  const types = [
    "all",
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
        <ul className="search-types-list">
          {types.map((type) => {
            return (
              <li
                key={type + "filter"}
                onClick={(event)=>{
                  handleFilterByType(event)
                  setOpen(false)
                }}
                data-value={type}
                className={type}
              >
                {type}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
