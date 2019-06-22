import React, { Component } from 'react';
import VerticalSliderSection from './VerticalSliderSection';
import Services from './Services';
import SliderSection from './SliderSection';
import Features from './Features';
import Newsletter from './Newsletter';
import Footer from './Footer';
import IconBoxes from './IconBoxes';
import Home from "./Home";
class Contenedor extends Component {

    render(){
        return(
            <div>

                <Home/>
                <IconBoxes/>
                <VerticalSliderSection/>
                <Services/>
                <SliderSection/>
                <Features/>
                <Newsletter/>
                <Footer/>
            </div>
        );
    }
}
export default Contenedor;
