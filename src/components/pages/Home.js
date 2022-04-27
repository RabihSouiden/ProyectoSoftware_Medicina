import * as React from "react";
import { Button, Typography, Grid,  Paper } from "@mui/material";



const Home = () => {
  return (
    <div>
      <Typography align="center" color="green" variant="h1">
          Universidad El Bosque
        </Typography>
      <Grid container component="main" sx={{ height: "100vh" }}>
        
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(http://www.unbosque.edu.co/sites/default/files/2020-02/IMG_2391%20%281%29.jpg ) ",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid
        
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          
         
        >
        
          
            <Button
              href="InicioSesionAdministrador"
              size="large"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Ingresar como Administrador
            </Button>
            <Button 
              href="InicioSesionInstitucionMedica"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Ingresar como institucion Medica
            </Button>
         
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
