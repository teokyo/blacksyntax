import React, {Component} from "react";
import Select from 'react-select';
import Alert from 'react-s-alert';
import "../App.css";
import "../css/Reportes.css";
import Consultas from '../Helpers/Consultas';
class Reportes extends Component {
    state = {FechaInical: '', FechaFinal: '',CodigoProducto:'', Categorys: [], Category: 'Pedro'};

    componentWillMount() {

    }

    Cambio = (e) => {
        const name = e.target.id;
        const value = e.target.value;
        this.setState({[name]: value});
    };

    CambioCategory=(e)=>{
        this.setState({ Category:e });
    };
    render() {
        return (
            <div className="reportes">
                <div className="container ">
                    <div className="row">
                        <div className="col-lg-12" id="reporteTitle">
                            <h1>Filtros de reporte</h1>
                        </div>
                    </div>
                   <div className='row'>
                       <div className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6'>

                           <form>
                               <div className="row">
                                   <div className="col-sm-12 col-md-6 col-lg-4">
                                       <span>Por rango de fechas</span>
                                       <br/>
                                       <span>De: </span> <br/>
                                       <input value={this.state.FechaInical} onChange={this.Cambio} type="date"
                                              className="form-control" placeholder="Usuario"/>
                                       <br/>
                                       <span> A: </span> <br/>
                                       <input id='FechaFinal' value={this.state.FechaFinal} onChange={this.Cambio}
                                              type="date" className="form-control" placeholder="dd/mm/aaaa"/>
                                   </div>
                                   <div className="col-sm-12 col-md-6 col-lg-4">

                                       <span>Por código de producto: </span>
                                       <br/>
                                       <input id='CodigoProducto' value={this.state.CodigoProducto} onChange={this.Cambio} type="text"/>
                                   </div>


                               </div>

                               <div className="row">
                                   <div className="col-sm-12 col-md-6 col-lg-4">
                                       <span>Ordenar por productos por:</span>
                                       <br/>
                                       <input id='OrderVenta' checked={this.state.OrderVenta === 'masvendido'}
                                              onChange={this.Cambio} type="radio" name="orden"
                                              value="masvendido"/> Más vendidos<br/>

                                       <input id='OrderVenta' checked={this.state.OrderVenta === 'menosvendido'}
                                              onChange={this.Cambio} type="radio" name="orden"
                                              value="menosvendido"/>Menos vendidos
                                   </div>

                                   <div className="col-sm-12 col-md-6 col-lg-4">
                                       <span>Por categoría</span>
                                       <br/>
                                       <Select
                                           value={this.state.Category}
                                           onChange={this.CambioCategory}
                                           options={this.state.Categorys}
                                       />
                                   </div>
                               </div>

                               <div className="row">
                                   <div className="col-sm-12" id="repcontent">
                                       <button className="button-reporte">
                                           Realizar reporte
                                       </button>
                                   </div>
                               </div>
                           </form>
                       </div>
                       <div className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6'>
                           <table>
                               <tr>
                                   <th>stg</th>
                                   <th>stg</th>
                               </tr>
                               <td>somtg</td>
                               <td>somtg</td>
                           </table>
                       </div>
                   </div>
                </div>
            </div>
        );
    }
}

export default Reportes;
