import React, {useContext} from "react";

import PokemonListContext from '../../context/HomeContext'

import {useFilterByName} from '../../hooks/useFilterName'

function SearchMenu() {

  const {actions:{filterByName}} = useContext(PokemonListContext)

  const [query,handleChangeQuery] = useFilterByName(filterByName)

  return (
    <div className="search-text">
      <input
        value={query}
        type="text"
        className="search-input"
        placeholder="Search for a Pokemon..."
        onChange={(event)=>handleChangeQuery(event.target.value.toLowerCase())}
      />
      <button className="clear-search" onClick={()=>handleChangeQuery("")}></button>
    </div>
  );
}

export default SearchMenu