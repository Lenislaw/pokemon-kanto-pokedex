import React from "react";

const StatValue = ({ statName, statValue, color }) => {
  const statWidth = (statValue / 200) * 100;
  return (
    <li
      key={`${statName}-value`}
      className="box-pokemon-info-stats-statsValue-list-statvalue"
    >
      <div className="bar">
        <div
          className={`bar-color ${color}`}
          style={{ width: `${statWidth}%` }}
        >
          {statValue}
        </div>
      </div>
    </li>
  );
};

export default StatValue;
