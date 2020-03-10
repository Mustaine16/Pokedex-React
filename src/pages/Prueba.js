import React, {useContext} from 'react';
import  PokemonListContext  from '../context/PokemonsContext';

export default function Prueba(){

  const [state, dispatch]= useContext(PokemonListContext)
  console.log(state);
  

  return(
    <h1>"d"</h1>
  )
}