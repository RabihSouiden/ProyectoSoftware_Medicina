import React from "react";
import { Button, Typography, Grid,  Paper } from "@mui/material";

const Estudiantes = () => {
  return (
    <div>
      <Typography color='green' variant="h2" align="center">
        Estudiantes
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
              href="FormularioEstudiante"
              size="large"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Agregar estudiante nuevo
            </Button>
            <Button
              size="large"
              href=""
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Ver historial del estudiante
            </Button>
            <Button
              size="large"
              href=""
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
               Descargar notas
            </Button>
            <Button
              color="error"
              size="large"
              href="Administrador"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
             Regresar
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Estudiantes;
