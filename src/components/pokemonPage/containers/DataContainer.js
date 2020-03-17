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

  const [activeContent, setActiveContent] = useState("description");

  const { types, stats, weight, height } = pokemon;

  const description = details["flavor_text_entries"].filter(
    e => e.language.name === "en"
  )[0]["flavor_text"];

  const content = {
    description: (
      <Description description={description} weight={weight} height={height} />
    ),
    stats: <Stats stats={stats} types={types} />,
    damageContainer: <DamageContainer types={types} />,
    evolutions: <Evolutions />
  };

  function handleActiveTab(tabToActive) {
    setActiveContent(tabToActive);
  }

  //Set background color
  useEffect(() => {
    const backgroundTpye = state.pokemon.types[0].type.name;
    document.querySelector(".modall").classList.add(backgroundTpye);
  },[]);

  return (
    <section
      className={`tabs ${types[1] ? types[1].type.name : types[0].type.name}`}
    >
      <TabMenu handleActiveTab={handleActiveTab}></TabMenu>
      <div className="container">{content[activeContent]}</div>
    </section>
  );
}

export default DataContainer;
