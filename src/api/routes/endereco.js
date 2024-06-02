const express = require("express");
const router = express.Router();
const enderecoController = require("../controllers/endereco");

router.post("/", enderecoController.createEndereco);
router.get("/", enderecoController.getAllEnderecos);
router.put("/:id", enderecoController.updateEndereco);
router.delete("/:id", enderecoController.deleteEndereco);

module.exports = router;
