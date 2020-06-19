import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PokemonState from "./context/pokemon/PokemonState";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import Pokemons from "./components/pages/Pokemons";
import Pokemon from "./components/pokemons/Pokemon";
import About from "./components/pages/About";

const App = () => {
  return (
    <PokemonState>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/pokemons" component={Pokemons} />
            <Route exact path="/pokemons/:idOrName" component={Pokemon} />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
      </Router>
    </PokemonState>
  );
};

export default App;
