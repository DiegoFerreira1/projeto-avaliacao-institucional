const express = require("express");
const router = express.Router();
const avaliacaoController = require("../controllers/avaliacao");

router.get("/", avaliacaoController.getAllAvaliacoes);
router.post("/", avaliacaoController.createAvaliacao);
router.put("/:id", avaliacaoController.updateAvaliacao);
router.delete("/:id", avaliacaoController.deleteAvaliacao);

module.exports = router;
