import React from "react";
import { Link , Redirect} from "react-router-dom";

import Sprite from "./Sprite";

const PokemonCard = ({ pokemon }) => {
  return (
    <Link to={{
      pathname: `${pokemon.id}`,
      backgroundType: pokemon.types[0].type.name
    }}>
      <article
        className={`${
          pokemon.types[1] ? pokemon.types[1].type.name : pokemon.types[0].type.name
        } pkmn-card`}
        pokemon-name={pokemon.name}
        pokemon-type1={pokemon.type1}
        pokemon-type2={pokemon.type2}>
        <h3 className="pkmn-name">{pokemon.name}</h3>
        <Sprite id={pokemon.id} name={pokemon.name}></Sprite>
      </article>
    </Link>
  );
};

export default PokemonCard;
