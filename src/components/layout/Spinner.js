import React from "react";
import Pokeball from "../../imgs/pokeball.jpg";

const Spinner = () => {
  return (
    <div className="spinner">
      <img src={Pokeball} alt="Pokeball" className="spinner-image" />
      <p className="spinner-content">Loading...</p>
    </div>
  );
};

export default Spinner;
