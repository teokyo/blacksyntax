import React, { Component } from 'react';
import imagen from '../images/tecnologia.png';
import '../App.css';
import VerticalSliderSection from './VerticalSliderSection';

class SliderSection extends Component {

    ListaItem1 = [
        {
            fragmento1: 'Fast support',
            fragmento2: 'to all our',
            fragmento3: 'clients. Just give',
            fragmento4: 'us a shout',
            parrafo: 'Etiam nec odio vestibulum est mattis effic iturut magna. Pelle ntesque sit am et tellus blandit. Etiam nec odio vestibul. Etiam nec odio vestibulum est mattis effic iturut.'
        },
        {
            fragmento1: 'Fast support',
            fragmento2: 'to all our',
            fragmento3: 'clients. Just give',
            fragmento4: 'us a shout',
            parrafo: 'Etiam nec odio vestibulum est mattis effic iturut magna. Pelle ntesque sit am et tellus blandit. Etiam nec odio vestibul. Etiam nec odio vestibulum est mattis effic iturut.'

        },
        {
            fragmento1: 'Fast support',
            fragmento2: 'to all our',
            fragmento3: 'clients. Just give',
            fragmento4: 'us a shout',
            parrafo: 'Etiam nec odio vestibulum est mattis effic iturut magna. Pelle ntesque sit am et tellus blandit. Etiam nec odio vestibul. Etiam nec odio vestibulum est mattis effic iturut.'

        },
        {
            fragmento1: 'Fast support',
            fragmento2: 'to all our',
            fragmento3: 'clients. Just give',
            fragmento4: 'us a shout',
            parrafo: 'Etiam nec odio vestibulum est mattis effic iturut magna. Pelle ntesque sit am et tellus blandit. Etiam nec odio vestibul. Etiam nec odio vestibulum est mattis effic iturut.'

        },
        {
            fragmento1: 'Fast support',
            fragmento2: 'to all our',
            fragmento3: 'clients. Just give',
            fragmento4: 'us a shout',
            parrafo: 'Etiam nec odio vestibulum est mattis effic iturut magna. Pelle ntesque sit am et tellus blandit. Etiam nec odio vestibul. Etiam nec odio vestibulum est mattis effic iturut.'

        },
        {
            fragmento1: 'Fast support',
            fragmento2: 'to all our',
            fragmento3: 'clients. Just give',
            fragmento4: 'us a shout',
            parrafo: 'Etiam nec odio vestibulum est mattis effic iturut magna. Pelle ntesque sit am et tellus blandit. Etiam nec odio vestibul. Etiam nec odio vestibulum est mattis effic iturut.'

        },
        {
            fragmento1: 'Fast support',
            fragmento2: 'to all our',
            fragmento3: 'clients. Just give',
            fragmento4: 'us a shout',
            parrafo: 'Etiam nec odio vestibulum est mattis effic iturut magna. Pelle ntesque sit am et tellus blandit. Etiam nec odio vestibul. Etiam nec odio vestibulum est mattis effic iturut.'

        },
        {
            fragmento1: 'Fast support',
            fragmento2: 'to all our',
            fragmento3: 'clients. Just give',
            fragmento4: 'us a shout',
            parrafo: 'Etiam nec odio vestibulum est mattis effic iturut magna. Pelle ntesque sit am et tellus blandit. Etiam nec odio vestibul. Etiam nec odio vestibulum est mattis effic iturut.'

        },
        {
            fragmento1: 'Fast support',
            fragmento2: 'to all our',
            fragmento3: 'clients. Just give',
            fragmento4: 'us a shout',
            parrafo: 'Etiam nec odio vestibulum est mattis effic iturut magna. Pelle ntesque sit am et tellus blandit. Etiam nec odio vestibul. Etiam nec odio vestibulum est mattis effic iturut.'

        }
    ];

    state = {
        Value: this.ListaItem1,
        ListaFinalItem1: ''
    };

    componentWillMount() {
        let ListaTemp1 = [];
        (this.state.Value).forEach((item, index) => {
            ListaTemp1.push(< VerticalSliderSection key={index} valores1={item} />)
        });
        this.setState({ ListaFinalItem1: ListaTemp1 })
    }


    render() {
        const ListaSlider1 = this.state.ListaFinalItem1;
        return (
            <div className="v_slider_section">{/* Vertical Slider Section */}
                <div className="container fill_height">
                    <div className="row fill_height">

                        <div className="col-lg-6 v_slider_section_image">
                            <div className="v_slider_image">
                                <img src={imagen} alt="" />
                            </div>
                        </div>

                        <div className="col-lg-5 offset-lg-1 v_slider_content d-flex flex-column justify-content-center">
                            <div className="v_slider_container">

                                {/* Vertical Slider */}
                                <div className="v_slider">

                                    {ListaSlider1}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default SliderSection;