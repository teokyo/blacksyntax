import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import  Contenedor from './Componentes/Contenedor';
import  Reportes from './Componentes/Reportes';
import Pro from "./Componentes/Pro";
function App() {
  return (
      <div className="App">
          <BrowserRouter>
              <Pro />
              <header style={{ height: '128px'}} className="header2">
              </header>
              <Switch>
                  <Route path='/' component={Contenedor} exact />
                  <Route path='/Reportes' component={Reportes} />

              </Switch>
          </BrowserRouter>
      </div>
  );
}

export default App;