

const express = require("express");
const Serie_Controller = require("../controllers/serie_controller");

const router = express.Router();

let serie_C = new Serie_Controller();
router.get("/", serie_C.listar_view);
router.get("/cadastrar", serie_C.listar_cadastro);
router.post("/cadastrar", serie_C.cadastrar_serie);
router.post("/excluir", serie_C.excluir_serie);
router.get("/editar/:id", serie_C.listar_editar);
router.post("/editar", serie_C.editar_serie);

module.exports = router;