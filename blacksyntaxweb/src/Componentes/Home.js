import React, {Component} from 'react';
import imagen from '../images/slider_background.jpg';
import ItemSliderInicial from '../Subcomponentes/ItemSliderInicial'
import Login from './Login';
import '../App.css';
import FloatingButton from '../Subcomponentes/FloatingButton';

class Home extends Component {
    ListaItem = [
        {
            imagen: imagen,
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
        },
        {
            imagen: imagen,
            Titulo: 'Titulo 4',
            Subtitulo: 'Subtitulo 2'
        },
        {
            imagen: imagen,
            Titulo: 'Titulo 5',
            Subtitulo: 'Subtitulo 4'
        },
        {
            imagen: imagen,
            Titulo: 'Titulo 6',
            Subtitulo: 'Subtitulo 5'
        }
    ];
    state = {
        Value: this.ListaItem,
        ListaFinalItem: ''
    };

    componentWillMount() {
        let ListaTemp = [];
        (this.state.Value).forEach((item, index) => {
            ListaTemp.push(< ItemSliderInicial key={index} valores={item}/>);
        });
        this.setState({ListaFinalItem: ListaTemp})
    }

    render() {
        const ListaSlider = this.state.ListaFinalItem;
        return (
            <div className="home">


                { /* div className hero */}
                <div className="col-sm-12  hero_slider_container">
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


                <div className="  hero_side_text_container">
                    <div
                        className="double_arrow_container d-flex flex-column align-items-center justify-content-center">
                        <div className="double_arrow nav_links" data-scroll-to=".icon_boxes">
                            <i className="fas fa-chevron-left trans_200"></i>
                            <i className="fas fa-chevron-left trans_200"></i>
                        </div>
                    </div>
                    <div className="hero_side_text">
                        <h2>BlackSyntax</h2>
                        <p>Te acercamos al futuro</p>
                    </div>
                </div>

                <div className="next_section_scroll">
                    <div className="next_section nav_links" data-scroll-to=".icon_boxes">
                        <i className="fas fa-chevron-down trans_200"></i>
                        <i className="fas fa-chevron-down trans_200"></i>
                    </div>
                </div>
                <Login/>
                <FloatingButton/>
            </div>
        );
    }
}

export default Home;
