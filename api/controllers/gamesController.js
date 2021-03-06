var express = require('express');
const { createAGame } = require('../services/gamesService');
var gamesService = require('../services/gamesService');
var gamePlayersService = require('../services/gamesPlayersService');
var cardsServices = require('../services/cardsService');
var playerTurnsService = require('../services/playersTurnsService');
var socketApi = require('../socket');

class GameController {
    constructor() {
        socketApi.io.on('connection', (function (socket) {
            socket.on('get-game', async(data) => this.getGame(socket, data));
        }).bind(this));
    }

    async getAGame(request, response) {
        var codeGame = request.params.codeGame;
        try {
            var game = await gamesService.getAGame(codeGame);
            console.log(game[0] != null);
            if (game[0] != null) {
                console.log(game[0] != null);
                return response.status(200).send(game);
            } else {
                var message = 'Game with codeGame: ' + codeGame + ', does not exists';
                return response.status(404).send({ message });
            }
        } catch (error) {
            return response.status(500).send(error.errors);
        }
    }

    async createAGame(request, response) {
        var codeGame = request.body.CodeGame;
        var nombrePlayer = request.body.NombrePlayer;
        var themeId = request.body.ThemeID;
        try {
            var game = await gamesService.createAGame(codeGame, nombrePlayer, themeId);
            return response.status(201).send(game);
        } catch (error) {
            if (error.errors[0].validatorKey == 'not_unique') {
                return response.status(409).send(error.errors);
            }
            else {
                return response.status(500).send(error.errors);
            }
        }
    }

    async getGame(socket, data) {
        socket.join(data.code);
        console.log('connecter au socket', data.code);
    }
}

module.exports = new GameController();