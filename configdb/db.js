const mongoose = require('mongoose');
require('dotenv').config();

//funcion conexion base de datos

const conectarDB = () => {
    mongoose
        .connect(process.env.DB_MONGO)
            .then(() => console.log('Estamos conectados desde mongo DB'))
            .catch((err) => console.error(err)) 
}



module.exports = conectarDB;
