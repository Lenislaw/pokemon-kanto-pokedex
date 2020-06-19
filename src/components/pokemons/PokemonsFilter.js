import React, { useRef, useContext, useEffect } from "react";
import PokemonContext from "../../context/pokemon/pokemonContext";

const PokemonsFilter = () => {
  const pokemonContext = useContext(PokemonContext);
  const { filterPokemons, filterClear, filtered } = pokemonContext;
  const text = useRef("");
  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });
  const onChange = (e) => {
    if (text.current.value !== "") {
      filterPokemons(e.target.value);
    } else {
      filterClear();
    }
  };
  return (
    <form>
      <input
        ref={text}
        type="text"
        placeholder="&#xF002; Search Pokemon"
        onChange={onChange}
        className="filter-input"
      />
    </form>
  );
};

export default PokemonsFilter;
