import React, { useState, useEffect } from "react";

import Navbar from "../components/home/Navbar";
import ListContainer from "../components/home/ListContainer";

import localData from "../localData";

const useFilterByGeneration = completePokemonData => {
  const [generation, setGeneration] = useState(1);
  const [listByGeneration, setListByGeneration] = useState([]);

  function filterByGeneration(completePokemonData, generation) {
    let firstPkmnOfGeneration, lastPkmnOfGeneration;

    switch (generation) {
      case 1:
        firstPkmnOfGeneration = 0;
        lastPkmnOfGeneration = 150;
        break;
      case 2:
        firstPkmnOfGeneration = 151;
        lastPkmnOfGeneration = 250;
        break;
      case 3:
        firstPkmnOfGeneration = 251;
        lastPkmnOfGeneration = 385;
        break;
      case 4:
        firstPkmnOfGeneration = 386;
        lastPkmnOfGeneration = 492;
        break;
      case 5:
        firstPkmnOfGeneration = 493;
        lastPkmnOfGeneration = 648;
        break;
      case 6:
        firstPkmnOfGeneration = 649;
        lastPkmnOfGeneration = 720;
        break;
      case 7:
        firstPkmnOfGeneration = 721;
        lastPkmnOfGeneration = 806;
        break;
      default:
        break;
    }

    const filteredPokemons = completePokemonData.filter(
      (e, i) => i >= firstPkmnOfGeneration && i <= lastPkmnOfGeneration
    );
    return filteredPokemons;
  }

  useEffect(() => {
    const filteredPokemons = filterByGeneration(
      completePokemonData,
      generation
    );
    setListByGeneration(filteredPokemons);
  }, [generation, completePokemonData]);

  return [{ listByGeneration, generation }, setGeneration];
};

function Home() {
  //Home will be in charge of the state of the Pokemon List and when it must be filtered

  /*
  @filteredList
  
  This will be the DEFINITIVE LIST that is filtered by Generation, Name or Type

  It will be affected by 3 different useEffect

  */

  const completePokemonData = localData;
  const [filteredList, setFilteredList] = useState([]);

  // Filters
  const [
    { listByGeneration, generation },
    setGeneration
  ] = useFilterByGeneration(completePokemonData);

  function changeGeneration(event) {
    const selected = Number(event.target.value);
    setGeneration(selected);
    localStorage.setItem("generation", selected);
  }

  useEffect(() => {
    setFilteredList(listByGeneration);
  }, [listByGeneration]);

  // useEffect(() => setFilteredList(listByName), [query]);
  // useEffect(() => setFilteredList(listByType), [type]);

  return (
    <>
      <Navbar></Navbar>
      <ListContainer
        changeGeneration={changeGeneration}
        filteredList={filteredList}
        generation={generation}></ListContainer>
    </>
  );
}

export default Home;
