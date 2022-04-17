import React from "react";
import { Button, Typography } from "@mui/material";

const Home = () => {
  return (
    <div>
      <Typography variant="h1">Universidad el bosque</Typography>
      <div>
        <ul>
          <li>
            <Typography variant="h5">
              <Button variant="text" href="InicioSesionAdministrador">Ingresar como Administrador</Button>
            </Typography>
          </li>
          <li>
            <Typography variant="h5">
              <Button variant="text" href="InicioSesionInstitucionMedica">Ingresar como institucion Medica</Button>
            </Typography>
          </li>
        </ul>
      </div>
    </div>
  );
};



export default Home
