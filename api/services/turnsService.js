const { findAll } = require('../data/models/turn');
const Turn = require('../data/models/turn');

class TurnService {
    async getTurns() {
        var turns = await Turn.findAll();
        return turns;
    }

    async getTurnsJudge(turnJudge){
        console.log(turnJudge);
        var judge = await Turn.findOne({
            attributes: ["Judge_ID"],
            where:{
                Turn_ID: turnJudge
            }
        });
        return judge;
    }

    async getTurnsWinner(turnWinner){
        var winner = await Turn.findOne({
            attributes: ["Winner_ID"],
            where:{
                Turn_ID: turnWinner
            }
        });
        return winner;
    }

    async newTurn(judgeCardId, gameId, judgeId){
        var turn = await Turn.build({JudgeCard_ID: judgeCardId, Game_ID: gameId, Judge_ID: judgeId});
       return turn.save(); 
    }

    async modifyTurn(id, winnerId, winnerCardId) {
        var turn = await Turn.update(
            {
                Winner_ID: winnerId,
                WinnerCard_ID: winnerCardId
            },
            { where: { Turn_ID: id } }
        );
        turn = await Turn.findAll({ where: { Turn_ID: id } })
        return turn;
    }
}
module.exports = new TurnService();