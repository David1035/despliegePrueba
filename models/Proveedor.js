const mongoose = require('mongoose');



const ProveedorSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    contacto: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    productos: {
        type: Array,
        required: true
    }
});

module.exports = mongoose.model('Proveedor', ProveedorSchema);
