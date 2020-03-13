import React, { useContext } from "react";
import PokemonListContext from "../../context/PokemonsContext";

import PokemonCard from "./PokemonCard";
import pokeballMissing from "./img/pokeball-miss.png";

function List() {
  const {state} = useContext(PokemonListContext);
  console.log(state);

  if (state.filteredList.length > 0) {
    return state.filteredList.map(e => (
      <PokemonCard data={e} key={e.id}></PokemonCard>
    ));
  } else {
    return (
      <>
        <figure className="">
          <img src={pokeballMissing} alt="pokemon-missing" />
          <p>I don't think that pokemon does exist, try again!</p>
        </figure>
      </>
    );
  }
}
export default List;
