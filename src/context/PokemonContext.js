import React, { useReducer, useEffect, createContext } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/commons/Loader";

export const SET_BACKGROUND = "SET_BACKGROUND";
export const INIT_FETCH = "INIT_FETCH";
export const FETCH_POKEMON_OK = "FETCH_POKEMON_OK";
export const FETCH_DETAILS_OK = "FETCH_DETAILS_OK";
export const FETCH_EVOLUTIONS_OK = "FETCH_EVOLUTIONS_OK";
export const SET_EVOLUTIONS_DATA = "SET_EVOLUTIONS_DATA";
export const FETCH_COMPLETE = "FETCH_COMPLETE";
export const FETCH_ERROR = "FETCH_ERROR";
//INITAL STATE

const initialState = {
  pokemon: "",
  details: "",
  evolutionsData: "",
  background: "",
  loading: true,
  error: false,
  tab: ""
};

const PokemonContext = createContext(initialState);

//REDUCER
const reducer = (state, action) => {
  switch (action.type) {
    case SET_BACKGROUND:
      return { ...state, background: action.payload };

    case INIT_FETCH:
      return { ...state, loading: true };

    case FETCH_POKEMON_OK:
      return { ...state, pokemon: action.payload };

    case FETCH_DETAILS_OK:
      return { ...state, details: action.payload };

    case FETCH_EVOLUTIONS_OK:
      return { ...state, evolutionsData: action.payload };

    case SET_EVOLUTIONS_DATA:
      return { ...state, evolutionsData: action.payload };

    case FETCH_COMPLETE:
      return { ...state, loading: false };

    case FETCH_ERROR:
      return { ...state, loading: false, error: action.error };

    default:
      return { ...state };
  }
};

//PROVIDER

const PokemonContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { id } = useParams();

  useEffect(() => {
    const myAbortController = new AbortController();
    const signal = myAbortController.signal;

    const fetchPokemon = async () => {
      // dispatch({type:SET_BACKGROUND, payload:props.backgroundType})
      dispatch({ type: INIT_FETCH });

      const POKEMON_URL = `https://pokeapi.co/api/v2/pokemon/${id}`;
      const DETAIL_URL = `https://pokeapi.co/api/v2/pokemon-species/${id}/`;

      try {
        //Fetch Pokemon and Details
        const pokemonResponse = await fetch(POKEMON_URL, { signal });
        const detailsResponse = await fetch(DETAIL_URL, { signal });

        const pokemon = await pokemonResponse.json();
        const details = await detailsResponse.json();

        //Reverse the types's array
        pokemon.types.reverse();

        //Take the evo chain URL
        //Then, fetch evo data

        const EVO_URL = details.evolution_chain.url;
        const evolutionsResponse = await fetch(EVO_URL, { signal });
        const evolutionsData = await evolutionsResponse.json();



        dispatch({ type: FETCH_POKEMON_OK, payload: pokemon });
        dispatch({ type: FETCH_DETAILS_OK, payload: details });
        dispatch({ type: FETCH_EVOLUTIONS_OK, payload: evolutionsData });
        dispatch({ type: FETCH_COMPLETE });
        

      } catch (error) {
        console.log(error);

        myAbortController.abort();
        dispatch({ type: FETCH_ERROR, error });
      }
    };

    fetchPokemon();

    //CLEAN ASYNC CALL
    return () => {
      myAbortController.abort();
    };
  }, [id]);

  /*
   *RENDERS
   */

  //LOADING
  
  if (state.loading && state.pokemon) return <Loader background={state.pokemon.types[0].type.name} />;
  
  if (state.loading) return <Loader background={props.backgroundType ? props.backgroundType : "default"} />;

  //ERROR
  if (state.error) return <h1>{state.error.message}</h1>;

  //FETCH COMPLETE, NORMAL RENDER
  return (
    <PokemonContext.Provider value={{ state, actions: { dispatch }, props:{id} }}>
      {props.children}
    </PokemonContext.Provider>
  );
};

export { PokemonContextProvider as PokemonProvider, PokemonContext };
