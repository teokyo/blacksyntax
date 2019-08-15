import React, { Component } from 'react';
import '../css/Menu.css';
import '../App.css';
class Pro extends Component {

    state = {
        StilosMenuInterno:'col-12 row hiddenP',hide:"active"
    };

    CambioLink=(e)=>{
        this.props.history.push({
            pathname: 'Reportes',
        });
    };
    CambioMenu=()=>{
       this.setState({StilosMenuInterno: (this.state.StilosMenuInterno ==='col-12 row hiddenP') ? 'col-12 row hiddenP  d-block ':'col-12 row hiddenP'})
    }

    MostrarReportes = () =>{

}
    render() {
        return (
          <>
              <nav id="CajaMenu" className="col-12 ">
                      <span className="ToggleOff lnr lnr-menu" onClick={this.CambioMenu}> </span>
                  <div className={this.state.StilosMenuInterno}>
                      <li className=" col-md-2 col-lg-2 col-xl-2 ">
                          <a id="En" href='/' >Home</a>
                      </li>
                      <li  className=" col-md-2 col-lg-2 col-xl-2">
                          <div id={this.state.hide}><a id="En" href='/Reportes'>Reportes</a></div>
                      </li>

                  </div>
              </nav>
          </>

        );
    }

}

export default Pro;

/*
* 	<li className=""><a id='/' href='/' >Home</a></li>
				<li><a id='Reportes' href='/Reportes'>Reportes</a></li>*/
