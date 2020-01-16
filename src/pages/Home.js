import React, { useState } from "react";

import Navbar from "../components/Navbar";
import ListContainer from "../components/ListContainer";

import localData from "../localData";

function Home() {
  //Home will be in charge of the state of the Pokemon List and when it must be filtered

  const localPokemonData = localData;
  const [filteredList, setFilteredList] = useState(localData);
  const [generation, setGeneration] = useState(1);

  const changeGeneration = event => {
    let start, end;
    const selectedGeneration = Number(event.target.value);
    setGeneration(selectedGeneration);

    switch (selectedGeneration) {
      case 1:
        start = 0;
        end = 150;
        break;
      case 2:
        start = 151;
        end = 250;
        break;
      case 3:
        start = 251;
        end = 400;
        break;
      case 4:
        start = 400;
        end = 500;
        break;
      case 5:
        start = 500;
        end = 600;
        break;
      case 6:
        start = 600;
        end = 700;
        break;
      case 7:
        start = 700;
        end = 806;
        break;
      default:
        break;
    }

    setFilteredList(localPokemonData.filter((e, i) => i >= start && i <= end));
  };

  return (
    <>
      <Navbar></Navbar>
      <ListContainer
        onChange={changeGeneration}
        filteredList={filteredList}
        generation={generation}></ListContainer>
    </>
  );
}

export default Home;
