import React, { Component } from 'react';
import VerticalSliderSection from './VerticalSliderSection';
import Services from './Services';
import SliderSection from './SliderSection';
import Features from './Features';
import Newsletter from './Newsletter';
import Footer from './Footer';
import IconBoxes from './IconBoxes';
import Home from "./Home";
import Login from './Login';

class Contenedor extends Component {

    render(){
        return(
            <>
                <Login/>
                <Home className="col-12"/>
                <IconBoxes/>
                <VerticalSliderSection/>
                <Services/>
                {/*<SliderSection/>
                <Features/>*/}
                <Newsletter/>
        {/*<Footer/>*/}
            </>
        );
    }
}
export default Contenedor;
