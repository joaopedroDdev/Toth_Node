

const express = require("express");
const Ano_letivo_Controller = require("../controllers/ano_letivo_controller");

const router = express.Router();

let ano_letivo_C = new Ano_letivo_Controller();
router.get("/", ano_letivo_C.listar_view);
router.get("/cadastrar", ano_letivo_C.listar_cadastro);
router.post("/cadastrar", ano_letivo_C.cadastrar_ano_letivo);
router.post("/excluir", ano_letivo_C.excluir_ano_letivo);
router.get("/editar/:id", ano_letivo_C.listar_editar);
router.post("/editar", ano_letivo_C.editar_ano_letivo);

module.exports = router;