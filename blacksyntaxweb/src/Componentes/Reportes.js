import React, { Component } from "react";
import Alert from "react-s-alert";
import Select from "react-select";
import "../App.css";
import "../css/Reportes.css";
import ReportesA from "../Helpers/Reportes";
import Consultas from "../Helpers/Consultas";
class Reportes extends Component {
    state = {
        FechaInical: "",
        FechaFinal: "",
        CodigoProducto: "",
        ListaEncabezado: null,
        Categorys: [],
        Category: "Pedro",
        ConMen: "",
        ContenedorFinal: null,
        BooleanTabla: false
    };

    Cambio = e => {
        const name = e.target.id;
        const value = e.target.value;
        console.log(value);
        if (value !== "") {
            if (name === "Venta") {
                this.Consulta(value);
            }if (name === "idProducto"){
                this.ConsultarProductos(value);
            }if(name === "idPromocion"){
                this.ConsultarPromocion(value);
            }if(name === "idPromocionLab"){
                this.ConsultarPromocionLab(value);
            }
        } else {
            this.TablaInicial();
        }
        this.setState({ [name]: value });
    };
    LimpiarTabla = () => {
        this.setState({
            ListaEncabezado: null,
            listaFinal: null,
            BooleanTabla: false
        });
    };
    Consulta = q => {
        Consultas.getVentasID(q)
            .then(e => {
                if (e.data.notFound) {
                    this.Alerta("Datos Vacios", false, 1000);
                    this.LimpiarTabla();
                } else {
                    this.CargarTabla(e.data["result"]);
                }
            })
            .catch(e => {
                this.Alerta("Error en su conexión", false, 1000);
                console.log(e);
            });
    };
    ConsultarProductos = d =>{
        Consultas.getProductoCode(d).then(e => {
            if(e.data.notFound){
                this.Alerta("Datos Vacios", false, 1000);
                this.LimpiarTabla();
            }else{
                this.CargarTabla(e.data["result"]);
            }
        }).catch(e => {
            this.Alerta("Error en su conexión", false, 1000);
            console.log(e);
        });
    }
    ConsultarPromocionLab = p => {
        Consultas.getPrombyIdLab(p).then(e => {
        if(e.data.notFound){
            this.Alerta("Datos Vacios", false, 1000);
            this.LimpiarTabla();
        }else{
            this.CargarTabla(e.data["result"]);
        }
    }).catch(e => {
        this.Alerta("Error en su conexión", false, 1000);
        console.log(e);
    });
    }
    ConsultarPromocion = p => {
        Consultas.getPrombyId(p).then(e => {
        if(e.data.notFound){
            this.Alerta("Datos Vacios", false, 1000);
            this.LimpiarTabla();
        }else{
            this.CargarTabla(e.data["result"]);
        }
    }).catch(e => {
        this.Alerta("Error en su conexión", false, 1000);
        console.log(e);
    });
    }

    ConsultaFechas = (FI, FF, CF) => {
        ReportesA.getTablaFiltroFechas(FI, FF, CF).then(e=>{
            let Com = e;
            if (Com != null) {
                console.log("it works")
                this.CargarTabla(Com);
            } else if (Com === 1) {
                this.Alerta("Revice su conexión", false, 1000);
            } else {
                // this.Alerta();
                this.LimpiarTabla();
            }
        }); //Com es lo que devuelve filtro fecha y revisa inconvenientes en el envío de datos 1

    };
    Parametros = comparar => {
        console.log(comparar);

        this.ConsultaFechas(
            this.state.FechaInical,
            this.state.FechaFinal,
            comparar
        ); //Ingresa a la consulta por fechas
    };

    CambioSucursal = (selectedOption) =>{
        this.setState({Sucursal:selectedOption});
    }

