const Card = require('../data/models/card');

class CardService{
    async getCards(){
        var cards = await Card.findAll();
        return cards;
    }

    async insertCards(description,typeCard,themeId){
        var newTheme = await Card.build({Description: description, TypeCard: typeCard, Theme_ID: themeId });
        return newTheme.save(); 
    }
}
module.exports = new CardService();