var express = require('express');
var turnsService = require('../services/turnsService');
var socketApi = require('../socket');

class TurnController {
    constructor() {

        socketApi.io.on('connection', (function(socket) {  
            socket.on('create-turn', (data)=> this.createTurn(socket,data));
            socket.on('new-turn', (data)=>this.newTurn(socket,data));
        }).bind(this) )


    }

    async getTurns(request, response) {
        try {
            var turns = await turnsService.getTurns();
            return response.status(200).send(turns);
        } catch (error) {
            return response.status(500).send(turns);
        }
    }

    async getTurnsJudge(request, response) {
        try {
            var turns = await turnsService.getTurnsJudge(request.params.turnJudge);
            if (turns != null) {
                return response.status(200).send(turns);
            } else {
                return response.status(404).send({message: 'this turn does not exist'});
            }
        } catch (error) {
            return response.status(500).send(error.errors);
        }
    }

    async getTurnsWinner(request, response) {
        try {
            var turns = await turnsService.getTurnsWinner(request.params.turnWinner);
            if (turns != null) {
                return response.status(200).send(turns);
            } else {
                return response.status(404).send({message: 'this turn does not exist'});
            }
        } catch (error) {
            return response.status(500).send(error.errors);
        }
    }

    async createNewTurn(request, response) {
        var judgeCardId = request.body.JudgeCard_ID;
        var gameId = request.body.Game_ID;
        var judgeId = request.body.Judge_ID;
        try {
            var newTurn = await turnsService.newTurn(judgeCardId, gameId, judgeId);
            return response.status(201).send(newTurn);
        } catch (error) {
            if (error.errors[0].validatorKey == 'not_unique') {
                return response.status(409).send(error.errors);
            }
            else {
                return response.status(404).send(error.errors);
            }
        }
    }

    async modifyTurn(request, response) {
        var id = request.params.id;
        var winnerId = request.body.Winner_ID;
        var winnerCardId = request.body.WinnerCard_ID;
        try {
            var turn = await turnsService.modifyTurn(id, winnerId, winnerCardId);
            return response.status(200).send(turn);
        } catch (error) {
            return response.status(500).send(error.errors);
        }
    }
    
    async  createTurn(socket,data) {
        var room = Object.keys(socket.rooms).filter(room => room != socket.id);
        var game = room[0]; //rejoint une room (game)

        
        console.log(data);
    }

    async  newTurn(socket,data) {
        var room = Object.keys(socket.rooms).filter(room => room != socket.id);
        var game = room[0]; //rejoint une room (game)

        socket.to(game).emit('create-turn', {
            socketId: socket.id,
            game: data.game
        });
        console.log(data);
    }
}

module.exports = new TurnController();