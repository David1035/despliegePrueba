const Cliente = require('../models/Cliente');


//funcion agregar clientes

exports.agregarClientes = async(req, res) => {
    try{
        let clientes;
        clientes = new Cliente(req.body)
        await clientes.save();
        res.json(clientes

        )
    } catch (error) {
        console.log(error)
        res.status(500).send('Se presentó un error al agregar un cliente')
    }
}

//funcion mostrar clientes

exports.mostrarClientes = async (req, res) => {
    try{
        const clientes = await Cliente.find();
        res.json(clientes)
        
    } catch (error){
        res.status(500).send('Se presentó un error al mostrar los clientes')   
    }
}

//funcion buscar un cliente
exports.buscarCliente = async (req, res) => {
    try{
        const clientes = await Cliente.findById(req.params.id);
        if(!clientes){
            res.status(404).send({msg:'el cliente no se encuentra'});
        } else{
            res.json(clientes)
        }
        
    } catch (error){
        console.log(error)
        res.status(500).send('Se presentó un error buscar un cliente')   
    }
}

//funcion modificar un cliente
exports.modificarClientes = async (req, res) => {
    try {
        const clientes = await Cliente.findOneAndUpdate({_id: req.params.id}, req.body, {new: true});
        if(!clientes){
            res.status(404).send('cliente no encontrado');
        } else{
            res.json(clientes)
        }
    } catch (error) {
        console.log(error)
        res.status(500).send('Se presentó u problmea para modificar el cliente')
    }
}

//funcion editar utilizando PATCH un cliente

exports.editarClientes = async (req, res) => {
    try {
        const clientes = await Cliente.findByIdAndUpdate(req.params.id, req.body,{new:true});
        if(!clientes){
            return res.status(404).send('el cliente no existe')
        }
        res.json(clientes)
    } catch (error) {
        console.log(error)
        res.status(500).send('el cliente no fue editado')
    }
}

//funcion eliminar clientes

exports.eliminarCliente = async (req, res) => {
    try {
        const cliente = await Cliente.findByIdAndDelete(req.params.id);
        if (!cliente) {
            return res.status(404).send('Cliente no existe para eliminarlo');
        }
        res.json({ mensaje: 'Cliente eliminado con éxito', cliente });
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al eliminar el cliente');
    }
}
