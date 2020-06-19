import React from "react";

const Abilities = ({ abilities }) => {
  return (
    <div className="box-pokemon-abilities">
      <h2>Abilities</h2>
      <ul>
        {abilities.map((ab, index) => (
          <li key={`ability-${index}`}>{ab.ability.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Abilities;
