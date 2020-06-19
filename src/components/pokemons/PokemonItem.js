import React, { useContext } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import PokemonContext from "../../context/pokemon/pokemonContext";
import PropTypes from "prop-types";

const PokemonItem = ({ pokemon }) => {
  const { id, name, image, type_one, type_two } = pokemon;

  const pokemonContext = useContext(PokemonContext);
  const { getPokemon } = pokemonContext;

  let match = useRouteMatch();

  const onClick = () => {
    getPokemon(id);
  };

  return (
    <div className={`container-list-box ${type_one}`}>
      <Link to={`${match.url}/${id}`} onClick={onClick}>
        <h2>
          {name.charAt(0).toUpperCase() + name.slice(1)}, #{id}
        </h2>
        <div className="container-box-picture">
          <img
            src={image.front}
            alt={name}
            className="container-box-picture-image"
          />
        </div>
        <h5>Type:</h5>
        {type_two === null ? (
          <p>{type_one}</p>
        ) : (
          <p>
            {type_one}-{type_two}
          </p>
        )}
      </Link>
    </div>
  );
};

PokemonItem.ptopTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default PokemonItem;
