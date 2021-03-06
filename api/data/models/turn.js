const { Model, DataTypes } = require('sequelize');
const GamePlayer = require('./gamePlayer');
const Card = require('./card');
const Game = require('./game');

class Turn extends Model {
    static async init(sequelizeInstance) {
        super.init({
            Turn_ID: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            Winner_ID: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            WinnerCard_ID: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            JudgeCard_ID: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            Game_ID: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        },
            {
                sequelize: sequelizeInstance,
                modelName: 'Turn',
                timestamps: false
            }
        );
        GamePlayer.hasOne(Turn, { foreignKey: { name: 'Winner_ID' } });
        Card.hasOne(Turn, { foreignKey: { name: 'WinnerCard_ID' } });
        GamePlayer.hasOne(Turn, { foreignKey: { name: 'Judge_ID' } });
        Card.hasOne(Turn, { foreignKey: { name: 'JudgeCard_ID' } });
        Game.hasOne(Turn, { foreignKey: { name: 'Game_ID' } });
        await super.sync();
    }
}

module.exports = Turn;