const express = require('express');
const app = express();

app.get('/', (req,res) =>{
    res.send ('<h1>Gestion de notas Universidad el bosque</h1>')
} )
app.get('informacion', (req,res) =>{
    res.send('<h1> bienvenido a informacion</h1>')
})

const server = app.listen(8080 , () => {
    console.log('servidor http en el puerto 8080')
});

server.on('error' , error => console.log(`Error en el servidor  ${error}` ))