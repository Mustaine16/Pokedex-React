import React from "react";
import { Link } from "react-router-dom";

const PokemonCard = props => {
  const padID = number => {
    var id = "" + number;

    while (id.length < 3) {
      id = "0" + id;
    }

    return id;
  };

  return (
    <Link to={`${props.data.id}`}>
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
            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${padID(
              props.data.id
            )}.png`}
            className={`sprite-${props.data.name}`}
            alt={props.data.name}
            loading="lazy"
          />
        </figure>
      </article>
    </Link>
  );
};

export default PokemonCard;

// <main>
// <section className="pkmn-list">
//   {localData.map((e, i) => (
//     <PokemonCard data={state[i]} key={state[i].id}></PokemonCard>
//   ))}
// </section>
// </main>

// <button
// onClick={() => {
//   setGen(gen === 7 ? 1 : gen + 1);

//   setState([]);
// }}>
// Click!
// </button>
