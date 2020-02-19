import React, { useState, useEffect, Fragment } from "react";

import Header from "../components/pokemonPage/Header";
import DataContainer from "../components/pokemonPage/DataContainer";

function PokemonPage(props) {
  const [data, setData] = useState();
  const [error, setError] = useState(false);

  useEffect(() => {
    const pokemonID = props.match.params.id;
    const URL = `https://pokeapi.co/api/v2/pokemon/${pokemonID}`;
    const myAbortController = new AbortController();

    const fetchData = async () => {
      try {
        const response = await fetch(URL, { signal: myAbortController.signal });

        const data = await response.json();

        setData(data);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
    //Clean async call
    return () => {
      myAbortController.abort();
    };
  }, [props.match.params.id]);

  if (!data) {
    return "loading";
  }

  if (error) {
    return error;
  }

  return (
    <Fragment>
      <Header name={data.name} id={data.id} types={data.types}></Header>
      <DataContainer data={data}></DataContainer>
    </Fragment>
  );
}

export default PokemonPage;
