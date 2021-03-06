var express = require('express');
var gamePlayersService = require('../services/gamesPlayersService');

class GamePlayerController {
    constructor() {

    }
    async getGamePlayers(request, respond) {
        try {
            var gamePlayer = await gamePlayersService.getGamePlayers();
            console.log(gamePlayer);
            return respond.status(200).send(gamePlayer);
        } catch (error) {
            return respond.status(500).send();
        }
    }

    async createGamePlayer(request, respond) {
        var gameId = request.body.Game_ID;
        var isMaster = request.body.IsMaster;
        var name = request.body.Name;
        var pseudo = request.body.Pseudo;
        var nbPoint = 0;
        try {
            var gamePlayer = await gamePlayersService.createGamePlayer(gameId, isMaster, name, pseudo, nbPoint);
            return respond.status(200).send(gamePlayer);
        } catch (error) {
            if (error.errors[0].validatorKey == 'not_unique') {
                return respond.status(409).send(error.errors);
            }
            else {
                return respond.status(500).send(error.errors);
            }
        }

    }

    async modifyGamePlayer(request, respond) {
        var playerId = request.body.Player_ID;
        var gameId = request.body.Game_ID;
        var nbPoint = request.body.NbPoint;
        try {
            var gamePlayer = await gamePlayersService.modifyGamePlayer(playerId, gameId, nbPoint);
            return respond.status(200).send(gamePlayer);
        } catch (error) {
            return respond.status(500).send(error.errors);
        }
    }
}

module.exports = new GamePlayerController();