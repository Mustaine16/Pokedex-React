import React, {useContext} from "react";

import PokemonListContext from '../../context/PokemonsContext'

import {useFilterByName} from '../../hooks/useFilterName'

function SearchMenu() {

  const [state, dispatch] = useContext(PokemonListContext)

  const handleChangeQuery = useFilterByName(dispatch)

  return (
    <div className="search-text">
      <input
        type="text"
        className="search-input"
        placeholder="Search for a Pokemon..."
        onChange={(event)=>handleChangeQuery(event)}
      />
      <button className="clear-search"></button>
    </div>
  );
}

export default SearchMenu