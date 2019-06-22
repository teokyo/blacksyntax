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
        </div>
      </div>
    );
  }
}
export default Reportes;
