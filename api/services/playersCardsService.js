const PlayerCard = require('../data/models/playerCard');

class PlayerCardService{
    async getPlayerCards(){
        var playersCards = await PlayerCard.findAll();
        return playersCards;
    }

    async insertPlayerCard(playerId, cardId, gameId){
        var cards = await PlayerCard.build({Player_ID: playerId, Card_ID: cardId, Game_ID: gameId});
        return cards.save();
    }
    async deletePlayerCard(playerId, cardId, gameId){        
        await PlayerCard.destroy({
            where:
            {Player_ID: playerId, Card_ID: cardId, Game_ID: gameId}
        });
    }
}
module.exports = new PlayerCardService();