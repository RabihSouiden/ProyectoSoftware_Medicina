import React from "react";
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import InicioSesionAdministrador from "../Log/InicioSesionAdministrador";
import InicioSesionIntitucionMedica from "../Log/InicioSesionIntitucionMedica";
import Administrador from "../pages/Administrador";
import Estudiantes from "../pages/Estudiantes";
import Home from "../pages/Home";
import Hospitales from "../pages/Hospitales";
import InstitucionMedica from "../pages/InstitucionMedica";
const Routes = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" element={<Home />} />
          <Route path="Administrador" element={<Administrador />} />
          <Route path="Hospitales" element={<Hospitales />} />
          <Route path="Estudiantes" element={<Estudiantes />} />
          <Route path="InstitucionMedica" element={<InstitucionMedica />} />
          <Route path="InicioSesionAdministrador" element ={<InicioSesionAdministrador/>}/>
          <Route path="InicioSesionInstitucionMedica" element ={<InicioSesionIntitucionMedica/>}/>
          
          
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Routes;
