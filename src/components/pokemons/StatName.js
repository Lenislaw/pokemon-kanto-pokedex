import React from "react";

const StatName = ({ statName }) => {
  return (
    <li
      key={`${statName}-name`}
      className="box-pokemon-info-stats-statsName-list-statname"
    >
      {statName.toUpperCase()}
    </li>
  );
};

export default StatName;
