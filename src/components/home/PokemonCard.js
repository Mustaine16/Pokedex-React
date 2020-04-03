import React from "react";
import { Link } from "react-router-dom";

import Sprite from "./Sprite";

const PokemonCard = ({ pokemon, showCaption = false }) => {
  return (
    <Link
      to={{
        pathname: `${pokemon.id}`
      }}
      aria-label={pokemon.name}
      className={`${
        pokemon.types[1]
          ? pokemon.types[1].type.name
          : pokemon.types[0].type.name
      } pkmn-card`}
      pokemon-name={pokemon.name}
    >
      <h3 className="pkmn-name">{pokemon.name}</h3>
      <Sprite
        id={pokemon.id}
        name={pokemon.name}
        showCaption={showCaption}
      ></Sprite>
    </Link>
  );
};

export default PokemonCard;
