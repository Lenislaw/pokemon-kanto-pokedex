import React, { useReducer } from "react";
import PokemonContext from "./pokemonContext";
import pokemonReducer from "./pokemonReducer";
import {
  FILTER_POKEMONS,
  FILTER_CLEAR,
  GET_POKEMONS,
  GET_POKEMON,
  RESET_POKEMON,
  POKEMONS_ERROR,
} from "../types";

const PokemonState = (props) => {
  const initialState = {
    pokemons: [],
    pokemon: null,
    filtered: null,
    error: null,
    loading: true,
  };

  const [state, dispatch] = useReducer(pokemonReducer, initialState);

  // AKCJE
  // GET POKEMONS
  const getPokemons = async () => {
    try {
      const res = await fetch("/pokemons");
      const data = await res.json();

      dispatch({ type: GET_POKEMONS, payload: data });
    } catch (error) {
      dispatch({
        type: POKEMONS_ERROR,
      });
    }
  };
  // GET POKEMON
  const getPokemon = async (id) => {
    resetPokemon();
    try {
      const res = await fetch(`http://localhost:5000/pokemons/${id}`);
      if (res.status !== 200) {
        dispatch({
          type: POKEMONS_ERROR,
        });
      } else {
        const data = await res.json();
        console.log("pokemon", data);

        dispatch({ type: GET_POKEMON, payload: data });
      }
    } catch (error) {}
  };

  // RESET POKEMON
  const resetPokemon = () => {
    dispatch({ type: RESET_POKEMON });
  };

  //FILTER POKEMONs
  const filterPokemons = (text) => {
    dispatch({ type: FILTER_POKEMONS, payload: text });
  };

  //CLEAR FILTER
  const filterClear = () => {
    dispatch({ type: FILTER_CLEAR });
  };
  // RETURN
  return (
    <PokemonContext.Provider
      value={{
        pokemons: state.pokemons,
        filtered: state.filtered,
        pokemon: state.pokemon,
        pokemon_species: state.pokemon_species,
        error: state.error,
        loading: state.loading,
        getPokemons,
        getPokemon,
        resetPokemon,
        filterPokemons,
        filterClear,
      }}
    >
      {props.children}
    </PokemonContext.Provider>
  );
};

export default PokemonState;
