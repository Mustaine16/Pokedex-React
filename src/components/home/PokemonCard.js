import React from "react";
import { Link } from "react-router-dom";

import Sprite from "./Sprite";

const PokemonCard = ({ data }) => {
  return (
    <Link to={`${data.id}`}>
      <article
        className={`${
          data.types[1] ? data.types[1].type.name : data.types[0].type.name
        } pkmn-card`}
        data-name={data.name}
        data-type1={data.type1}
        data-type2={data.type2}>
        <h3 className="pkmn-name">{data.name}</h3>
        <Sprite id={data.id} name={data.name}></Sprite>
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
