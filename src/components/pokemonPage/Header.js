import React, { useContext } from "react";

import { PokemonContext } from "../../context/PokemonContext";

import Sprite from "../home/Sprite";
import Types from "../home/Types";

import "./css/Header.css";

function Header() {

  const {
    state: { 
      pokemon 
    }
  } = useContext(PokemonContext);

  const name = pokemon.species.name;
  const { id, types } = pokemon;

  return (
    <header className={`${types[0].type.name} pkmn-hero`}>
      <h1 className="pkmn-name name-open">{name}</h1>
      <Sprite name={name} id={id}></Sprite>
      <Types types={types} />
    </header>
  );
}

export default Header;
