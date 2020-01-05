import React, { useState } from "react";

const PokemonCard = props => {
  return (
    <article
      className={`${
        props.data.types[1]
          ? props.data.types[1].type.name
          : props.data.types[0].type.name
      }
          pkmn-card  
      `}
      data-name={props.data.name}
      data-type1={props.data.type1}
      data-type2={props.data.type2}>
      <h3 className="pkmn-name">{props.data.name}</h3>
      <h4>{props.data.id}</h4>
      <figure className="asset">
        <img
          src={`https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${props.data.name}.png`}
          className="sprite-ivysaur"
          height="100px"
          width="100px"
          alt={props.data.name}
          loading="lazy"
        />
      </figure>
    </article>
  );
};

export default PokemonCard;
