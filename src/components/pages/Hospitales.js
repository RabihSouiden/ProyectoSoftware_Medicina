import React from "react";
import { Button, Typography } from "@mui/material";

const Hospitales = () => {
  return (
    <div>
      <Typography variant="h2">Hospitales</Typography>
      <div>
        <ul>
          <li>
            <Typography variant="h5">
              <Button variant="text">Agregar nueva institucion</Button>
            </Typography>
          </li>
          <li>
            <Typography variant="h5">
              <Button variant="text">
                Deshabilitar/habitar institucion nueva
              </Button>
            </Typography>
          </li>
          <li>
            <Typography variant="h5">
              <Button variant="text">
                Asiganar estudiante a una institucion
              </Button>
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

export default Hospitales;
