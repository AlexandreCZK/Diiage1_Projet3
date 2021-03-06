var express = require('express');
var router = express.Router();
var themeController = require("../controllers/themesController");

router.get('/', themeController.getThemes)

router.post('/', themeController.createThemes);

module.exports = router;