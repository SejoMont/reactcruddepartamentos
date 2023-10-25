import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Global from "../Global";
import axios from "axios";
import { Navigate } from "react-router-dom";

export default class EliminarDepartamento extends Component {
  state = {
    status: false,
  };

  deleteDepartamento = () => {
    var request = "api/departamentos/" + this.props.iddepartamento;
    var url = Global.apiDepartamentos + request;

    axios.delete(url).then((response) => {
      this.setState({
        status: true,
      });
    });
  };

  render() {
    return (
      <div>
        <NavLink to="/">&larr;Back to List</NavLink>
        {
            this.state.status == true && (<Navigate to="/"/>)
        }
        <div className="text-center">
          <h1 style={{color: "red"}}>Eliminar Departamento: {this.props.iddepartamento}</h1>
          <button
            className="btn btn-outline-danger"
            onClick={this.deleteDepartamento}
          >
            Borrar
          </button>
        </div>
      </div>
    );
  }
}
