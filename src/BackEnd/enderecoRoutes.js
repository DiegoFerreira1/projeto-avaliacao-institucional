const express = require('express');
const router = express.Router();
const enderecoController = require('./enderecoController');

router.get('/enderecos', enderecoController.getAllEnderecos);
router.post('/enderecos', enderecoController.createEndereco);
router.put('/enderecos/:id', enderecoController.updateEndereco);
router.delete('/enderecos/:id', enderecoController.deleteEndereco);

module.exports = router;
