import { useState, useEffect } from "react";

/*Hook para filtrar por Generacion */

const useFilterByGeneration = filterByGeneration => {
  const [generationID, setGenerationID] = useState(
    Number(localStorage.getItem("generationID")) || 1
  );

  function handleChangeGeneration(event) {
    const genSelected = Number(event.target.value);

    setGenerationID(genSelected);

    localStorage.setItem("generationID", genSelected);
  }

  useEffect(() => {

    filterByGeneration(generationID );
    //Setear como SELECTED al option correspondiente
    // document.querySelectorAll("option").forEach((option)=>Number(option.value) === generationID ? option.setAttribute("selected", ""): "")

  }, [generationID]);

  return [generationID, handleChangeGeneration];
};

export { useFilterByGeneration };

/* Componente */

//Home will be in charge of the state of the Pokemon List and when it must be filtered

/*
  @filteredList
  
  This will be the DEFINITIVE LIST that is filtered by generationID, Name or Type

  It will be affected by 3 different useEffect

  */

//  const [filteredList, setFilteredList] = useState([]);

//  //Filters
//  const [listByGeneration, handleByGeneration] = useFilterByGeneration();
//  const [queryName, listByName, handleByName] = useFilterByName();
//  const [listByType, handleByType] = useFilterByType();

//  useEffect(() => {
//    //By generationID
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
