const { Model, DataTypes } = require('sequelize');
const Game = require('./game');

class GamePlayer extends Model {
    static async init(sequelizeInstance) {
        super.init(
            {
                Player_ID: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    primaryKey: true,
                    autoIncrement: true
                },
                Game_ID: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    primaryKey: true
                },
                IsMaster: {
                    type: DataTypes.BOOLEAN,
                    allowNull: false
                },
                Name: {
                    type: DataTypes.STRING,
                    allowNull: true
                },
                Pseudo: {
                    type: DataTypes.STRING,
                    allowNull: true
                },
                NombrePoint: {
                    type: DataTypes.INTEGER,
                    allowNull: true,
                }
            },
            {
                sequelize: sequelizeInstance,
                modelName: 'GamePlayer',
                timestamps: false
            }
        );
        Game.hasOne(GamePlayer, { foreignKey: { name: 'Game_ID' }});
        await super.sync();
    }
}
module.exports = GamePlayer;