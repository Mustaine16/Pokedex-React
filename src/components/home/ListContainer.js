import React, {useContext} from "react";
import PokemonListContext from '../../context/PokemonsContext'

import List from "./List";
import GenerationDropdown from "./GenerationDropdown";
import pokeballMissing from "./img/pokeball-miss.png";



const ListContainer = props => {
  
  const [state, dispatch] = useContext(PokemonListContext)
  
  if (state.filteredList.length > 0) {
    return (
      <main>
        <section className="pkmn-list">
          <GenerationDropdown dispatch={dispatch}/>
          <List filteredList={state.filteredList}/>
        </section>
      </main>
    );
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
};

export default ListContainer;
