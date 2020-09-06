const express = require("express");
const router = express.Router();

const controller =require("../controllers/productosController");

router.get("/",controller.listar);
router.get("/detalle/:id", controller.detalle);

module.exports = router;