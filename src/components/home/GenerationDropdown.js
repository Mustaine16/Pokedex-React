import React, { useContext } from "react";

import PokemonListContext from "../../context/PokemonsContext";

 import {useFilterByGeneration} from '../../hooks/useFilterGeneration'

import "./styles/GenerationDropdown.css";

function GenerationDropdown() {
  const {
    actions: { filterByGeneration }
  } = useContext(PokemonListContext);

  const handleChangeGeneration = useFilterByGeneration(filterByGeneration)

  return (
    <select
      onChange={event => {
        handleChangeGeneration(event);
      }}
      className="gen-name"
    >
      <option value="1">1° Gen</option>
      <option value="2">2° Gen</option>
      <option value="3">3° Gen</option>
      <option value="4">4° Gen</option>
      <option value="5">5° Gen</option>
      <option value="6">6° Gen</option>
      <option value="7">7° Gen</option>
    </select>
  );
}

export default GenerationDropdown;
