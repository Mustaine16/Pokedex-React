import React, { useState, useEffect } from "react";

import TabMenu from "../TabMenu";
import Description from "../Description";
import DamageContainer from "./DamageContainer";
import Evolutions from "../Evolutions";

import "../css/DataContainer.css";
import Stats from "../Stats";

function DataContainer({ data }) {
  const [description, setDescription] = useState([]);
  const { types } = data;
  const [state, setState] = useState({
    loading: true,
    error: false
  });

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon-species/${data.id}/`;

    //Abort fetch
    const myAbortController = new AbortController();
    const signal = myAbortController.signal;

    const speciesDataFetched = async () => {

      setState({
        loading: true,
        error: false
      });

      try {

        const data = await fetch(URL, { signal });
        const result = await data.json();

        setDescription(
          result["flavor_text_entries"].filter(
            e => e.language.name === "en"
          )[0]["flavor_text"]
        );
        setState({
          loading: false,
          error: false
        });

      } catch (error) {
        return "error";
      }
    };
    speciesDataFetched();

    //Clean async call
    return () => {
      myAbortController.abort();
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
      className={`tabs ${types[1] ? types[1].type.name : types[0].type.name}`}
    >
      <TabMenu></TabMenu>

      <div className="container">
        <Description
          description={description}
          weight={data.weight}
          height={data.height}
        />
        <Stats stats={data.stats} types={data.types}></Stats>

        <DamageContainer types={data.types}></DamageContainer>

        <Evolutions></Evolutions>
      </div>
    </section>
  );
}

export default DataContainer;
