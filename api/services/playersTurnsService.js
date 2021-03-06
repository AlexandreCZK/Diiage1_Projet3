const PlayerTurn = require('../data/models/playerTurn');

class PlayerTurnService{
    async getPlayerTurn(){
        var playersTurns = await PlayerTurn.findAll();
        return playersTurns;
    }

    async insertPlayerTurn(turnId, playerId, cardPlayedId, gameId){
        var turns = await PlayerTurn.build({Turn_ID: turnId, Player_ID: playerId, CardPlayed_ID: cardPlayedId, Game_ID: gameId});
        return turns.save();
    }
}
module.exports = new PlayerTurnService();