import React, { Component } from 'react';
import Search from './Search';

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
                        <li className="active"><a href="#">Home</a></li>
                        <li><a href="/Reportes">Reportes</a></li>
                       
                    </ul>
                <Search></Search>

                </nav>
            </header>
        );
    }
}

export default Pro;