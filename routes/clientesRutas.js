const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteControllers');

// estas son las rutas de nuestro crud

router.post('/', clienteController.agregarClientes)
router.get('/', clienteController.mostrarClientes)
router.get('/:id', clienteController.buscarCliente)
router.put('/:id', clienteController.modificarClientes)
router.patch('/:id', clienteController.editarClientes)
router.delete('/:id', clienteController.eliminarCliente)

module.exports = router;