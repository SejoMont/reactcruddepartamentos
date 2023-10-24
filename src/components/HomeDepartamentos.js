import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";
import loading from "../assets/images/Loading.gif";
import { NavLink } from "react-router-dom";

export default class HomeDepartamentos extends Component {
  state = {
    departamentos: [],
    status: false,
  };

  loadDepartamentos = () => {
    var request = "api/departamentos";
    var url = Global.apiDepartamentos + request;

    axios.get(url).then((response) => {
      this.setState({
        departamentos: response.data,
        status: true,
      });
    });
  };

  componentDidMount = () => {
    this.loadDepartamentos();
  };

  render() {
    if (this.state.status == false) {
      return (
        <div style={{ textAlign: "center" }}>
          <img src={loading} width="50%"></img>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Home Departamentos</h1>
          {this.state.status == true && (
            <table
              className="table table-striped text-center"
              style={{ width: "70%", margin: "auto" }}
            >
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Localidad</th>
                  <th>Detalles</th>
                </tr>
              </thead>
              <tbody>
                {this.state.departamentos.map((departamento, index) => {
                  return (
                    <tr>
                      <td>{departamento.nombre}</td>
                      <td>{departamento.localidad}</td>
                      <td>
                        <NavLink
                          to={
                            "/detalles/" +
                            departamento.numero +
                            "/" +
                            departamento.nombre +
                            "/" +
                            departamento.localidad
                          }
                          className="nav-link active"
                        >
                          📄
                        </NavLink>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      );
    }
  }
}
