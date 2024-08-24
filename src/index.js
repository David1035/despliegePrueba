const express = require('express');
const conectarDB = require('../configdb/db');
const cors = require('cors');
const path = require('path')

const app = express();
const port = process.env.PORT || 5000;

//llamamos a nuestra funcion conectarDB

conectarDB();
app.use(cors());
app.use(express.json());

//rutas del proyecto
app.use('/api/clientes', require('../routes/clientesRutas'))
app.use('/api/proveedores', require('../routes/proveedoresRutas'))

// Servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, 'public')));



// Ruta desde la web
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

/*
app.get('/', (req, res) => {
    res.send('Bienvenidos estamos conectados')
})*/

app.listen(port, () => console.log('Estamos conectados desde el servidor'))

