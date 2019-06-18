import React, { Component } from "react";
import "../App.css";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <footer className="footer">
        {/* Footer */}
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              {/* Footer Intro */}
              <div className="footer_intro">
                {/* Logo */}
                <div className="logo footer_logo">
                  <a href="/hola">
                    Black<span>Syntax</span>
                  </a>
                </div>

                <p />

                {/* Social */}
                <div className="footer_social">
                  <ul>
                    <li>
                      <a href="/hola">
                        <i className="fab fa-pinterest" />
                      </a>
                    </li>
                    <li>
                      <a href="/hola">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="/hola">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="/hola">
                        <i className="fab fa-dribbble" />
                      </a>
                    </li>
                    <li>
                      <a href="/hola">
                        <i className="fab fa-behance" />
                      </a>
                    </li>
                    <li>
                      <a href="/hola">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Copyright */}
                <div className="footer_cr">Copyright BlackSyntax</div>
              </div>
            </div>

            {/* Footer Servicio */}
            <div className="col-lg-2">
              <div className="footer_col">
                <div className="footer_col_title">Servicio</div>
                <ul>
                  <li>
                    <a href="/hola">Social media</a>
                  </li>
                </ul>
              </div>

              <div className="footer_col">
                <div className="footer_col_title">Adiciones</div>
                <ul>
                  <li>
                    <a href="/hola">Social</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Footer Menu */}
            <div className="col-lg-2">
              <div className="footer_col">
                <div className="footer_col_title">Menu</div>
                <ul>
                  <li>
                    <a href="/hola">Home</a>
                  </li>
                  <li>
                    <a href="/hola">Nosotros</a>
                  </li>
                  <li>
                    <a href="/hola">Servicio</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Footer About */}
            <div className="col-lg-2">
              <div className="footer_col">
                <div className="footer_col_title">Fundadores</div>
                <ul>
                  <li>Jose Miguel Carrera Pacheco</li>
                  <li>Pedro González Hernández</li>
                  <li>Geovanni Mejía Estrada</li>
                  <li>Juan Carlos Elizondo</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              {/* Copyright */}
              <div className="footer_cr_2">2018 BlackSyntax</div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
