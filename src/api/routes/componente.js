const express = require("express");
const router = express.Router();
const componenteController = require("../controllers/componente");

router.post("/", componenteController.createComponente);
router.get("/", componenteController.getAllComponentes);
router.put("/:id", componenteController.updateComponente);
router.delete("/:id", componenteController.deleteComponente);

module.exports = router;
