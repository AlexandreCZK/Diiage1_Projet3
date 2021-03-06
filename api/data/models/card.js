const { Model, DataTypes } = require('sequelize');
const Theme = require('./theme');

class Card extends Model {
    static async init(sequelizeInstance) {
        super.init(
            {
                Card_ID: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    primaryKey: true,
                    autoIncrement: true
                },
                Description: {
                    type: DataTypes.STRING,
                    allowNull: false
                },
                TypeCard: {
                    type: DataTypes.STRING,
                    allowNull: true
                }
            },
            {
                sequelize: sequelizeInstance,
                modelName: 'Card',
                timestamps: false
            }
        );
        Theme.hasOne(Card, { foreignKey: { name: 'Theme_ID' }});
        await super.sync();
    }
}
module.exports = Card;