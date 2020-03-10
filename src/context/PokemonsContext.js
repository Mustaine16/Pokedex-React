import React, {  useReducer, createContext } from "react";

import {filteredReducer, filterByGeneration }from '../reducers/filterReducers'

//In the initalState, the list will be the filtered by 1°Generation

const initialState = {
  filteredList:filterByGeneration(1,{}).filteredList,
  loading: true
};

const PokemonListContext = createContext(initialState);

const PokemonListProvider = props => {

  const [state, dispatch] = useReducer(filteredReducer, initialState)

  return (
    <PokemonListContext.Provider value={[state,dispatch]}>
      {props.children}
    </PokemonListContext.Provider>
  );
};

export { PokemonListProvider, PokemonListContext as default };
