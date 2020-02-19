import React, { useState, useEffect } from "react";

import TabMenu from "./TabMenu";
import Description from "./Description";
import WeaknessesContainer from "../../Containers/WeaknessesContainer";
import Evolutions from "./Evolutions";

import "./css/DataContainer.css";
import Stats from "./Stats";

function DataContainer({ data }) {
  const [description, setDescription] = useState([]);
  const { types } = data;
  const [state, setState] = useState({
    loading: true,
    error: false
  });

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon-species/${data.id}/`;
    let didCancel = false; //Variable que ayuda a cancelar el setState en caso de que el componente se desmonte

    const speciesDataFetched = async () => {
      setState({
        loading: true,
        error: false
      });
      try {
        const data = await fetch(URL);
        const result = await data.json();
        if (!didCancel) {
          setDescription(
            result["flavor_text_entries"].filter(
              e => e.language.name === "en"
            )[0]["flavor_text"]
          );
          setState({
            loading: false,
            error: false
          });
        }
      } catch (error) {
        return "error";
      }
    };
    speciesDataFetched();

    return () => {
      didCancel = true;
    };
  }, [description, data]);

  if (state.loading) {
    return (
      <section className="tabs">
        <p>Loading</p>
      </section>
    );
  }
  console.table(types);
  return (
    <section
      className={`tabs ${types[1] ? types[1].type.name : types[0].type.name}`}>
      <TabMenu></TabMenu>
      <div className="container">
        <Description
          description={description}
          weight={data.weight}
          height={data.height}
        />
        <Stats stats={data.stats} types={data.types}></Stats>
        <WeaknessesContainer types={data.types}></WeaknessesContainer>
        <Evolutions></Evolutions>
      </div>
    </section>
  );
}

export default DataContainer;