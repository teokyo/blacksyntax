import React, { Component } from 'react';
import '../App.css';
import Buscar from './Buscar.js';

class Pro extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <header className="header d-flex flex-row justify-content-end align-items-center trans_200">
            <nav className="main_nav justify-self-end text-right">
			<ul>
				<li className="active"><a href="/Hola">Home</a></li>
				<li><a href="/Reportes">Reportes</a></li>
			</ul>
            <Buscar />
            </nav> 
            </header>
        );
    }

}

export default Pro;