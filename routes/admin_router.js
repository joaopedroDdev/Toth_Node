

const express = require("express");
const Admin_Controller = require("../controllers/admin_controller");

const router = express.Router();

let admin_C = new Admin_Controller();
router.get("/", admin_C.listar_home);

module.exports = router;