<template>
  <div class="form">
    <GoHome></GoHome>
    <h1 class="h1">Create the game</h1>
    <form class="create">
      <div class="form-group" id="textAl">
        <label id="username">UserName</label>
        <input
          type="text"
          class="input form-control"
          id="userName"
          placeholder="Enter your username"
        />
      </div>
      <div class="dropdown" id="container">
        <div class="form-group">
          <label for="Theme-Select">Type Theme: </label>
          <select class="form-control" id="Theme-Select">
            <option value="">--Please choose an Theme--</option>
            <option
              v-for="t in themes"
              v-bind:value="t.Theme_ID"
              v-bind:key="t.Theme_ID"
            >
              {{ t.Description }}
            </option>
          </select>
        </div>
        <button class="btn btn-primary add" type="submit" @click="newTheme">
          Add new theme
        </button>
      </div>
      <div class="code">
        <label for="codeGame">Code</label>
        <input
          type="text"
          class="input form-control"
          id="codeGame"
          placeholder="Enter the code of the game"
        />
      </div>
    </form>
    <button v-on:click="createGame" class="btn btn-primary">Play !</button>
  </div>
</template>

<script>
import EvenementSocket from "../common/socket";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import GoHome from "../compenant/GoHome";
export default {
  name: "createGame",
  components: {
    GoHome,
  },
  data: function () {
    return {
      themes: [],
    };
  },
  mounted() {
    axios.get("http://localhost:3000/themes").then((result) => {
      this.themes = result.data;
    });
  },
  methods: {
    newTheme() {
      this.$router.push("/createTheme");
    },
    createGame() {
      let CodeGame = document.getElementById("codeGame").value;
      let ThemeID = document.getElementById("Theme-Select").value;
      let game = {
        CodeGame,
        NombrePlayer: 1,
        ThemeID,
      };
      console.log("Game: ", game);
      axios.post("http://localhost:3000/games", game).then((result) => {
        EvenementSocket.getGame(CodeGame);
        let pseudo = document.getElementById("userName").value;
        let gamePlayer = {
          Game_ID: result.data.Game_ID,
          IsMaster: true,
          Name: pseudo,
          Pseudo: pseudo,
        };
        axios
          .post("http://localhost:3000/gamePlayers", gamePlayer)
          .then((result) => {
            this.$router.push({ path: `/boardgame/${CodeGame}` });
          });
      });
    },
  },
};
</script>

<style scoped>
.form > .create {
  margin-top: 5%;
}

.dropdown {
  margin-top: 2%;
}

.code {
  margin-top: 2%;
}

.play {
  margin-top: 2%;
}

.h1 {
  background-color: #6495ed;
}

.btn {
  background-color: #6495ed;
}

.add {
  background-color: #55e15f;
}
</style>
