import React, { useContext } from "react";

import PokemonListContext from "../../context/HomeContext";

import { useFilterByGeneration } from "../../hooks/useFilterGeneration";

import "./styles/GenerationDropdown.css";

function GenerationDropdown() {
  const {
    actions: { filterByGeneration },
    state: { filter }
  } = useContext(PokemonListContext);

  const [generationID, handleChangeGeneration] = useFilterByGeneration(
    filterByGeneration
  );

  if (filter === "GENERATION") {
    return (
      <select
        onChange={event => {
          handleChangeGeneration(event);
        }}
        className="gen-name"
      >
        {[ 1,2,3,4,5,6,7 ].map((gen) => {
          if(generationID === gen){
            return <option value={gen} selected>{gen}° Gen</option>
          } else{
            return <option value={gen}>{gen}° Gen</option>;
          }
        })}

      </select>
    );
  } else {
    return false;
  }
}

export default GenerationDropdown;
