import io from 'socket.io-client';

class EvenementSocket {

  socket = undefined;

  constructor() {

  }

  async initialize() {
    this.socket = io('http://35.205.199.18:3000', {
      withCredentials: true
    });
    console.log('socket initialized');
  }

  getGame(code) {
    this.socket.emit('get-game', {
      code
    });
  }

  createTurn(judgeCardId, gameId, judgeId) {
    this.socket.emit('create-turn', {
      judgeCardId,
      gameId,
      judgeId
    });
  }

  newTurn(judgeCardId, gameId, judgeId) {
    this.socket.emit('new-turn', {
      judgeCardId,
      gameId,
      judgeId
    })
  }

  playCard(carteId, playerId, gameId) {
    this.socket.emit('play-card', {
      carteId,
      playerId,
      gameId
    })
  }


}

export default new EvenementSocket();