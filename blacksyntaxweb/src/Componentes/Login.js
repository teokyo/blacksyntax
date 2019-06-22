import React, { Component } from "react";
import "../css/Login.css";

class Login extends Component {
  state = { User: "", Password: "" };

  Cambio = e => {
    const name = e.target.id;
    const value = e.target.value;
    this.setState({ [name]: value }, () => console.log(this.state[name]));
  };

  render() {
    return (
      <div className="login">
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
            Iniciar Sesión
          </button>
        </form>
      </div>
    );
  }
}
export default Login;
