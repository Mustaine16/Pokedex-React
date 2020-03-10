import React from "react";

import PokemonCard from "./PokemonCard";

function List({filteredList}) { 

  return filteredList.map(e => (
    <PokemonCard data={e} key={e.id}></PokemonCard>
  ));
}
export default List;
