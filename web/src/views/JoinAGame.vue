<template>
  <div class="home">
    <GoHome></GoHome>
    <div class="container">
      <form>
        <div class="row">
          <div class="col-4">
            <label for="codeGme">Game room code :</label>
            <input
              type="text"
              class="form-control"
              id="codeGame"
              name="codeGame"
              placeholder="Enter code"
            />
          </div>
          <div class="col-4">
            <label for="username">Pseudo :</label>
            <input
              type="text"
              class="form-control"
              id="username"
              name="pseudo"
              placeholder="Enter pseudo"
            />
          </div>
        </div>
      </form>
      <button @click="joinGame" class="btn btn-primary">JOIN</button>
    </div>
  </div>
</template>


<script>
import EvenementSocket from "../common/socket";
import GoHome from '../compenant/GoHome';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
export default {
  data: function () {
    return {};
  },
  components:{
        GoHome
    },
  methods: {
    joinGame() {
      let pseudo = document.getElementById("username").value;
      let codeGame = document.getElementById("codeGame").value;
      axios.get("http://localhost:3000/games/" + codeGame).then((result) => {
        console.log(result.data);
        let gamePlayer = {
          Game_ID: result.data[0].Game_ID,
          IsMaster: false,
          Name: pseudo,
          Pseudo: pseudo,
        };
        EvenementSocket.getGame(codeGame);
        axios
          .post("http://localhost:3000/gamePlayers", gamePlayer)
          .then((result) => {
            this.$router.push({ path: `/boardgame/${codeGame}` });
          });
      });
    },
  },
};
</script>
<style scoped>
.home > .titre {
  font-weight: bold;
  color: white;
  background-color: #76b2ee;
  font-size: xxx-large;
}
</style>