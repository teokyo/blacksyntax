import React, { Component } from "react";
import "../App.css";
import "../css/Reportes.css";

class Reportes extends Component {
  render() {
    return (
      <div className="reportes">
        <div className="container">
          <div className="row">
            <div className="col-lg-12" id="reporteTitle">
              <h1>Filtros de reporte</h1>
            </div>
          </div>

<<<<<<< HEAD
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6">
              <form>
                <span>Por rango de fechas</span>
                <br/>
                <span>De: </span>
                <input type="date" placeholder="dd/mm/aaaa" />
                <br />
                <span> A: </span>
                <input type="date" placeholder="dd/mm/aaaa" />
              </form>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6">
              <form>
=======
          <form>
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-4">
                <span>Por rango de fechas</span>
                <br />
                <span>De: </span> <br />
                <input type="date" placeholder="dd/mm/aaaa" />
                <br />
                <span> A: </span> <br />
                <input type="date" placeholder="dd/mm/aaaa" />
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4">
>>>>>>> Joel
                <span>Por código de producto: </span>
                <br />
                <input type="text" />
              </div>

              <div className="col-sm-12 col-md-6 col-lg-4">
                <span>Por fecha de caducidad:</span>
                <br />
                <input type="date" />
              </div>
            </div>
<<<<<<< HEAD
          </div>

          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6">
              <form>
                <span>Por fecha de caducidad:</span>
                <br />
                <input type="date" />
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <a>Realizar reporte</a>
            </div>
          </div>
=======

            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-4">
                <span>Ordenar por productos por:</span>
                <br />
                <input type="radio" name="orden" value="masvendido" /> Más
                vendidos<br />
                <input type="radio" name="orden" value="menosvendido" />
                Menos vendidos
              </div>

              <div className="col-sm-12 col-md-6 col-lg-4">
                <span>Por categoría</span>
                <br />
                <select>
                  <option>hola</option>
                  <option>hola</option>
                  <option>hola</option>
                </select>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12" id="repcontent">
                <a className="button-reporte" href="#" >
                  Realizar reporte
                </a>
              </div>
            </div>
          </form>
>>>>>>> Joel
        </div>
      </div>
    );
  }
}
export default Reportes;
