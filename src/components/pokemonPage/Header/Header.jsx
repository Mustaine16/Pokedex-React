import React from "react";

import Sprite from "../../home/Sprite";
import Types from "../../home/Types";

import "./Header.css";

function Header({ types, name, id }) {
  return (
    <header
      className={`${
        types[1] ? types[1].type.name : types[0].type.name
      } pkmn-hero`}>
      <h1 className="pkmn-name name-open">{name}</h1>
      <Sprite name={name} id={id}></Sprite>
      <Types types={types} />
    </header>
  );
}

export default Header;
