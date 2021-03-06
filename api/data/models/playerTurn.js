const { Model, DataTypes } = require('sequelize');
const Turn = require('./turn');
const GamePlayer = require('./gamePlayer');
const Card = require('./card');
const Game = require('./game');

class PlayerTurn extends Model {
    static async init(sequelizeInstance) {
        super.init(
            {
                Turn_ID: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    primaryKey: true
                },
                Player_ID: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    primaryKey: true
                },
                CardPlayed_ID: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    primaryKey: true
                },
                Game_ID: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    primaryKey: true
                }
            },
            {
                sequelize: sequelizeInstance,
                modelName: 'PlayerTurn',
                timestamps: false
            }
        );
        Turn.hasOne(PlayerTurn, { foreignKey: { name: 'Turn_ID' } });
        GamePlayer.hasOne(PlayerTurn, { foreignKey: { name: 'Player_ID' } })
        Card.hasOne(PlayerTurn, { foreignKey: { name: 'CardPlayed_ID' } });
        Turn.hasOne(PlayerTurn, { foreignKey: { name: 'Game_ID' } });
        await super.sync();
    }
}
module.exports = PlayerTurn;