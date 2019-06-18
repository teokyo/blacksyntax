import React, { Component } from "react";
import "./App.css";
import { wrap } from "module";

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
            <div style={{flexWrap:"nowrap"}} className="col-sm-12 col-md-12 col-lg-6">
              <form>
                <span>De: </span>
                <input type="date" placeholder="dd/mm/aaaa" />
                <br />
                <span>A: </span>
                <input type="date" placeholder="dd/mm/aaaa" />
              </form>
            </div>
            <div style={{flexWrap:'nowwrap'}} className="col-sm-12 col-md-12 col-lg-6">
              <form>
                <span>Código de producto: </span>
                <input type="text" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Reportes;