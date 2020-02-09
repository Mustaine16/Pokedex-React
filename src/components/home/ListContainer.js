import React from "react";

import List from "./List";
import GenerationDropdown from "./GenerationDropdown";

import pokeballMissing from "./img/pokeball-miss.png";

const ListContainer = props => {
  if (props.filteredList.length > 0) {
    return (
      <main>
        <section className="pkmn-list">
          <GenerationDropdown onChange={props.onChange} />
          <List filteredList={props.filteredList} />
        </section>
      </main>
    );
  } else {
    return (
      <>
        <figure class="">
          <img src={pokeballMissing} alt="pokemon-missing" />
          <p>I don't think that pokemon does exist, try again!</p>
        </figure>
      </>
    );
  }
};

export default ListContainer;
