import React from "react";

const Description = ({ descriptions }) => {
  let descriptionArray = [];
  descriptions.forEach((description) => {
    if (description.language.name === "en") {
      descriptionArray.push(description);
    }
  });

  let text =
    descriptionArray[
      Math.floor(Math.random() * (descriptionArray.length + 1) + 1)
    ].flavor_text;

  return (
    <div className="box-pokemon-description-box">
      <p className="box-pokemon-description-box-content">{text.toString()}</p>
    </div>
  );
};

export default Description;
