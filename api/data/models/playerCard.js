const { Model, DataTypes } = require('sequelize');
const GamePlayer = require('./gamePlayer');
const Card = require('./card');
const Game = require('./game');

class PlayerCard extends Model {
    static async init(sequelizeInstance) {
        super.init(
            {
                Player_ID: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    primaryKey: true
                },
                Card_ID: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    primaryKey: true
                },
                Game_ID: {
                    type: DataTypes.INTEGER,
                    allowNull: false
                }
            },
            {
                sequelize: sequelizeInstance,
                modelName: 'PlayerCard',
                timestamps: false
            }
        );
        GamePlayer.hasOne(PlayerCard, { foreignKey: {name: 'Player_ID'}});
        Card.hasOne(PlayerCard, { foreignKey: {name: 'Card_ID'}});
        Game.hasOne(PlayerCard, { foreignKey: {name: 'Game_ID'}});
        await super.sync();
    }
}
module.exports = PlayerCard;