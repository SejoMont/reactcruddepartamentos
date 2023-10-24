import React, { Component } from "react";
import axios from "axios";
import Global from "../Global";
import loading from "../assets/images/Loading.gif";
import { NavLink } from "react-router-dom";

export default class DetalleDepartamento extends Component {
  state = {
    departamento: {},
    status: false,
  };

  findDepartamento = () => {
    var request = "api/departamentos/" + this.props.iddepartamento;
    var url = Global.apiDepartamentos + request;

    axios.get(url).then((response) => {
      this.setState({
        departamento: response.data,
        status: true,
      });
    });
  };

  componentDidMount = () => {
    this.findDepartamento();
  };

  render() {
    return (
      <div>
        <h1>Detalle Departamento {this.props.iddepartamento}</h1>
        <NavLink to="/">Back to List</NavLink>
        {
          this.state.status == true && (
            <ul className="list-group">
              <li className="list-group-item"><b>ID: </b>{this.state.departamento.numero}</li>
              <li className="list-group-item"><b>Nombre: </b>{this.state.departamento.nombre}</li>
              <li className="list-group-item"><b>Localidad: </b>{this.state.departamento.localidad}</li>
            </ul>
          )
        }
      </div>
    );
  }
}
