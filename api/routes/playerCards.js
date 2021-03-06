var express = require('express');
var router = express.Router();
var playerCardsController = require("../controllers/playersCardsController")

/* GET Card page. */
router.get('/', playerCardsController.getPlayerCards);
router.post('/', playerCardsController.insertPlayerCard);
router.delete('/', playerCardsController.deletedPlayerCard);

module.exports = router;