import React from "react";

import { PokemonProvider } from "../context/PokemonContext";

import Header from "../components/pokemonPage/Header";
import DataContainer from "../components/pokemonPage/containers/DataContainer";

function PokemonPage( {match:{params:{id}}}) {
  return (
    <PokemonProvider id={id}>
        <div className={"modall"}>
        <Header></Header>
        <DataContainer></DataContainer>
      </div>
    </PokemonProvider>
  );
}

export default PokemonPage;
