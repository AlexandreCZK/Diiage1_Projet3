var express = require('express');
var cardsService = require('../services/cardsService');
var socketApi = require('../socket');

class CardController {
    constructor() {
        socketApi.io.on('connection', function(socket) {
            //console.log(socket);
           // console.log("Un client est connecté");
        })

    }

    async getCards(request, response) {
        try {
            var cards = await cardsService.getCards();
            return response.status(200).send(cards);
        } catch (error) {
            return response.status(500).send(error);
        }

    }

    async createCards(request, response) {
        try {
            var newCards = await cardsService.insertCards(request.body.Description, request.body.TypeCard, request.body.ThemeID);
            return response.status(201).send(newCards);
        } catch (error) {
            if (error.errors[0].validatorKey == 'not_unique') {
                return response.status(409).send(error.errors);
            }
            else {
                return response.status(500).send(error.errors);
            }
        }
    }
}

module.exports = new CardController();