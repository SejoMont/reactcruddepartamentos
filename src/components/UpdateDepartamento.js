import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { Navigate } from "react-router-dom";

export default class UpdateDepartamento extends Component {
  cajaNumero = React.createRef();
  cajaNombre = React.createRef();
  cajaLocalidad = React.createRef();

  state = {
    departamento: {},
    statusGet: false,
    statusUpdate: false,
  };

  findDepartamento = () => {
    var request = "api/departamentos/" + this.props.iddepartamento;
    var url = Global.apiDepartamentos + request;

    axios.get(url).then((response) => {
      this.setState({
        departamento: response.data,
        statusGet: true,
      });
    });
  };

  componentDidMount = () => {
    this.findDepartamento();
  };

  updateDepartamento = (e) => {
    e.preventDefault();

    var id = parseInt(this.cajaNumero.current.value);
    var nombre = this.cajaNombre.current.value;
    var lc = this.cajaLocalidad.current.value;

    var data = {
      numero: id,
      nombre: nombre,
      localidad: lc,
    };

    var request = "api/departamentos";
    var url = Global.apiDepartamentos + request;

    axios.put(url, data).then((response) => {
      this.setState({
        statusUpdate: true,
      });
    });
  };

  render() {
    return (
      <div>
        <h1>Modificar Departamento: {this.props.iddepartamento}</h1>
        {this.state.statusUpdate == true && <Navigate to="/" />}
        <NavLink to="/">&larr; Back to List</NavLink>
        {this.state.statusGet == true && (
          <form style={{ width: "60%", margin: "auto" }}>
            <label>ID: </label>
            <input
              type="number"
              className="form-control"
              ref={this.cajaNumero}
              defaultValue={this.state.departamento.numero}
              disabled
            />
            <br />
            <label>Nombre: </label>
            <input
              type="text"
              className="form-control"
              defaultValue={this.state.departamento.nombre}
              ref={this.cajaNombre}
            />
            <br />
            <label>Localidad: </label>
            <input
              type="text"
              className="form-control"
              defaultValue={this.state.departamento.localidad}
              ref={this.cajaLocalidad}
            />
            <br />
            <button
              className="btn btn-outline-success"
              onClick={this.updateDepartamento}
            >
              Modificar
            </button>
          </form>
        )}
      </div>
    );
  }
}