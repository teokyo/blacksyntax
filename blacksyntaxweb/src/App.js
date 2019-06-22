import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Contenedor from "./Componentes/Contenedor";
import Reportes from "./Componentes/Reportes";
import Pro from "./Componentes/Pro";
import Login from "./Componentes/Login";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Pro />
        <header style={{ height: "128px" }} className="header2" />
        <Switch>
          <Route path="/" component={Contenedor} exact />
          <Route path="/Reportes" component={Reportes} />
          <Route path="/Login" component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