    CambioStilo = e => {
        const id = e.target.id;
        switch (id) {
            case "C1": {
                // se va a manejar por cada una de las opciones// añadir opcion a case para op de filtraod
                this.setState({
                    ContenedorFinal: (
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 row">
                            <div className="col-6">
                                <span>Por rango de fechas de :</span>
                                <input
                                    id="FechaInical"
                                    onChange={this.Cambio}
                                    type="date"
                                    className="form-control"
                                    placeholder="Usuario"
                                />
                            </div>

                            <div className="col-6">
                                <span> a: </span>
                                <input
                                    id="FechaFinal"
                                    onChange={this.Cambio}
                                    type="date"
                                    className="form-control"
                                    placeholder="dd/mm/aaaa"
                                />
                            </div>
                            <div className="col-12 row" style={{ marginTop: "2%" }}>
                                <span className="col-3"> Venta: </span>
                                <input
                                    id="Venta"
                                    onChange={this.Cambio}
                                    type="text"
                                    className="form-control col-8"
                                    placeholder="Id venta"
                                />
                            </div>
                            <div className="col-12">
                                <button
                                    type="button"
                                    className="btn btn-outline-info"
                                    onClick={() => this.Parametros("Ventas")}
                                >
                                    Filtro
                </button>
                            </div>
                        </div>
                    )
                });
                break;
            }
            case "C2": {
                this.setState({
                    ContenedorFinal: (
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 row">
                            <div className="col-8">
                                <span></span>
                            <Select
                                value={this.state.Sucursal}
                                onChange={this.CambioSucursal}
                                options={this.state.Sucursales}
                            />
                            </div>
                            <div className="col-12">
                                <button
                                    type="button"
                                    className="btn btn-outline-info"
                                    onClick={() => this.Parametros("Sucursal")}
                                >
                                    Filtro
                </button>
                            </div>
                        </div>
                    ),
                  // Sucursales: ReportesA.getOpciones()
                });
                break;
            }
            case "C3": {
                this.setState({
                    ContenedorFinal: (
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 row">
                            <div className="col-6">
                                <span>Id Producto:</span>
                                <input
                                    id="idProducto"
                                    onChange={this.Cambio}
                                    type="text"
                                    className="form-control"
                                    placeholder="Id Prodcuto"
                                />
                            </div>
                            <div className="col-12">
                                {/*<button
                                    type="button"
                                    className="btn btn-outline-info"
                                    onClick={() => this.Parametros("Productos")}
                                >
                                    Filtro
                                </button>*/}
                            </div>
                        </div>
                    )
                });
                break;
            }
            case "C4": {
                this.setState({
                    ContenedorFinal: (
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 row">
                            <div className="col-6">
                                <span>Promoción:</span>
                                <input
                                    id="idPromocion"
                                    onChange={this.Cambio}
                                    type="text"
                                    className="form-control"
                                    placeholder="Id Promoción"
                                />
                            </div>
                            <div className="col-6">
                                <span>Promoción en laboratorio:</span>
                                <input
                                    id="idPromocionLab"
                                    onChange={this.Cambio}
                                    type="text"
                                    className="form-control"
                                    placeholder="Id Laboratorio"
                                />
                            </div>
                            {/*<div className="col-12">
                                <button
                                    type="button"
                                    className="btn btn-outline-info"
                                    onClick={() => this.Parametros("Promociones")}
                                >
                                    Filtro
                </button>
                    </div>*/}
                        </div>
                    )
                });
                break;
            }
            case "C5": {
                this.setState({
                    ContenedorFinal: (
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 row">
                            <div className="col-6">
                                <span>Por sucursal:</span>
                                <input
                                    id="idSucursalEmp"
                                    onChange={this.Cambio}
                                    type="text"
                                    className="form-control"
                                    placeholder="Id Sucursal"
                                />
                            </div>
                            <div className="col-12">
                                <button
                                    type="button"
                                    className="btn btn-outline-info"
                                    onClick={() => this.Parametros("Empleados")}
                                >
                                    Filtro
                </button>
                            </div>
                        </div>
                    )
                });
                break;
            }
            case "C6": {
                this.setState({
                    ContenedorFinal: null
                });
                this.Doctores();
                break;
            }
            default: {
                this.setState({ ContenedorFinal: null });
            }
        }
    };

