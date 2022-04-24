import React from "react";
import { Button, Typography } from "@mui/material";

const Estudiantes = () => {
  return (
    <div>
      <Typography variant="h2">Estudiantes</Typography>
      <div>
        <ul>
          <li>
            <Typography variant="h5">
              <Button variant="text">Agregar estudiante nuevo</Button>
            </Typography>
          </li>
          <li>
            <Typography variant="h5">
              <Button variant="text">Ver historial del estudiante</Button>
            </Typography>
          </li>
          <li>
            <Typography variant="h5">
              <Button variant="text">Descargar notas</Button>
            </Typography>
          </li>
          <li>
            <Typography variant="h5">
              <Button variant="outlined" href="Administrador">Regresar</Button>
            </Typography>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Estudiantes;
