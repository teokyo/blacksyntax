import React, { Component } from "react";
import "../css/Login.css";

class Login extends Component {
  state = { User: "", Password: "", stilo:'login', title:'short'};

  Cambio = e => {
    const name = e.target.id;
    const value = e.target.value;
    this.setState({ [name]: value }, () => console.log(this.state[name]));
  };

  changeVisibility=()=>{
    console.log('entro')
    if(this.state.stilo === 'login'){
      this.setState({stilo:'login1'})
    }else{
      this.setState({stilo:'login'})

    }

    if(this.state.title === 'short'){
      this.setState({title:'long'})
    }else{
      this.setState({title:'short'})
    }
  }
  render() {
    return (
      <div>
        <div className={this.state.stilo}>
        <span className="title">Inicie sesión</span>
        <form method="post">
          <span>Correo:</span>
          <br />
          <input
            id="User"
            type="email"
            value={this.state.User}
            onChange={this.Cambio}
          />
          <br />
          <span>Contraseña:</span>
          <br />
          <input
            id="Password"
            type="password"
            value={this.state.Password}
            onChange={this.Cambio}
          />
          <br />
          <button type="submit" value="submit" className="btnstart">
            Iniciar Sesión
          </button>
        </form>
      </div>
        <button id="btnlogin" type='button'className='bhutonFlotante' onClick={this.changeVisibility}>Login</button>
      </div>
      
    );
  }
}
export default Login;
