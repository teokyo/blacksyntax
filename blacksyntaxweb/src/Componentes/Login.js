import React, { Component } from "react";
import "../css/Login.css";

class Login extends Component {
  state = { User: "", Password: "", stilo:'login'};

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
  }
  render() {
    return (
      <div>
        <div className={this.state.stilo}>
        <span>Inicie sesión</span>
        <form method="post">
          Correo:
          <br />
          <input
            id="User"
            type="email"
            value={this.state.User}
            onChange={this.Cambio}
          />
          <br />
          Contraseña:
          <br />
          <input
            id="Password"
            type="password"
            value={this.state.Password}
            onChange={this.Cambio}
          />
          <br />
          <button type="submit" value="submit">
            Iniciar Sesión2
          </button>
        </form>
      </div>
        <button id="btnlogin" type='button'className='bhutonFlotante' onClick={this.changeVisibility}>Login</button>
      </div>
      
    );
  }
}
export default Login;
