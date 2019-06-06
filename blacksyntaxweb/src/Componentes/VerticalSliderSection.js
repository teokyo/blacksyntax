import React, { Component } from 'react';
import '../App.css';

class VerticalSliderSection extends Component {

    state={};

    componentDidMount() {
        this.setState({ ...(this.props.valores1) });
    }

    render(){
        return(
            <div>
                <div class="v_slider_item">
                    <h1>{this.state.fragmento1}</h1>
                    <h1>{this.state.fragmento2}</h1>
                    <h1>{this.state.fragmento3}</h1>
                    <h1>{this.state.fragmento4}</h1>
                    <p>{this.state.parrafo}</p> 
                </div>
            </div>
        );
    }
    
}
export default VerticalSliderSection;