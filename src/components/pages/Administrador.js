import React from "react";

import { Button, Typography, Grid,  Paper } from "@mui/material";

const Administrador = () => {
  return (
    <div>
      <Typography color='green' variant="h2" align="center">
        Administrador
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
                "url(http://www.unbosque.edu.co/sites/default/files/2019-05/noticia-docente-rangel.jpg ) ",
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
              href="Estudiantes"
              size="large"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
             Estudiantes
            </Button>
            <Button
              size="large"
              href="Hospitales"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
             Instutición médica
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

export default Administrador;
