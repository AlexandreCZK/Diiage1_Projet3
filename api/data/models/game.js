const { Model, DataTypes } = require('sequelize');
const Theme = require('./theme');

class Game extends Model {
    static async init(sequelizeInstance) {
        super.init(
            {
                Game_ID: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    primaryKey: true,
                    autoIncrement: true
                },
                CodeGame: {
                    type: DataTypes.INTEGER,
                    allowNull: false
                },
                NombrePlayer: {
                    type: DataTypes.INTEGER,
                    allowNull: true
                }
            },
            {
                sequelize: sequelizeInstance,
                modelName: 'Game',
                timestamps: false
            }
        );
        Theme.hasOne(Game, { foreignKey: { name: 'Theme_ID' }});
        await super.sync();
    }
}
module.exports = Game;