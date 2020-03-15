import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import Layout from "./components/home/Layout";
import Home from "./pages/Home";
import PokemonPage from "./pages/PokemonPage";
import Prueba from "./components/commons/Prueba";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + '/'} component={Home}></Route>
          <Route exact path={process.env.PUBLIC_URL + '/:id'} component={PokemonPage}></Route>
          <Route exact path={process.env.PUBLIC_URL + '/:id/prueba'} component={Prueba}></Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
