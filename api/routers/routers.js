const router = require("express").Router();
const controller =  require("../controllers/studentController.js");

router.get("/", controller);

module.exports = router;