import React, { useState, useEffect } from "react";

/*Hook para filtrar por Generacion */

export const useFilterByGeneration = (localData) => {
  const [generation, setGeneration] = useState(
    Number(localStorage.getItem("generation")) || 1
  );
  const [listByGeneration, setListByGeneration] = useState([]);

  function handleByGeneration(event) {
    const genSelected = Number(event.target.value);
    setGeneration(genSelected);
    localStorage.setItem("generation", genSelected);
  }

  useEffect(() => {
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

  return [listByGeneration, handleByGeneration];
};

/* Componente */

//Home will be in charge of the state of the Pokemon List and when it must be filtered

/*
  @filteredList
  
  This will be the DEFINITIVE LIST that is filtered by Generation, Name or Type

  It will be affected by 3 different useEffect

  */

//  const [filteredList, setFilteredList] = useState([]);

//  //Filters
//  const [listByGeneration, handleByGeneration] = useFilterByGeneration();
//  const [queryName, listByName, handleByName] = useFilterByName();
//  const [listByType, handleByType] = useFilterByType();

//  useEffect(() => {
//    //By Generation
//    setFilteredList(listByGeneration);
//  }, [listByGeneration]);

//  //By Name
//  useEffect(() => {
//    //En caso de estar vacio el query de busqueda, se setea la lista por generacion, por una cuestion de perfomance. De lo contrario, se setearia el pokemonDataComplete con los 806 pokemones
//    if (queryName) {
//      setFilteredList(listByName);
//    } else {
//      setFilteredList(listByGeneration);
//    }
//  }, [listByName]);

//  //By Type
//  useEffect(() => {
//    if (listByType.length > 0) setFilteredList(listByType);
//  }, [listByType]);
