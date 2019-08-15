import React, { Component } from 'react';
import '../App.css';

class IconBoxes extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div className="icon_boxes" style={{paddingBottom:'0px'}}>{/* Icon Boxes */}
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12  col-lg-4">
                            <div className="icon_box_title">
                                <h1>Dataware House</h1>
                            </div>
                        </div>
        
                        <div className="col-sm-12  col-lg-4 icon_box_col">
        
                             {/* Icon Box Item */}
                            <div className="col-sm-12  col-lg-12 icon_box_item">
                                <h2>Misión</h2>
                                <p>Desarrolar ideas innovadoras que ayuden a mejorar el crecimiento de las empresas y a su vez que contribuyan con la economía nacional basados en los principios y valores que nos rigen.</p>
                            </div>
        
                            {/* Icon Box Item */}
                            {/*<div className="col-sm-12 col-lg-12 icon_box_item">
                                <h2>valores</h2>
                                <ul>
                                    <li>responsabilidad</li>
                                    <li>Honestidad</li>
                                    <li>Ética profecional</li>
                                </ul>
                            </div>*/}
        
                        </div>
        
                        <div className="col-sm-12 col-lg-4 icon_box_col">
        
                            {/* Icon Box Item */}
                            <div className="col-sm-12  col-lg-12 icon_box_item">
                                <h2>Visión</h2>
                                <p>Ser una empresa de soluciones tecnológicas reconocida a nivel nacional por la calidad e innovación de nuestros servicios y productos desarrollados.</p>
                            </div>

                            {/* Icon Box Item */}
  {/*}                          <div className="col-sm-12  col-lg-12 icon_box_item">
                                <h2>Uso</h2>
                                <p>Etiam euismod sapien nec est tempus consequat. Nullam eget pretium mi. Curabitur rhoncus finibus quam quis sodales.</p>
        </div>*/}
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default IconBoxes;