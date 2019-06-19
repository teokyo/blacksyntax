import React, { Component } from 'react';
import '../App.css';

class Newsletter extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div className="newsletter">{/* Newsletter */}
                <div className="container">
                    <div className="row">
                        <div className="col text-lg-center text-left">
                            <div className="newsletter_content">
        
                                {/* Newsletter Title */}
                                <div className="newsletter_title">
                                    <h1>Suscribete</h1>
                                    <span>Para obtener información adicional.</span>
                                </div>
                                
                                {/* Newsletter Form */}
                                <div className="newsletter_form_container">
                                    <form action="/hola">
                                        <div className="input-group">
                                            <input type="email" className="newsletter_email" placeholder="Your e-mail address here" required="required" data-error="Valid email address is required."/>
                                            <button id="newsletter_form_submit" type="submit" className="button newsletter_submit_button trans_200" value="Submit">
                                                Enviar
                                            </button>
                                        </div>
                                            
                                    </form>
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