import React, { useReducer, createContext } from "react";
import localData from "../localData";

export const INIT_FILTER = "INIT_FILTER";
export const FILTERED_BY = "FILTERED_BY";

//In the initalState, the list will be the filtered by 1°Generation

const initialState = {
  filteredList: {},
  filter: "GENERATION",
  loading: true
};

//REDUCER
const filteredReducer = (state, action) => {
  switch (action.type) {
    case INIT_FILTER:
      return { ...state, loading: true };

    case FILTERED_BY:
      return {
        filter: action.filter,
        loading: false,
        filteredList: action.payload
      };

    default:
      return { ...state };
  }
};

//CONTEXT
const PokemonListContext = createContext(initialState);

//PROVIDER
const PokemonListProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filteredReducer, initialState);

  //This is the "real" initial state
  React.useEffect(() => {
    resetFilters();
  }, []);
  
  /* FUNCTIONS TO FILTER BY */
  
  //Filter by Generation
  function filterByGeneration(generationID) {
    
    dispatch({ type: INIT_FILTER });

    let firstPkmnOfGeneration, lastPkmnOfGeneration;

    //This switch will return the first and last pokemons's IDs from the selected generation
    switch (generationID) {
      case 1:
        firstPkmnOfGeneration = 0;
        lastPkmnOfGeneration = 150;
        break;
      case 2:
        firstPkmnOfGeneration = 151;
        lastPkmnOfGeneration = 250;
        break;
      case 3:
        firstPkmnOfGeneration = 251;
        lastPkmnOfGeneration = 385;
        break;
      case 4:
        firstPkmnOfGeneration = 386;
        lastPkmnOfGeneration = 492;
        break;
      case 5:
        firstPkmnOfGeneration = 493;
        lastPkmnOfGeneration = 648;
        break;
      case 6:
        firstPkmnOfGeneration = 649;
        lastPkmnOfGeneration = 720;
        break;
      case 7:
        firstPkmnOfGeneration = 721;
        lastPkmnOfGeneration = 806;
        break;
      default:
        break;
    }

    const filteredPokemons = localData.filter(
      (e, i) => i >= firstPkmnOfGeneration && i <= lastPkmnOfGeneration
    );

    //Setear como SELECTED al option correspondiente y guardar en localStorage
    localStorage.setItem("generationID", generationID);
    document.querySelectorAll("option").forEach((option)=>Number(option.value) === generationID ? option.setAttribute("selected", ""): "")

    dispatch({
      type: FILTERED_BY,
      filter: "GENERATION",
      payload: filteredPokemons
    });
  }

  //Filter by Name
  function filterByName(query) {
    
    dispatch({ type: INIT_FILTER });

    if (query) {
      const filteredPokemons = localData.filter(e => e.name.startsWith(query));

      dispatch({
        type: FILTERED_BY,
        filter: "NAME",
        payload: filteredPokemons
      });

    } else {
      //When the user delete all the input, we need to filter by the gen selected again
      resetFilters();
    }
  }

  //Filter by Type
  function filterByType(event) {

    const queryType = event.target.dataset.value;
    
    dispatch({ type: INIT_FILTER });

    //Reset Filter when user clicks "All"
    if (queryType === "reset") {
      resetFilters();

    } else {

      //Filter
      const filteredPokemons = localData.filter(pkmn => {
        return pkmn.types.length > 1
          ? pkmn.types[0].type.name === queryType ||
              pkmn.types[1].type.name === queryType
          : pkmn.types[0].type.name === queryType;
      });

      dispatch({
        type: FILTERED_BY,
        filter: "TYPE",
        payload: filteredPokemons
      });

    }
  }

  //Reset Filters
  function resetFilters() {
    filterByGeneration(Number(localStorage.getItem("generationID")) ||  1);
  }

  return (
    <PokemonListContext.Provider
      value={{
        state,
        actions: {
          filterByGeneration,
          filterByName,
          filterByType
        }
      }}
    >
      {state.loading ? "LOADING" : children}
    </PokemonListContext.Provider>
  );
};

export { PokemonListProvider, PokemonListContext as default };
