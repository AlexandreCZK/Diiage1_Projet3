var express = require('express');
var router = express.Router();
var gamePlayersController = require("../controllers/gamesPlayersController")

router.get('/', gamePlayersController.getGamePlayers);

router.post('/', gamePlayersController.createGamePlayer);

router.put('/', gamePlayersController.modifyGamePlayer);

module.exports = router;