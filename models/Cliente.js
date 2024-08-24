const mongoose = require('mongoose');

// El modelo que hacemos aquí, el que vamos en postman

const clienteSchema = mongoose.Schema({
    nombres:{
        type: String,
        required: true
    },
    apellidos:{
        type: String,
        required: true
    },
    documento:{
        type: Number,
        required: true
    },
    correo:{
        type: String,
        required: true
    },
    telefono:{
        type: Number,
        required: true
    },
    direccion:{
        type: String,
        required: true
    }
}, { versionKey: false })

module.exports = mongoose.model('Cliente', clienteSchema)

    