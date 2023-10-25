import React, { Component } from "react";
import { Routes, Route, BrowserRouter, useParams } from "react-router-dom";
import MenuDepartamentos from "./MenuDepartamentos";
import HomeDepartamentos from "./HomeDepartamentos";
import CreateDepartamento from "./CreateDepartamento";
import DetalleDepartamento from "./DetalleDepartamento";
import EliminarDepartamento from "./EliminarDepartamento";
import UpdateDepartamento from "./UpdateDepartamento";

export default class Router extends Component {
  render() {
    function DetalleDepartamentoElement() {
      var { numero } = useParams();
      var { nombre } = useParams();
      var { localidad } = useParams();
      return (
        <DetalleDepartamento
          numero={numero}
          nombre={nombre}
          localidad={localidad}
        />
      );
    }

    function EliminarDepartamentoElement() {
      var { iddepartamento } = useParams();

      return <EliminarDepartamento iddepartamento={iddepartamento} />;
    }

    function UpdateDepartamentoElement() {
      var { iddepartamento } = useParams();

      return <UpdateDepartamento iddepartamento={iddepartamento} />;
    }

    return (
      <BrowserRouter>
        <MenuDepartamentos />
        <Routes>
          <Route path="/" element={<HomeDepartamentos />}></Route>
          <Route path="/create" element={<CreateDepartamento />}></Route>
          <Route
            path="/detalles/:numero/:nombre/:localidad"
            element={<DetalleDepartamentoElement />}
          ></Route>
          <Route
            path="/eliminar/:iddepartamento"
            element={<EliminarDepartamentoElement />}
          ></Route>
          <Route
            path="/update/:iddepartamento"
            element={<UpdateDepartamentoElement />}
          ></Route>
          {/* <Route path="*" element={</>}></Route> */}
        </Routes>
      </BrowserRouter>
    );
  }
}
