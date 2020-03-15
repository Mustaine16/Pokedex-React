import React, { useContext } from "react";
import PokemonListContext from "../../context/HomeContext";

import PokemonCard from "./PokemonCard";
import pokeballMissing from "./img/pokeball-miss.png";

function List() {
  const {state:{filteredList}} = useContext(PokemonListContext);

  if (filteredList.length > 0) {
    return filteredList.map(e => (
      <PokemonCard pokemon={e} key={e.id}></PokemonCard>
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
