const { Sequelize } = require('sequelize');

const Card = require('./models/card');
const Game = require('./models/game');
const GamePlayer = require('./models/gamePlayer');
const PlayerCard = require('./models/playerCard');
const PlayerTurn = require('./models/playerTurn');
const Theme = require('./models/theme');
const Turn = require('./models/turn');

class dbConnection {
    constructor() {
        this.sequelize = new Sequelize('Di1P3', 'SA', 'azerty@123',
            {
                host: 'localhost',
                dialect: 'mssql'
            });
    }

    async initialize() {
        try {
            await this.sequelize.authenticate().then(() => {
                console.log('Connecté a la base');
                Theme.init(this.sequelize); //ok
                Game.init(this.sequelize); //ok
                Card.init(this.sequelize); //ok
                GamePlayer.init(this.sequelize); //ok
                PlayerCard.init(this.sequelize); //ok
                Turn.init(this.sequelize);
                PlayerTurn.init(this.sequelize);
            })
        } catch (error) {
            console.log('Connexion impossible à la base', error);
        }
    }
}

module.exports = new dbConnection();