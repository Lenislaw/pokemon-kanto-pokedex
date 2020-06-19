import {
  FILTER_POKEMONS,
  FILTER_CLEAR,
  GET_POKEMONS,
  GET_POKEMON,
  RESET_POKEMON,
  POKEMONS_ERROR,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        loading: false,
        pokemons: action.payload,
      };
    case GET_POKEMON:
      return {
        ...state,
        loading: false,
        pokemon: action.payload,
      };

    case RESET_POKEMON:
      return {
        ...state,
        pokemon: null,
      };
    case POKEMONS_ERROR:
      return {
        ...state,
        pokemon: null,
        error: "Something went wrong",
      };
    case FILTER_POKEMONS:
      return {
        ...state,
        filtered: state.pokemons.filter((pokemon) => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return (
            pokemon.name.match(regex) ||
            pokemon.id.match(regex) ||
            pokemon.search_by_type.match(regex)
          );
        }),
      };
    case FILTER_CLEAR:
      return {
        ...state,
        filtered: null,
      };
    default:
      return state;
  }
};
