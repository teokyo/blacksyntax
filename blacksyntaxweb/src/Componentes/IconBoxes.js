import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class IconBoxes extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div className="icon_boxes">{/* Icon Boxes */}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="icon_box_title">
                                <h1>Servicios interesantes</h1>
                            </div>
                            <div className="button icon_box_button trans_200">
                                <a href="#" className="trans_200">mas información</a>
                            </div>
                        </div>
        
                        <div className="col-lg-4 icon_box_col">
        
                             {/* Icon Box Item */}
                            <div className="icon_box_item">
                                <h2>Equipo</h2>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa </p>
                            </div>
        
                            {/* Icon Box Item */}
                            <div className="icon_box_item">
                                <h2>Diseño Moderno</h2>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. </p>
                            </div>
        
                        </div>
        
                        <div className="col-lg-4 icon_box_col">
        
                            {/* Icon Box Item */}
                            <div className="icon_box_item">
                                <h2>Venta Marketing</h2>
                                <p>Etiam euismod sapien nec est tempus consequat. Nullam eget pretium mi. Curabitur rhoncus finibus quam quis sodales.</p>
                            </div>

                            {/* Icon Box Item */}
                            <div className="icon_box_item">
                                <h2>Uso</h2>
                                <p>Etiam euismod sapien nec est tempus consequat. Nullam eget pretium mi. Curabitur rhoncus finibus quam quis sodales.</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default IconBoxes;