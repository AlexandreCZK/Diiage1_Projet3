const dbConnection = require('./data/dbConnection');

var cors = require('cors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var cardsRouter = require('./routes/cards');
var themesRouter = require('./routes/themes');
var gamePlayersRouter = require('./routes/gamePlayers')
var gamesRouter = require('./routes/games');
var turnsRouter = require('./routes/turns');
var playerTurnsRouter = require('./routes/playerTurns');
var playerCardsRouter = require('./routes/playerCards');

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/cards', cardsRouter);
app.use('/themes', themesRouter);
app.use('/gamePlayers', gamePlayersRouter);
app.use('/games', gamesRouter);
app.use('/turns', turnsRouter);
app.use('/playerTurns', playerTurnsRouter);
app.use('/playerCards', playerCardsRouter);

dbConnection.initialize();

module.exports = app;