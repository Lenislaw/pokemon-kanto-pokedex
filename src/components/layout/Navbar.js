import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../imgs/logo_pokemon.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={Logo} alt="Pokemon Logo" className="navbar-logo-img" />
      </div>
      <div className="navbar-box">
        <ul className="navbar-box-list">
          <li className="navbar-box-list-item">
            <Link to="/">Home</Link>
          </li>
          <li className="navbar-box-list-item">
            <Link to="/pokemons">Pokemons</Link>
          </li>
          <li className="navbar-box-list-item">
            <Link to="/about" className="navbar-box-list-item-link">
              About
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
