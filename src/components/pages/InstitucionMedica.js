import React from "react";
import { Button, Typography } from "@mui/material";

const InstitucionMedica = () => {
  return (
    <div>
      <Typography variant="h2">Institucion Medica</Typography>
      <div>
        <ul>
          <li>
            <Typography variant="h5">
              <Button variant="text">Asignar area de especialisacion</Button>
            </Typography>
          </li>
          <li>
            <Typography variant="h5">
              <Button variant="text">Llenar formulario</Button>
            </Typography>
          </li>
          <li>
            <Typography variant="h5">
              <Button variant="outlined" href="/">Salir</Button>
            </Typography>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default InstitucionMedica;
