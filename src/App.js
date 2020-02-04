import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import Layout from "./components/home/Layout";
import Home from "./pages/Home";
import PokemonPage from "./pages/PokemonPage";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/:id" component={PokemonPage}></Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
