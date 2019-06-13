import React from 'react';
import Pro from './Componentes/Pro';
import Home from './Componentes/Home';
import IconBoxes from './Componentes/IconBoxes';
import VerticalSliderSection from './Componentes/VerticalSliderSection'
import Features from './Componentes/Features';
import Services from './Componentes/Services';
import Newsletter from './Componentes/Newsletter';
import Footer from './Componentes/Footer';
import SliderSection from './Componentes/SliderSection';

function App() {
  return (
    <div className="App">
      <Pro />
      <header style={{ height: '128px'}} className="header2">
          
      </header>
      <Home/>
      <IconBoxes/>
      {/*<VerticalSliderSection/>*/}
      <Services/>
      <SliderSection/>
      <Features/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default App;


