import React, { Component } from "react";
import "./App.css";

class Reportes extends Component {
  render() {
    return (
      <div className="reportes">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>Reportes</h1>
            </div>
          </div>

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
                <span>Por código de producto: </span>
                <br />
                <input type="text" />
              </form>
            </div>
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
        </div>
      </div>
    );
  }
}
export default Reportes;
