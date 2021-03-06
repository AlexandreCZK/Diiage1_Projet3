var express = require('express');
var router = express.Router();
var turnsController = require("../controllers/turnsController");

router.get('/', turnsController.getTurns);

router.get('/turnJudge=:turnJudge', turnsController.getTurnsJudge);

router.get('/turnWinner=:turnWinner', turnsController.getTurnsWinner);

router.post('/', turnsController.createNewTurn);

router.put('/:id', turnsController.modifyTurn);

module.exports = router;