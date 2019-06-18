import React, { Component } from 'react';
import ItemServices from '../Subcomponentes/ItemServices';

class Services extends Component {

    ListaItem = [
        {
            Titulo: '',
            parrafo: 'Black Syntax le ofrece un servicio para poder consultar su inventario de manera sencilla y efectiva.',
            boton:'descubrir más'
        },
        {
            Titulo: '',
            parrafo: 'Podrá obtener reportes específicos gracias a los filtros de información que posee',
            boton:'descubrir más'
        },
        {
            Titulo: '',
            parrafo: 'Ahorre tiempo en el manejo de su empresa y manténgase informado',
            boton:'descubrir más'
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
                        <div className="col text-center">
                            <div className="section_title">
                                <h1>BlackSyntax Servicios</h1>
                                <span>Explore sus servicios</span>
                            </div>
                        </div>
                    </div>
                </div>
        
                <div className="h_slider_container services_slider_container">
                    <div className="service_slider_outer">
                        {/* Services Slider */}
                        <div className="owl-carousel owl-theme services_slider">

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