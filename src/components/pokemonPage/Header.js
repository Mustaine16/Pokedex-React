import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PokemonContext } from "../../context/PokemonContext";

import Sprite from "../home/Sprite";
import Types from "../home/Types";

import "./css/Header.css";

function Header() {
  const {
    state: { pokemon }
  } = useContext(PokemonContext);

  const name = pokemon.species.name;
  const { id, types } = pokemon;

  return (
    <header className={`${types[0].type.name} pkmn-hero`}>
      <div style={{ position: " relative" }}>
      <Link to="/" >
        <img src="./img/left-arrow.svg" className="back-arrow" alt="arrow that indicates relation base to evolution"></img>
      </Link>
      <h1 className="pkmn-name name-open">{name}</h1>
      <Sprite name={name} id={id}></Sprite>
      <Types types={types} />
      </div>
    </header>
  );
}

export default Header;
