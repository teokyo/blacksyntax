import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import  Contenedor from './Componentes/Contenedor';
import  Reportes from './Componentes/Reportes';
import MenuBar from "./Componentes/MenuBar";

function App() {
  return (
      <div className="App">
          <BrowserRouter>
              <MenuBar />
              <Switch>
                  <Route path='/' component={Contenedor} exact />
                  <Route path='/Reportes' component={Reportes} />

              </Switch>
          </BrowserRouter>
      </div>

  );
}

export default App;
