import React, { useState, useEffect } from "react";

import TabMenu from "../TabMenu/TabMenu";
import Description from "../Description/Description";

import "./DataContainer.css";
import Stats from "../Stats/Stats";

function DataContainer({ data }) {
  const [speciesData, setspeciesData] = useState({});
  const [description, setDescription] = useState([]);

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon-species/${data.id}/`;

    const speciesDataFetched = async () => {
      try {
        const response = await fetch(URL);
        const result = await response.json();
        setspeciesData(result);
        setDescription(
          response["flavor_text_entries"].filter(
            e => e.language.name === "en"
          )[0]["flavor_text"]
        );
      } catch (error) {
        return "error";
      }
    };
    speciesDataFetched();
  }, [description, data]);

  if (!description || !speciesData) {
    return "loading";
  }

  return (
    <section className="section">
      <TabMenu></TabMenu>
      <Description
        description={description}
        weight={data.weight}
        height={data.height}></Description>
      <Stats stats={data.stats}></Stats>
    </section>
  );
}

export default DataContainer;
