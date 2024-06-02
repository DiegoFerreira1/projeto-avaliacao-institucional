const express = require("express");
const router = express.Router();
const categoriaController = require("../controllers/categoria");

router.post("/", categoriaController.createCategoria);
router.get("/", categoriaController.getAllCategorias);
router.put("/:id", categoriaController.updateCategoria);
router.delete("/:id", categoriaController.deleteCategoria);

module.exports = router;
