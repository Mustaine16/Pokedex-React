import React from "react";

import PokemonCard from "./PokemonCard";

function List(props) {
  return props.filteredList.map(e => (
    <PokemonCard data={e} key={e.id}></PokemonCard>
  ));
}
export default List;
