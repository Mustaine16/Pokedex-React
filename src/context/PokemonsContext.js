import React, { useState, useReducer, createContext } from "react";

import {filteredReducer }from '../reducers/filterReducers'
import localData from "../localData";

const initialState = {
  filteredList: [],
  loading: true
};

const PokemonListContext = createContext(initialState);

const PokemonListProvider = props => {

  const [state, dispatch] = useReducer(filteredReducer, initialState)

  return (
    <PokemonListContext.Provider value={"working"}>
      {props.children}
    </PokemonListContext.Provider>
  );
};

export { PokemonListProvider, PokemonListContext as default };
