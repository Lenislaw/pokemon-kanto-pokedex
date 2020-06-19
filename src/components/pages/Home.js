import React from "react";
import ReactPlayer from "react-player";

const Home = () => {
  return (
    <div className="container">
      <h1>Undiscoverd Pokemon World</h1>

      <ReactPlayer
        url="https://www.youtube.com/watch?v=hX-NHafvY5I"
        className="video"
        width="300px"
      />
      <p>
        This APP will help you discover Pokemons from the Kanto region and
        expand your knowledge about them! This is simple PokeDex with GAME BOY
        GAME informations. Enjoy your adventure!
      </p>
    </div>
  );
};

export default Home;
