

const express = require("express");
const Disciplina_Controller = require("../controllers/disciplina_controller");

const router = express.Router();

let disciplina_C = new Disciplina_Controller();
router.get("/", disciplina_C.listar_view);
router.get("/cadastrar", disciplina_C.listar_cadastro);
router.post("/cadastrar", disciplina_C.cadastrar_disciplina);
router.post("/excluir", disciplina_C.excluir_disciplina);
router.get("/editar/:id", disciplina_C.listar_editar);
router.post("/editar", disciplina_C.editar_disciplina);

module.exports = router;