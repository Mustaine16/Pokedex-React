import React, { useState, useContext, Fragment } from "react";

import { PokemonProvider, PokemonContext } from "../context/PokemonContext";

import Header from "../components/pokemonPage/Header";
import DataContainer from "../components/pokemonPage/containers/DataContainer";

function PokemonPage({location:{backgroundType}}) {
  return (
    <PokemonProvider backgroundType={backgroundType}>
      <Header></Header>
      <DataContainer></DataContainer>
    </PokemonProvider>
  );
}

export default PokemonPage;
