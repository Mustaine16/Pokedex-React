import React from "react";
import PokemonListContext from "../../context/PokemonsContext";

import List from "./List";
import GenerationDropdown from "./GenerationDropdown";

const ListContainer = props => {
  return (
    <main>
      <section className="pkmn-list">
        <GenerationDropdown />
        <List />
      </section>
    </main>
  );
};

export default ListContainer;
