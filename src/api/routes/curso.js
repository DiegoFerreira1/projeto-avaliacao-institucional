const express = require("express");
const router = express.Router();
const cursoController = require("../controllers/curso");

router.post("/", cursoController.createCurso);
router.get("/", cursoController.getAllCursos);
router.put("/:id", cursoController.updateCurso);
router.delete("/:id", cursoController.deleteCurso);


module.exports = router;
