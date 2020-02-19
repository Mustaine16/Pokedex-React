import React, { useState, useEffect } from "react";

import Navbar from "../components/home/Navbar";
import ListContainer from "../components/home/ListContainer";

import localData from "../localData";

/*Hook para filtrar por Generacion */

const useFilterByGeneration = () => {
  const [generation, setGeneration] = useState(1);
  const [listByGeneration, setListByGeneration] = useState([]);

  function changeGeneration(event) {
    const selected = Number(event.target.value);
    setGeneration(selected);
    localStorage.setItem("generation", selected);
  }

  React.useMemo(() => {
    // console.log("CORRIENDO");

    const filteredPokemons = filterByGeneration(generation);
    function filterByGeneration(generation) {
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

      const filteredPokemons = localData.filter(
        (e, i) => i >= firstPkmnOfGeneration && i <= lastPkmnOfGeneration
      );
      return filteredPokemons;
    }
    setListByGeneration(filteredPokemons);
  }, [generation]);

  return [listByGeneration, changeGeneration];
};

/*Hook filtrado por Nombre */

const useFilterByName = () => {
  const [queryName, setQueryName] = useState("");
  const [listByName, setListByName] = useState([]);

  function handleChange(event) {
    setQueryName(event.target.value);
  }

  const filteredByName = React.useMemo(() => {
    return localData.filter(e => e.name.startsWith(queryName));
  }, [queryName]);

  useEffect(() => {
    setListByName(filteredByName);
  }, [filteredByName]);

  return [queryName, listByName, handleChange];
};

/* Componente */

function Home() {
  //Home will be in charge of the state of the Pokemon List and when it must be filtered

  /*
  @filteredList
  
  This will be the DEFINITIVE LIST that is filtered by Generation, Name or Type

  It will be affected by 3 different useEffect

  */

  const [filteredList, setFilteredList] = useState([]);

  // Filters

  //By Generation
  const [listByGeneration, changeGeneration] = useFilterByGeneration();

  useEffect(() => {
    setFilteredList(listByGeneration);
  }, [listByGeneration]);

  //By Name

  const [queryName, listByName, handleByName] = useFilterByName();

  useEffect(() => {
    //En caso de estar vacio el query de busqueda, se setea la lista por generacion, por una cuestion de perfomance. De lo contrario, se setearia el pokemonDataComplete con los 806 pokemones
    if (queryName) {
      setFilteredList(listByName);
    } else {
      setFilteredList(listByGeneration);
    }
  }, [listByName]);

  //By Type

  // useEffect(() => setFilteredList(listByType), [type]);

  return (
    <>
      <Navbar
        onChangeName={handleByName}
        onClick={event =>
          console.log(event.target.getAttribute("data-value"))
        }></Navbar>
      <ListContainer
        onChange={changeGeneration}
        filteredList={filteredList}></ListContainer>
    </>
  );
}

export default Home;
