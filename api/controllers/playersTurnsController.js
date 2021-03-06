var express = require('express');
var playerTurnsService = require('../services/playersTurnsService');

class PlayerTurnController {
    constructor() {

    }

    async getPlayerTurns(request, response) {
        try {
            var playerTurns = await playerTurnsService.getPlayerTurn();
            return response.status(200).send(playerTurns);
        } catch (error) {
            return response.status(500).send(error.errors);
        }

    }

    async insertPlayerTurn(request, response) {
        var turnId = request.body.Turn_ID;
        var playerId = request.body.Player_ID;
        var cardPlayedId = request.body.CardPlayed_ID;
        var gameId = request.body.Game_ID;
        try {
            var newCards = await playerTurnsService.insertPlayerTurn(turnId, playerId, cardPlayedId, gameId);
            return response.status(201).send(newCards);
        } catch (error) {
            if (error.errors[0].validatorKey == 'not_unique') {
                return respond.status(409).send(error.errors);
            }
            else {
                return respond.status(404).send(error.errors);
            }
        }
    }
}

module.exports = new PlayerTurnController();