    CargarTabla = Valor => {
        this.setState({
            ListaEncabezado: ReportesA.getEncabezado(Valor),
            listaFinal: ReportesA.getTablaDianmica(Valor),
            BooleanTabla: true
        });
    };
    TablaInicial = () => {
        Consultas.getVentas()
            .then(e => {
                if (e.data.notFound) {
                    this.Alerta("Datos Vacios", false, 1000);
                } else {
                    this.CargarTabla(e.data["result"]);
                }
            })
            .catch(e => {
                this.Alerta("Error en su conexión", false, 1000);
                console.log(e);
            });
    };
    Doctores = () => {
        Consultas.getDoctores()
        .then(e => {
            if (e.data.notFound) {
                this.Alerta("Datos Vacios", false, 1000);
            } else {
                this.CargarTabla(e.data["result"]);
            }
        }).catch(e => {
            this.Alerta("Error en su conexión", false, 1000);
            console.log(e);
        });
    }
    componentWillMount() {
        this.TablaInicial();
    }

    Click = () => {
        Alert.error("Test message 3");
    };

    CambioCategory = e => {
        this.setState({ Category: e });
    };

    Alerta = (texto, tipo = false, tiempo = 1000) => {
        tipo
            ? Alert.succes(texto, {
                position: "top",
                effect: "slide",
                timeout: tiempo
            })
            : Alert.error(texto, {
                position: "top",
                effect: "slide",
                timeout: tiempo
            });
    };

    render() {
        const Tabla = this.state.BooleanTabla ? (
            <table className="table users table-hover">
                <thead>
                    <tr className="table-primary">{this.state.ListaEncabezado}</tr>
                </thead>
                <tbody className="grid">{this.state.listaFinal}</tbody>
            </table>
        ) : (
                <h1 className="text-center">Sin Información</h1>
            );
        return (
            <div className="reportes">
                <Alert stack={{ limit: 3 }} />
                <div className="container ">
                    <div className="row">
                        <div className="col-lg-12" id="reporteTitle">
                            <h1>Filtros de reporte</h1>
                        </div>
                    </div>
                    <div className="row">
                        {/*Navegacion*/}
                        <div
                            className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
                            style={{ marginBottom: "2%" }}
                        >
                            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#navbarNav"
                                    aria-controls="navbarNav"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="navbar-toggler-icon" />
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav">
                                        <li name="C1" className="nav-item">
                                            <label
                                                id="C1"
                                                onClick={this.CambioStilo}
                                                className="nav-link"
                                            >
                                                VENTAS{" "}
                                            </label>
                                        </li>
                                        <li name="'C2" className="nav-item">
                                            <label
                                                id="C2"
                                                onClick={this.CambioStilo}
                                                className="nav-link"
                                            >
                                                SUCURSAL{" "}
                                            </label>
                                        </li>
                                        <li name="C3" className="nav-item">
                                            <label
                                                id="C3"
                                                onClick={this.CambioStilo}
                                                className="nav-link"
                                            >
                                                PRODUCTOS
                      </label>
                                        </li>
                                        <li name="C4" className="nav-item">
                                            <label
                                                id="C4"
                                                onClick={this.CambioStilo}
                                                className="nav-link "
                                            >
                                                PROMOCIONES
                      </label>
                                        </li>
                                        <li name="C5" className="nav-item">
                                            <label
                                                id="C5"
                                                onClick={this.CambioStilo}
                                                className="nav-link "
                                            >
                                                EMPLEADOS
                      </label>
                                        </li>
                                        <li name="C6" className="nav-item">
                                            <label
                                                id="C6"
                                                onClick={this.CambioStilo}
                                                className="nav-link "
                                            >
                                                DOCTORES
                      </label>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                            {/*Conten*/}
                            <div style={{ marginTop: "2%" }}>
                                {this.state.ContenedorFinal}
                            </div>
                            {/*Fin Conten*/}
                        </div>
                        {/*fin Navegacion*/}
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            {Tabla}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Reportes;
