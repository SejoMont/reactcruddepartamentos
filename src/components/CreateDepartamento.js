import React, { Component } from "react";
import axios from "axios";
import Global from "../Global";
import { Navigate } from "react-router-dom";

export default class CreateDepartamento extends Component {
  cajaNumero = React.createRef();
  cajaNombre = React.createRef();
  cajaLocalidad = React.createRef();

  state = {
    status: false,
  };

  insertDepartamento = (e) => {
    e.preventDefault();

    var id = parseInt(this.cajaNumero.current.value);
    var nombre = this.cajaNombre.current.value;
    var lc = this.cajaLocalidad.current.value;

    var Departamento = {
      numero: id,
      nombre: nombre,
      localidad: lc
    }

    var request = "api/departamentos";

    var url = Global.apiDepartamentos + request;

    axios.post(url, Departamento).then(response => {
      this.setState({
        status: true
      })
    })
    
  };

  render() {
    if (this.state.status == true) {
      return (<Navigate to="/"/>);
    } else {
      return (
        <div>
          <form style={{ width: "500px", margin: "auto" }}>
            <label>ID: </label>
            <input
              type="number"
              className="form-control"
              ref={this.cajaNumero}
            ></input>
            <br />
            <label>Nombre: </label>
            <input
              type="text"
              className="form-control"
              ref={this.cajaNombre}
            ></input>
            <br />
            <label>Localidad: </label>
            <input
              type="text"
              className="form-control"
              ref={this.cajaLocalidad}
            ></input>
            <br />
            <button
              className="btn btn-outline-success"
              onClick={this.insertDepartamento}
            >
              Crear
            </button>
          </form>
        </div>
      );
    }
  }
}
