const Game = require('../data/models/game');

class GameService {

    async createAGame(codeGame, nombrePlayer, themeID) {
        var game = { CodeGame: codeGame, NombrePlayer: nombrePlayer, Theme_ID: themeID };
        game = Game.create(game);
        return game;
    }

    async getAGame(codeGame) {
        var game = await Game.findAll({ where: { codeGame } });
        return game;
    }
}
module.exports = new GameService();