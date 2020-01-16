import React, { useState, useEffect } from "react";

function PokemonPage(props) {
  const [data, setData] = useState();
  const [error, setError] = useState(false);

  async function fetchData() {
    const pokemonID = props.match.params.id;

    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonID}`
      );

      const data = await response.json();

      setData(data);
    } catch (error) {
      setError(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [data, fetchData]);

  if (!data) {
    return "loading";
  }

  return "data;";
}

export default PokemonPage;
