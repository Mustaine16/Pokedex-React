import React, { useState, useEffect, useReducer, useContext } from "react";

import Navbar from "../components/home/Navbar";
import ListContainer from "../components/home/ListContainer";
import {PokemonListProvider } from "../context/PokemonsContext";
import Prueba from './Prueba'

function Home() {
  const initialState = []
  return(
    <PokemonListProvider>
      <Prueba/>
    </PokemonListProvider>
  )
}
//   const initialState = { count: 0 , otro: 0};

//   function reducer(state, action) {
//     switch (action.type) {
//       case "increment":
//         return {...state, count: state.count + 1, otro: "aumento" };
//       case "decrement":
//         return {...state, count: state.count - 1 , otro: "decremento"};
//       default:
//         throw new Error();
//     }
//   }

//   const [state, dispatch] = useReducer(reducer, initialState);
//   return (
//     <>
//       Count: {state.count}
//       <br></br>
//       Otro : {state.otro}
//       <br></br>
//       <button onClick={() => dispatch({ type: "decrement" })}>-</button>
//       <button onClick={() => dispatch({ type: "increment" })}>+</button>
//     </>
//   );
// }
//   return (
//     <>
//       <Navbar onChangeName={handleByName} onChangeType={handleByType}></Navbar>
//       <ListContainer
//         onChange={handleByGeneration}
//         filteredList={filteredList}
//       ></ListContainer>
//     </>
//   );
// }

export default Home;
