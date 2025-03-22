
const express = require("express");
const Login_Controller = require("../controllers/login_controller");

const router = express.Router();
let login_C = new Login_Controller();

router.get("/", login_C.carregar_pagina);
router.post("/", login_C.logar);

module.exports = router;