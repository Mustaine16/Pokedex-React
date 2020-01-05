import React, { useState, useEffect } from "react";

import PokemonCard from "./PokemonCard";

import localData from "../localData";

const List = () => {
  const [state, setState] = useState(localData);
  const [gen, setGen] = useState(1);

  useEffect(() => {
    let i = 1;
    let end = 151;
    switch (gen) {
      case 1:
        i = 1;
        end = 807;
        break;
      case 2:
        i = 152;
        end = 250;
        break;
      case 3:
        i = 251;
        end = 400;
        break;
      case 4:
        i = 400;
        end = 500;
        break;
      case 5:
        i = 500;
        end = 600;
        break;
      case 6:
        i = 600;
        end = 700;
        break;
      case 7:
        i = 700;
        end = 807;
        break;
      default:
        break;
    }

    //   async function fetche() {
    //     for (i; i <= end; i++) {
    //       const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    //       const data = await response.json();
    //       setState(prevState => [
    //         ...prevState,
    //         {
    //           id: data.id,
    //           name: data.name,
    //           types: data.types
    //         }
    //       ]);
    //       console.log(i);
    //     }
    //   }
    //   fetche();
  }, [gen]);

  return (
    <main>
      <section className="pkmn-list">
        {localData.map((e, i) => (
          <PokemonCard data={state[i]} key={state[i].id}></PokemonCard>
        ))}
      </section>
    </main>
  );
};

export default List;
