var express = require('express');
var router = express.Router();
var playerTurnsController = require("../controllers/playersTurnsController")

/* GET Card page. */
router.get('/', playerTurnsController.getPlayerTurns);
router.post('/', playerTurnsController.insertPlayerTurn);

module.exports = router;