import React from "react";

import { Button, Typography } from "@mui/material";

const Administrador = () => {
  return (
    <div>
      <Typography variant="h2">Administrador</Typography>
      <div>
        <ul>
          <li>
            <Typography variant="h5">
              <Button variant="text" href="Estudiantes">Estudiantes</Button>
            </Typography>
          </li>
          <li>
            <Typography variant="h5">
              <Button variant="text" href="Hospitales">Hospitales</Button>
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

export default Administrador;
