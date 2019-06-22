import React, {Component} from "react";
import "../App.css";
import "../css/Reportes.css";

class Reportes extends Component {
    state = {FechaInical: '', FechaFinal: ''};

    componentWillMount() {
    console.log('hola')
    }

    Cambio = (e) => {
        const name = e.target.id;
        const value = e.target.value;
        this.setState({[name]: value}, () => console.log(this.state[name]))
    };

    render() {
        return (
            <div className="reportes">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12" id="reporteTitle">
                            <h1>Filtros de reporte</h1>
                        </div>
                    </div>
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
                                    <input id='CodigoProducto' onClick={this.Cambio} type="text"/>
                                </div>


                            </div>

                            <div className="row">
                                <div className="col-sm-12 col-md-6 col-lg-4">
                                    <span>Ordenar por productos por:</span>
                                    <br/>
                                    <input id='OrderVenta' onClick={this.Cambio} type="radio" name="orden"
                                           value="masvendido"/> Más
                                    vendidos<br/>
                                    <input id='OrderVenta' onClick={this.Cambio} type="radio" name="orden"
                                           value="menosvendido"/>
                                    Menos vendidos
                                </div>

                                <div className="col-sm-12 col-md-6 col-lg-4">
                                    <span>Por categoría</span>
                                    <br/>
                                    <select id='Category' value={this.state.Category} onChange={this.Cambio}>
                                        <option value=''></option>
                                        <option value='Hola 1'>hola</option>
                                        <option value='Hola 2'>hola</option>
                                    </select>
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

                    </div>

                </div>
            </div>
        );
    }
}

export default Reportes;
