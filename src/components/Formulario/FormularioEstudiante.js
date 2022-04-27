import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";

export default function FormPropsTextFields() {
  return (
    <div>
      <Typography align="center" variant="h2" color="green">
        Formulario
      </Typography>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            required
            id="standard-required"
            label="Documento"
            type="number"
            variant="standard"
          />

          <TextField
            required
            id="standard-required"
            label="Primer Apellido"
            variant="standard"
          />
          <TextField
            required
            id="standard-required"
            label="Segundo Apellido"
            variant="standard"
          />
          <TextField
            required
            id="standard-required"
            label="Primer Nombre"
            variant="standard"
          />
          <TextField
            required
            id="standard-required"
            label="Segundo Nombre"
            variant="standard"
          />

          <TextField
            margin="dense"
            id="standard-search"
            label="Correo Institucional"
            type="email"
            variant="standard"
          />
          <TextField
            required
            id="standard-required"
            label="Teléfono"
            type="number"
            variant="standard"
          />
          <TextField
            id="standard-search"
            label="Sitio de Práctica"
            variant="standard"
          />
        </div>
      </Box>
      <div>
      <Button
        size="large"
        type="submit"
        variant="contained"
        sx={{ mt: 2, mb: 2}}
      >
        Agregar
      </Button>
      </div>
      <div>
      <Button
        color="error"
        size="large"
        href="Estudiantes"
        type="submit"
        variant="contained"
        sx={{ mt: 2, mb: 2 }}
      >
        Regresar
      </Button>
      </div>
    </div>
  );
}
