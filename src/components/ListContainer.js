import React from "react";

import List from "./List";
import GenerationDropdown from "./GenerationDropdown";

const ListContainer = props => {
  return (
    <main>
      <section className="pkmn-list">
        <GenerationDropdown onChange={props.onChange} />
        <List filteredList={props.filteredList} />
      </section>
    </main>
  );
};

export default ListContainer;
