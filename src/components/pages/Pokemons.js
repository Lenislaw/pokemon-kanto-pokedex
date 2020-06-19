import React, { useEffect, useContext } from "react";
import PokemonContext from "../../context/pokemon/pokemonContext";
import PokemonsFilter from "../pokemons/PokemonsFilter";
import PokemonItem from "../pokemons/PokemonItem";
import Spinner from "../layout/Spinner";

const Pokemons = () => {
  const pokemonContext = useContext(PokemonContext);
  const { pokemons, filtered, getPokemons, loading } = pokemonContext;

  useEffect(() => {
    getPokemons();
    //eslint-disable-next-line
  }, []);
  return (
    <div className="container">
      <PokemonsFilter />
      <div className="container-list">
        {pokemons !== null &&
          !loading &&
          (filtered !== null
            ? filtered.map((pokemon) => (
                <PokemonItem key={pokemon.id} pokemon={pokemon} />
              ))
            : pokemons.map((pokemon) => (
                <PokemonItem key={pokemon.id} pokemon={pokemon} />
              )))}
      </div>
      {filtered !== null && filtered.length === 0 && (
        <h1>Sorry, Pokemon Not Found</h1>
      )}
      {loading && <Spinner />}
    </div>
  );
};

export default Pokemons;
