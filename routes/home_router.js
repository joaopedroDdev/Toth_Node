
const express = require("express");
const Home_Controller = require("../controllers/home_controller");

const router = express.Router();

let home_C = new Home_Controller();
router.get("/", home_C.home);
router.get("/sobre", home_C.sobre);
router.get("/contato", home_C.contato);
router.get("/eventos", home_C.eventos);

module.exports = router;