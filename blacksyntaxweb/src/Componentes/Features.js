import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class Features extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div className="features">{/* Features */}
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
        
                            <div className="section_title">
                                <h1>Modern features</h1>
                            </div>
        
                        </div>
                    </div>
                    <div className="row features_row">
        
                        <div className="col-lg-4 text-lg-right features_col order-lg-1 order-2">
                            
                            {/* Features Item*/}
                            <div className="features_item">
                                <h2>Responsive</h2>
                                <p>Etiam nec odio vestibulum est mattis effic iturut magna. Pel lentesque sit am et tellus.</p>
                            </div>
        
                            {/* Features Item*/}
                            <div className="features_item">
                                <h2>Clean code</h2>
                                <p>Nec odio vestibulum est mattis effic iturut magna. Pel lentesque sit am et tellus bla ndit.</p>
                            </div>
        
                        </div>
        
                        <div className="col-lg-4 d-flex flex-column align-items-center order-lg-2 order-1">
                            <div className="features_image">
                                <img src="../images/features.png" alt=""/>
                            </div>
                            <div className="button features_button trans_200">
                                <a href="#" className="trans_200">discover more</a>
                            </div>
                        </div>
        
                        <div className="col-lg-4 features_col order-lg-3 order-3">
                            
                            {/* Features Item*/}
                            <div className="features_item">
                                <h2>Retina ready</h2>
                                <p>Nec odio vestibulum est mattis effic iturut magna. Pel lentesque sit am et tellus bla ndit.</p>
                            </div>
        
                            {/* Features Item*/}
                            <div className="features_item">
                                <h2>Great team</h2>
                                <p>Etiam nec odio vestibulum est mattis effic iturut magna. Pel lentesque sit am et tellus.</p>
                            </div>
        
                            <div className="button features_button_2 trans_200">
                                <a href="#" className="trans_200">discover more</a>
                            </div>
        
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
    export default Features;