import React, { Component } from "react";
import axios from "axios";
import Global from "../Global";
import loading from "../assets/images/Loading.gif";
import { NavLink } from "react-router-dom";

export default class DetalleDepartamento extends Component {
  render() {
    return (
      <div>
        <h1>Detalle Departamento {this.props.numero}</h1>
        <NavLink to="/">Back to List</NavLink>
        {
          <ul className="list-group">
            <li className="list-group-item">
              <b>ID: </b>
              {this.props.numero}
            </li>
            <li className="list-group-item">
              <b>Nombre: </b>
              {this.props.nombre}
            </li>
            <li className="list-group-item">
              <b>Localidad: </b>
              {this.props.localidad}
            </li>
          </ul>
        }
      </div>
    );
  }
}
