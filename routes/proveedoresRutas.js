const express = require('express');
const router = express.Router();
const provedorController = require('../controllers/proveedorControllers')

router.post('/', provedorController.agregarProveedor);
router.get('/', provedorController.mostrarproveedores);


module.exports = router;