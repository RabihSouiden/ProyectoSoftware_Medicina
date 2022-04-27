import React from "react";
import { Button, Typography, Grid, Paper } from "@mui/material";

const InstitucionMedica = () => {
  return (
    <div>
      <Typography color='green' variant="h2" align="center">
      Institución Médica
      </Typography>
      <div>
        <Grid container component="main" sx={{ height: "100vh" }}>
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage:
                "url(https://sibcolombia.net/wp-content/uploads/2016/06/logo-ubosque.png) ",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Grid item xs={12} sm={8} md={5} component={Paper}>
            <Button
              href="InicioSesionAdministrador"
              size="large"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
             Asignar área de especialización
            </Button>
            <Button
              size="large"
              href="InicioSesionInstitucionMedica"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Llenar formulario
            </Button>
            <Button
              color="error"
              size="large"
              href="/"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
             Salir
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default InstitucionMedica;
