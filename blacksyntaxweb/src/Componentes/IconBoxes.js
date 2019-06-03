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
                                <h1>Build your entire website in minutes</h1>
                            </div>
                            <div className="button icon_box_button trans_200">
                                <a href="#" className="trans_200">discover more</a>
                            </div>
                        </div>
        
                        <div className="col-lg-4 icon_box_col">
        
                             {/* Icon Box Item */}
                            <div className="icon_box_item">
                                <h2>Great team</h2>
                                <p>Etiam euismod sapien nec est tempus consequat. Nullam eget pretium mi. Curabitur rhoncus finibus quam quis sodales.</p>
                            </div>
        
                            {/* Icon Box Item */}
                            <div className="icon_box_item">
                                <h2>Modern Design</h2>
                                <p>Etiam euismod sapien nec est tempus consequat. Nullam eget pretium mi. Curabitur rhoncus finibus quam quis sodales.</p>
                            </div>
        
                        </div>
        
                        <div className="col-lg-4 icon_box_col">
        
                            {/* Icon Box Item */}
                            <div className="icon_box_item">
                                <h2>Online Marketing</h2>
                                <p>Etiam euismod sapien nec est tempus consequat. Nullam eget pretium mi. Curabitur rhoncus finibus quam quis sodales.</p>
                            </div>
        
                            {/* Icon Box Item */}
                            <div className="icon_box_item">
                                <h2>Easy to use</h2>
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