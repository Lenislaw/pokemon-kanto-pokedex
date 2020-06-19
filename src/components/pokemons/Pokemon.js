import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import PokemonContext from "../../context/pokemon/pokemonContext";
import Abilities from "./Abilities";
import StatName from "./StatName";
import StatValue from "./StatValue";
import Slider from "./Slider";
import Spinner from "../layout/Spinner";

const Pokemon = (match) => {
  const id = match.match.params.idOrName;

  const pokemonContext = useContext(PokemonContext);
  const { pokemon, getPokemon, error } = pokemonContext;
  console.log(pokemon);

  useEffect(() => {
    getPokemon(id);
  }, []);

  return (
    <div className="box">
      {pokemon !== null ? (
        <div className="box-pokemon">
          <div className="box-pokemon-headingbox">
            <h1 className={`${pokemon.type_one}`}>
              {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}, #
              {pokemon.id}
            </h1>
          </div>
          <Slider
            frontImage={pokemon.image.front}
            backImage={pokemon.image.back}
          />
        <Abilities abilities={pokemon.abilities}/>
          <div className="box-pokemon-info-stats">
            <ul className="pokemon-box-info-stats-statsName-list">
              {pokemon.stats.map((stat) => (
                <StatName key={stat.name} statName={stat.name} />
              ))}
            </ul>
            <ul className="box-pokemon-info-stats-statsValue-list">
              {pokemon.stats.map((stat) => (
                <StatValue
                  key={stat.name}
                  statName={stat.name}
                  statValue={stat.base_stat}
                  color={pokemon.type_one}
                />
              ))}
            </ul>
          </div>
        </div>
      ) : error !== null ? (
        <div className="box-pokemon-error">
          <h1>Sorry, wrong ID or Pokemon number. Try Again!</h1>
          <Link to="/pokemons">Try Again!</Link>
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Pokemon;
