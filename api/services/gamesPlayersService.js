const GamePlayer = require('../data/models/gamePlayer');

class GamePlayerService {

    async getGamePlayers() {
        var gamePlayers = GamePlayer.findAll();
        console.log(gamePlayers);
        return gamePlayers;
    }

    async createGamePlayer(gameId, isMaster, name, pseudo) {
        var gamePlayer = {
            Game_ID: gameId,
            IsMaster: isMaster,
            Name: name,
            Pseudo: pseudo
        }
        console.log(gamePlayer);
        gamePlayer = GamePlayer.create(gamePlayer);
        return gamePlayer;
    }

    async modifyGamePlayer(playerId, gameId, nbPoint) {
        var gamePlayer = await GamePlayer.update(
            {
                NombrePoint: nbPoint
            },
            { where: { Player_ID: playerId, Game_ID: gameId } }
        );
        gamePlayer = await GamePlayer.findAll({ where: { Player_ID: playerId, Game_ID: gameId } })
        return gamePlayer;
    }

    async insertGamePlayer(gameId, playerId, isMaster, name, pseudo, nbPoint) {
        var newTheme = await GamePlayer.build({ Game_ID: gameId, Player_ID: playerId, isMaster: isMaster, Name: name, Pseudo: pseudo, NombrePoint: nbPoint });
        return newTheme.save();
    }
}
module.exports = new GamePlayerService();