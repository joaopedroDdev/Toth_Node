const express = require("express");
const Professor_Controller = require("../controllers/professor_controller");

const router = express.Router();

let professor_C = new Professor_Controller();
router.get("/", professor_C.listar_home);

module.exports = router;