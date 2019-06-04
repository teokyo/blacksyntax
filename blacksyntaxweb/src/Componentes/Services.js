import React, { Component } from 'react';
import '../App.css';

class Services extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div className="services">{/* Services */}
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <div className="section_title">
                                <h1>BlackSyntax Servicios</h1>
                                <span>Explora tus servicios</span>
                            </div>
                        </div>
                    </div>
                </div>
        
                <div className="h_slider_container services_slider_container">
                    <div className="service_slider_outer">
                        {/* Services Slider */}
                        <div className="owl-carousel owl-theme services_slider">
                            
                            {/* Services Slider Ite */}
                            <div className="owl-item services_item">
                                <div className="services_item_inner">
                                    <div className="service_item_content">
                                        <div className="service_item_title">
                                            <div className="service_item_icon">
                                                <div data-icon="&/holaxe083;" className="icon"></div>
                                            </div>
                                            <h2>Amazing service</h2>
                                        </div>
                                        <p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vesti bul mattis effic iturut magna.</p>
                                        <div className="button service_item_button trans_200">
                                            <a href="/hola" className="trans_200">discover more</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
        
                            {/* Services Slider Ite */}
                            <div className="owl-item services_item">
                                <div className="services_item_inner">
                                    <div className="service_item_content">
                                        <div className="service_item_title">
                                            <div className="service_item_icon">
                                                <div data-icon="&/holaxe059;" className="icon"></div>
                                            </div>
                                            <h2>Servicio 1</h2>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor</p>
                                        <div className="button service_item_button trans_200">
                                            <a href="/hola" className="trans_200">discover more</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
        
                            {/* Services Slider Ite */}
                            <div className="owl-item services_item">
                                <div className="services_item_inner">
                                    <div className="service_item_content">
                                        <div className="service_item_title">
                                            <div className="service_item_icon">
                                                <div data-icon="&/holaxe024;" className="icon"></div>
                                            </div>
                                            <h2>Servicio 2</h2>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor</p>
                                        <div className="button service_item_button trans_200">
                                            <a href="/hola" className="trans_200">discover more</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
        
                            {/* Services Slider Ite */}
                            <div className="owl-item services_item">
                                <div className="services_item_inner">
                                    <div className="service_item_content">
                                        <div className="service_item_title">
                                            <div className="service_item_icon">
                                                <div data-icon="&/holaxe05e;" className="icon"></div>
                                            </div>
                                            <h2>Servicio 3</h2>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor</p>
                                        <div className="button service_item_button trans_200">
                                            <a href="/hola" className="trans_200">discover more</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
        
                            {/* Services Slider Ite */}
                            <div className="owl-item services_item">
                                <div className="services_item_inner">
                                    <div className="service_item_content">
                                        <div className="service_item_title">
                                            <div className="service_item_icon">
                                                <div data-icon="&/holaxe059;" className="icon"></div>
                                            </div>
                                            <h2>Servicio 4</h2>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor</p>
                                        <div className="button service_item_button trans_200">
                                            <a href="/hola" className="trans_200">discover more</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
        
                            {/* Services Slider Ite */}

        
                        </div>
                    
                        <div className="services_slider_nav services_slider_nav_left"><i className="fas fa-chevron-left trans_200"></i></div>
                        <div className="services_slider_nav services_slider_nav_right"><i className="fas fa-chevron-right trans_200"></i></div>
        
                    </div>
                </div>
            </div>
        
        );
    }
}
    export default Services;