

const express = require("express");
const Aluno_Controller = require("../controllers/aluno_controller");

const router = express.Router();

let aluno_C = new Aluno_Controller();
router.get("/", aluno_C.listar_home);

module.exports = router;