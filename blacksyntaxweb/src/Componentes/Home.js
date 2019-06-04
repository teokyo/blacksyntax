import React, {Component} from 'react';
import imagen from '../images/slider_background.jpg';
import ItemSliderInicial from '../Subcomponentes/ItemSliderInicial'
import '../App.css';

class Home extends Component {
    ListaItem = [
        {
            imagen: "http://lorempixel.com/700/500",
            Titulo: 'Titulo 1',
            Subtitulo: 'Subtitulo 1'
        },
        {
            imagen: imagen,
            Titulo: 'Titulo 2',
            Subtitulo: 'Subtitulo 2'
        },
        {
            imagen: imagen,
            Titulo: 'Titulo 3',
            Subtitulo: 'Subtitulo 3'
        }
    ];
    state = {
        Value: this.ListaItem,
        ListaFinalItem: ''
    };

    componentDidMount() {
        let ListaTemp = [];
        (this.state.Value).forEach((item, index) => {
            ListaTemp.push(< ItemSliderInicial key={index} valores={item}/>)
        });
        this.setState({ListaFinalItem: ListaTemp})
    }

    render() {
        const ListaSlider = this.state.ListaFinalItem;
        return (
            <div className="home">


                { /* div className hero */}
                <div className="hero_slider_container">
                    <div className="owl-carousel owl-theme hero_slider">
                        {/*slider team */}
                        {ListaSlider}
                    </div>
                    {/* Hero Slider Navigation Left */}
                    <div className="hero_slider_nav hero_slider_nav_left">
                        <div
                            className="hero_slider_prev d-flex flex-column align-items-center justify-content-center trans_200">
                            <i className="fas fa-chevron-left trans_200"></i>
                        </div>
                    </div>

                    {/* Hero Slider Navigation Right */}
                    <div className="hero_slider_nav hero_slider_nav_right">
                        <div
                            className="hero_slider_next d-flex flex-column align-items-center justify-content-center trans_200">
                            <i className="fas fa-chevron-right trans_200"></i>
                        </div>
                    </div>
                </div>


                <div className="hero_side_text_container">
                    <div
                        className="double_arrow_container d-flex flex-column align-items-center justify-content-center">
                        <div className="double_arrow nav_links" data-scroll-to=".icon_boxes">
                            <i className="fas fa-chevron-left trans_200"></i>
                            <i className="fas fa-chevron-left trans_200"></i>
                        </div>
                    </div>
                    <div className="hero_side_text">
                        <h2>Modern design easy to use</h2>
                        <p>Maecenas id orci rutrum, vehicula nunc sit amet, fringilla ante. Nulla efficitur.</p>
                    </div>
                </div>

                <div className="next_section_scroll">
                    <div className="next_section nav_links" data-scroll-to=".icon_boxes">
                        <i className="fas fa-chevron-down trans_200"></i>
                        <i className="fas fa-chevron-down trans_200"></i>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
