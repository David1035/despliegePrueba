const Proveedor = require('../models/Proveedor')

exports.agregarProveedor = async (req, res) => {
    try {
        let proveedor = new Proveedor (req.body)
        await proveedor.save();
        res.json(proveedor)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al agregar un proveedor')
    }
}

exports.mostrarproveedores = async (req, res) => {
    try {
        const proveedores = await Proveedor.find();
        res.json(proveedores)
    } catch (error) {
        console.log(error)
        res.status(404).send('error al mostrar el proveedor')
    }
}