import React, { Component } from 'react';
import '../App.css';
class Pro extends Component {

    state = {};

    CambioLink=(e)=>{
       /* const ruta =e.target.id;
        this.props.history.push({
            pathname: ruta,
        });*/
    };
    render() {
        return (
            <header className="col-sm-12 col-md-12 col-lg-12 header d-flex flex-row justify-content-end align-items-center trans_200">
            <nav className="col-sm-12 col-md-12 col-lg-12 main_nav justify-self-end text-right">
			<ul>
				<li className="active"><a id='/' href='/' >Home</a></li>
				<li><a id='Reportes' href='/Reportes'>Reportes</a></li>
                <li><a id="Login" href="/Login">view</a></li>
			</ul>
            
            </nav> 
            </header>
        );
    }

}

export default Pro;
