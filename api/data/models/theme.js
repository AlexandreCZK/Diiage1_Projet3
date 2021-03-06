const { Model, DataTypes } = require('sequelize');
class Theme extends Model {
    static async init(sequelizeInstance) {
        super.init({
            Theme_ID: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            Description: {
                type: DataTypes.STRING,
                allowNull: false
            }
        }, {
            sequelize: sequelizeInstance,
            modelName: 'Theme',
            timestamps: false   
        });
        await super.sync();
    }
}
module.exports = Theme;