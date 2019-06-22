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
            <div className="col-sm-12">
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
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="/hola">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Copyright */}
                <div className="footer_cr">Copyright BlackSyntax</div>
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
