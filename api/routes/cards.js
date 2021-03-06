var express = require('express');
var router = express.Router();
var cardsController = require("../controllers/cardsController")

/* GET Card page. */
router.get('/', cardsController.getCards);
router.post('/', cardsController.createCards);

module.exports = router;