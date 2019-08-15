import React, { Component } from 'react';
import '../App.css';
import '../css/principal.css';

class Newsletter extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="newsletter">{/* Newsletter */}
                <div className="container">
                    <div className="row">
                        <div className="col text-lg-center text-left">
                            <div className="newsletter_content">

                                {/* Newsletter Title */}
                                {/*<div className="newsletter_title">
                                    <h1>Suscribete</h1>
                                    <span>Para obtener información adicional.</span>
                                </div>
                                
                                
                                                                    <ul id="mediacontainer" className="social">
                                        <li>
                                            <a href="/hola">
                                                <i id="ficon" className="fab fa-facebook-f" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/hola">
                                                <i id="ticon" className="fab fa-twitter" />
                                            </a>
                                        </li>
                                    </ul>
                                */}



                                <div className="logo footer_logo">
                                    <a href="#">
                                        Black<span className="footerSpan">Syntax</span>
                                    </a>
                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-12">
                                <a href="/hola">
                                                <i id="ficon" className="fab fa-facebook-f" />
                                            </a>
                                            <a href="/hola">
                                                <i id="ticon" className="fab fa-twitter" />
                                            </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Newsletter;