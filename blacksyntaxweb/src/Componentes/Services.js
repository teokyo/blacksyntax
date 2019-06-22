import React, { Component } from 'react';
import ItemServices from '../Subcomponentes/ItemServices';

class Services extends Component {

    ListaItem = [
        {
            Titulo: 'Fundador:',
            parrafo: 'José Miguel Carrera Pacheco',
        },
        {
            Titulo: 'Fundador:',
            parrafo: 'Pedro González Hernández',
        },
        {
            Titulo: 'Fundador:',
            parrafo: 'Geovanni Mejía Estrada',
        },
        {
            Titulo: 'Fundador:',
            parrafo: 'Juan Carlos Elizondo',
        }
    ];
    state = {
        Value: this.ListaItem,
        ListaFinalItem: ''
    };

    componentWillMount() {
        let ListaTemp = [];
        (this.state.Value).forEach((item, index) => {
            ListaTemp.push(< ItemServices key={index} valores={item}/>)
        });
        this.setState({ListaFinalItem: ListaTemp})
    }

    render(){
        const ListaSlider = this.state.ListaFinalItem;
        return(
            <div style={{width:'100%', overflow:'hidden', marginLeft:'auto',marginRight:'auto'}} className="services">{/* Services */}
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <div className="col-sm-12 section_title">
                                <h1>BlackSyntax Fundadores</h1>
                            </div>
                        </div>
                    </div>
                </div>
        
                <div className="col-sm-12 h_slider_container services_slider_container">
                    <div className=" service_slider_outer">
                        {/* Services Slider */}
                        <div className=" owl-carousel owl-theme services_slider">

                        {ListaSlider}
        
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