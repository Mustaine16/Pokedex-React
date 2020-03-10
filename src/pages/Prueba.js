import React, {useContext} from 'react';
import  PokemonListContext  from '../context/PokemonsContext';

export default function Prueba(){

  const value = useContext(PokemonListContext)

  return(
    <h1>{value}</h1>
  )
}