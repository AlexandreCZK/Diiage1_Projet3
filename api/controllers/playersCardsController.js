var express = require('express');
var playerCardsService = require('../services/playersCardsService');
var socketApi = require('../socket');

class PlayerCardController {
    constructor() {
        socketApi.io.on('connection', (function(socket) {

            socket.on('play-card', (data)=> this.playCard(socket,data));
           
        }).bind(this) )


    }

    async getPlayerCards(request, response) {
        try {
            var playerCards = await playerCardsService.getPlayerCards();
            return response.status(200).send(playerCards);
        } catch (error) {
            return response.status(500).send(error.errors);
        }

    }

    async insertPlayerCard(request, response) {
        var playerId = request.body.Player_ID;
        var cardId = request.body.Card_ID;
        var gameId = request.body.Game_ID;
        try {
            var playerCards = await playerCardsService.insertPlayerCard(playerId, cardId, gameId);
            return response.status(201).send(playerCards);
        } catch (error) {
            if (error.errors[0].validatorKey == 'not_unique') {
                return respond.status(409).send(error.errors);
            }
            else {
                return respond.status(404).send(error.errors);
            }
        }
    }

    async deletedPlayerCard(request, response) {
        var playerId = request.body.Player_ID;
        var cardId = request.body.Card_ID;
        var gameId = request.body.Game_ID;
        try {
            await playerCardsService.deletePlayerCard(playerId, cardId, gameId);
            return response.status(200).send({message: "PlayerCard delete"});
        } catch (error) {
            return response.status(500).send(error.errors);
        }
    }

    async  playCard(socket,data) {
        var room = Object.keys(socket.rooms).filter(room => room != socket.id);
        var game = room[0]; //rejoint une room (game)

        socket.to(game).emit('play-card', {
            socketId: socket.id,
            game: data.game
        });
        console.log(data);
    }
}

module.exports = new PlayerCardController();