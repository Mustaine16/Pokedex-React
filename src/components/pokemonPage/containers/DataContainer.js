import React, { useState, useEffect, useContext } from "react";
import { PokemonContext } from "../../../context/PokemonContext";

import TabMenu from "../TabMenu";
import Description from "../Description";
import DamageContainer from "./DamageContainer";
import Evolutions from "../Evolutions";

import "../css/DataContainer.css";
import Stats from "../Stats";

function DataContainer() {
  const {
    state,
    state: { pokemon, details }
  } = useContext(PokemonContext);

  const [tabsSelected, setTabSelected] = useState();

  const tabs = [<Description/>, <Stats/>, <DamageContainer/>, <Evolutions/>]

  const { types, stats, weight, height } = pokemon;

  const description = details["flavor_text_entries"].filter(
    e => e.language.name === "en"
  )[0]["flavor_text"];

  {
    console.log(state);
  }

  return (
    <section
      className={`tabs ${types[1] ? types[1].type.name : types[0].type.name}`}
    >
      <TabMenu></TabMenu>

      <div className="container">
        <Description
          description={description}
          weight={weight}
          height={height}
        />
        <Stats stats={stats} types={types}></Stats>

        <DamageContainer types={types}></DamageContainer>

        <Evolutions></Evolutions>
      </div>
    </section>
  );
}

export default DataContainer;
