<template>
  <div>
    <nav
      class="navbar navbar-light justify-content-between"
      style="background-color: #6495ed"
    >
      <button class="btn btn-primary" style="background-color: #da342a">
        EXIT
      </button>
      <strong>Game Code :</strong>
      <form class="form-inline">
        <button
          @click="newTurn"
          class="btn btn-primary my-2 my-sm-0"
          style="background-color: #55e15f"
          type="submit"
        >
          NEXT
        </button>
      </form>
    </nav>
    <h1>Board game</h1>
    <div id="Container1">
      <div class="e1">
        <h2>Judge of the game</h2>
        <br />
        <div class="card bCard">You are a good father even if __</div>
      </div>
      <div class="e2">
        <h2>cards played</h2>
        <br>
        <div id="Container3">
          <div class="card cardP1"></div>
          <div class="card cardP2"></div>
          <div class="card cardP3"></div>
          <div class="card cardP4"></div>
        </div>
      </div>
    </div>
    <div id="Container2">
      <div class="e3">
        <h2>Cards in your hand</h2>
        <div id="Container4">
          <div class="card cardM1" style="cursor: pointer">You sell drugs</div>
          <div class="card cardM2" style="cursor: pointer">You are santa claus</div>
          <div class="card cardM3" style="cursor: pointer">2 of QI</div>
          <div class="card cardM4" style="cursor: pointer">Macron</div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import EvenementSocket from "../common/socket";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
export default {
  name: "BoardGame",
  data: function () {
    return {};
  },
  mounted() {
    let codeGame = this.$route.params.id;
    axios.get("http://localhost:3000/games/"+codeGame).then((result) => {
      console.log(result);
      let gameId = result.data[0].Game_ID;
    });
  },
  methods: {
    createTurn() {
      EvenementSocket.createTurn(
        this.judgeCardId,
        this.gameId,
        this.judgeId,
        this.turnWinner
      );
      this.$router.push("/boardgame");
    },
    newTurn() {
      EvenementSocket.newTurn(
        this.judgeCardId,
        this.gameId,
        this.judgeId,
        this.turnWinner
      );
      this.$router.push("/boardgame");
    },
  },
};
</script>

<style scoped>
#Container1 {
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
}

.e1 {
  border: 1px solid black;
  padding-left: 10%;
  padding-right: 10%;
  padding-bottom: 3%;
}

.e2 {
  border: 1px solid black;
  flex: auto;
}

.e3 {
  border: 1px solid black;
  flex: auto;
  padding-bottom: 18%;
}
.card{
  width: 200px;
  height: 300px;
  background: white;
  font-size: 1.5rem;
  border: 1px solid black;
  border-top-left-radius: 30px 20px;
  border-top-right-radius: 30px 20px;
  border-bottom-right-radius: 30px 20px;
  border-bottom-left-radius: 30px 20px;
}

.bCard {
  width: 300px;
  height: 400px;
  background: black;
  color: white;
  font-size: 1.5rem;
  border-top-left-radius: 30px 20px;
  border-top-right-radius: 30px 20px;
  border-bottom-right-radius: 30px 20px;
  border-bottom-left-radius: 30px 20px;
}

#Container3 {
  display: flex;
  justify-content: space-around;
}

#Container4 {
  display: flex;
  justify-content: space-around;
}

.cardM1 {
  width: 200px;
  height: 300px;
  background: white;
  border: 1px solid black;
  border-top-left-radius: 30px 20px;
  border-top-right-radius: 30px 20px;
  border-bottom-right-radius: 30px 20px;
  border-bottom-left-radius: 30px 20px;
}

.cardM2 {
  width: 200px;
  height: 300px;
  background: white;
  border: 1px solid black;
  border-top-left-radius: 30px 20px;
  border-top-right-radius: 30px 20px;
  border-bottom-right-radius: 30px 20px;
  border-bottom-left-radius: 30px 20px;
}

.cardM3 {
  width: 200px;
  height: 300px;
  background: white;
  border: 1px solid black;
  border-top-left-radius: 30px 20px;
  border-top-right-radius: 30px 20px;
  border-bottom-right-radius: 30px 20px;
  border-bottom-left-radius: 30px 20px;
}

.cardM4 {
  width: 200px;
  height: 300px;
  background: white;
  border: 1px solid black;
  border-top-left-radius: 30px 20px;
  border-top-right-radius: 30px 20px;
  border-bottom-right-radius: 30px 20px;
  border-bottom-left-radius: 30px 20px;
}
</style>