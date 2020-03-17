import React, { useContext, useState, useEffect } from "react";
import { PokemonContext } from "../../context/PokemonContext";
import { Link } from "react-router-dom";
import Sprite from "../home/Sprite";

export default function Evolutions() {
  const {
    state,
    state: {
      pokemon: { name },
      evolutionsData
    }
  } = useContext(PokemonContext);
  
  const [evolutions, setEvolutions] = useState([]);

  useEffect(() => {
    const parsedEvos = parseEvolutionsData();
    getEvolutions(parsedEvos);
  }, []);

  //Set background color
  useEffect(()=>{
    const backgroundTpye  = (state.pokemon.types[0].type.name)
    document.querySelector(".modall").classList.add(backgroundTpye)
  })

  //Here we maniputale the evolutionsChain property from evolutions to create a temporal array
  function parseEvolutionsData() {
    let evoChain = [];
    let evoData = evolutionsData.chain;

    //Push the first pokemon in the evolutions chain
    evoChain.push({
      name: evoData.species.name,
      id: evoData.species.url.split("/")[6]
    });

    do {
      let numberOfEvolutions = evoData.evolves_to.length;

      if (numberOfEvolutions >= 1) {
        for (let i = 0; i < numberOfEvolutions; i++) {
          evoChain.push({
            name: evoData.evolves_to[i].species.name,
            evolutionDetails: evoData.evolves_to[i].evolution_details[0],
            id: evoData.evolves_to[i].species.url.split("/")[6]
          });
        }
      }

      evoData = evoData["evolves_to"][1] || evoData["evolves_to"][0];
    } while (!!evoData && evoData.hasOwnProperty("evolves_to"));
    return evoChain;
  }

  function getEvolutions(evolutions) {
    //Array to push the Rows, they will be seted as state at the end of this function
    const evolutionsArray = [];

    //First Evolution-----------------------------------
    console.log(evolutions);

    if (evolutions.length > 1) {
      const firstEvolution = createRowEvolution(0, 1, evolutions);
      evolutionsArray.push(firstEvolution);

      //Second Evolution-----------------------------------

      if (evolutions.length === 3) {
        const name = evolutions[0].name;
        let secondEvolution = "";

        //Nincada
        if (name === "nincada") {
          secondEvolution = createRowEvolution(0, 2, evolutions);
        }

        //Burmy
        if (name === "burmy") {
          secondEvolution = createRowEvolution(0, 2, evolutions);
        }

        //Por Defecto
        else {
          secondEvolution = createRowEvolution(1, 2, evolutions);
        }

        //Push
        evolutionsArray.push(secondEvolution);
        // d.append(containerEvolutions);
      }

      //Pokemons with more than 2 evolutions----------------------------------------------

      if (evolutions.length > 3) {
        switch (evolutions[0].name) {
          //Eevee
          case "eevee":
            for (let i = 2; i < 9; i++) {
              //Pokemons
              const evolution = createRowEvolution(0, i, evolutions);
              evolutionsArray.push(evolution);
            }
            break;

          //Tyrogue / Hitmonlee / Hitmonchan / Hitmontop
          case "tyrogue":
            const hitmonchan = createRowEvolution(0, 2, evolutions);
            const hitmontop = createRowEvolution(0, 3, evolutions);

            evolutionsArray.push(hitmonchan);
            evolutionsArray.push(hitmontop);
            break;

          //Ralts / Kirlia / Gardevoir / Gallade
          case "ralts":
            const gardevoir = createRowEvolution(1, 2, evolutions);
            const gallade = createRowEvolution(1, 3, evolutions);

            evolutionsArray.push(gardevoir);
            evolutionsArray.push(gallade);
            break;

          //Wurmple / Silcoon / BeautiFly / Dustox
          case "wurmple":
            const cascoon = createRowEvolution(0, 3, evolutions);
            const beautifly = createRowEvolution(1, 2, evolutions);
            const dustox = createRowEvolution(3, 4, evolutions);

            evolutionsArray.push(cascoon);
            evolutionsArray.push(beautifly);
            evolutionsArray.push(dustox);
            break;

          //Cosmog,Cosmoem, Solgaleo, Lunala
          case "cosmog":
            const solgaleo = createRowEvolution(1, 2, evolutions);
            const lunala = createRowEvolution(1, 3, evolutions);

            evolutionsArray.push(solgaleo);
            evolutionsArray.push(lunala);
            break;
          default:
            break;
        }

        //Final Appends
        // evolutionsArray.forEach(e => {
        //   containerEvolutions.appendChild(e);
        // });

        // d.appendChild(containerEvolutions);
      }
    } else {
      setEvolutions([]);
    }
    console.log(evolutionsArray);
    
    setEvolutions(evolutionsArray);
    // setEvolutions(evolutions)
  }

  function createRowEvolution(i1, i2, evolutions) {
    const rowEvolution = {
      base: { name: "", id: "" },
      evolution: { name: "", id: "" },
      conditions: [],
      type: ""
    };

    const { base, evolution } = rowEvolution;

    //Names
    base.name = evolutions[i1].name;
    evolution.name = evolutions[i2].name;

    //IDS
    base.id = evolutions[i1].id;
    evolution.id = evolutions[i2].id;

    //Conditions
    rowEvolution.conditions = incrustEvolutionsTriggers(i2, evolutions);

    //Types
    base.type = state.pokemon.types[0].type.name
    evolution.type = state.pokemon.types[0].type.name

    return rowEvolution;
  }

  function incrustEvolutionsTriggers(i, evolutions) {
    //Array para guardar cada condicion y/o trigger, para despues generar un span por cada uno de ellos con un foreach cuando se invoque este metodo

    const triggersArr = [];
    const evoConditions = evolutions[i].evolutionDetails;
    const triggerName = evoConditions.trigger.name;
    const name = evolutions[i].name;

    //---Trade----

    if (triggerName === "trade") {
      triggersArr.push("Trade");

      //Si necesita tener un objeto
      if (evoConditions.held_item) {
        triggersArr.push(`Holding ${evoConditions.held_item.name}`);
      }

      //Si necesita ser intercambiado por cierto pokemon
      if (evoConditions.trade_species) {
        triggersArr.push(`For a ${evoConditions.trade_species.name}`);
      }
    }

    //---Use-item----

    if (triggerName === "use-item") {
      triggersArr.push(`Using ${evoConditions.item.name}`);

      //Si requier cierto genero para evolucionar
      if (evoConditions.gender) {
        evoConditions.gender === 1
          ? triggersArr.push("(Female)")
          : triggersArr.push("(Male)");
      }
    }

    //---Level-up----

    if (triggerName === "level-up") {
      //Nivel comun
      evoConditions.min_level
        ? triggersArr.push(`Level ${evoConditions.min_level}`)
        : console.log();

      //Genero
      if (evoConditions.gender) {
        evoConditions.gender === 1
          ? triggersArr.push("(Female)")
          : triggersArr.push("(Male)");
      }

      //Item
      evoConditions.held_item
        ? triggersArr.push(`holding ${evoConditions.held_item.name}`)
        : console.log();

      //Amistad
      evoConditions.min_happiness
        ? triggersArr.push("Whit hight friendship")
        : console.log();

      //Conociendo cierto movimiento
      evoConditions.known_move
        ? triggersArr.push(`knowing ${evoConditions.known_move.name}`)
        : console.log();

      //En ciertas localizaciones
      evoConditions.location
        ? triggersArr.push(`In ${evoConditions.location.name}`)
        : console.log();

      //Cierta hora del dia
      evoConditions.time_of_day
        ? triggersArr.push(`At ${evoConditions.time_of_day}`)
        : console.log();
    }

    //---Condiciones unicas

    //Hitmonlee, Hitmonachan y Hitmontop

    switch (evoConditions.relative_physical_stats) {
      case 1:
        triggersArr.push("Attack > Defense");
        break;
      case -1:
        triggersArr.push("Attack < Defense");
        break;
      case 0:
        triggersArr.push("Attack = Defense");
        break;
      default:
        break;
    }

    //Sylveon

    if (name === "sylveon") {
      triggersArr.push("Knowing a Fairy type move");
      triggersArr.push("At least levels 2 of affection");
    }

    //Mantine

    if (name === "mantine") {
      triggersArr.push("Only if a Remoraid is in the player party");
    }

    //Milotic

    if (name === "milotic") {
      triggersArr.push("Level up beauty condition to 170");
    }

    //Shedinja

    if (name === "shedinja") {
      triggersArr.push(
        "After, Nincada evolves to Ninjask, if there is an empty space in the party, it will appear"
      );
      triggersArr.push(
        "Player must also have a Poke-ball in the bag (Generation IV and above)"
      );
    }

    //Pangoro

    if (name === "pangoro") {
      triggersArr.push("There must be a Dark-Type Pokemon in the party");
    }

    //Malamar

    if (name === "malamar") {
      triggersArr.push(
        "the Nintendo 3DS system must be held upside-down when it levels up"
      );
    }

    //Goodra

    if (name === "goodra") {
      triggersArr.push("When its raining or foogy in the overworld");
    }

    return triggersArr;
  }

  return (
    <article className="evs-container content">
      <h3 className="evolutions-title">Evolutions</h3>
      {evolutions.length >= 1 ? (
        evolutions.map(evo => {
          return (
            <div className="evs-list" key={evo.evolution.id}>
              <Link to={{
                pathname: evo.base.id,
                backgroundType: evo.base.type
              }} className="ev">
                <Sprite
                  name={evo.base.name}
                  id={evo.base.id}
                  showCaption
                ></Sprite>
              </Link>
              <figure className="arrow-div">
                <img className="arrow" src="./img/arrow.svg" />
                {evo.conditions.map((condition, i) => (
                  <figcaption key={"condition " + i }>{condition}</figcaption>
                ))}
              </figure>
              <Link to={{
                pathname: evo.evolution.id,
                backgroundType: evo.evolution.type
              }} className="ev">
                <Sprite
                  name={evo.evolution.name}
                  id={evo.evolution.id}
                  showCaption
                ></Sprite>
              </Link>
            </div>
          );
        })
      ) : (
        <div className="empty">{name} has no evolutions</div>
      )}
    </article>
  );
}
