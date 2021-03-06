var express = require('express');
var router = express.Router();
var gamesController = require("../controllers/gamesController");

router.get('/:codeGame' ,gamesController.getAGame);

router.post('/', gamesController.createAGame);

module.exports = router;