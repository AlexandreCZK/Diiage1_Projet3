<template>
  <div class="form">
    <GoHome></GoHome>
    <h1>Create a card</h1>
    <form>
      <div class="form-group">
        <label for="Type-Select">Type Card: </label>
        <select class="form-control" id="Type-Select">
          <option value="">--Please choose an option--</option>
          <option value="Black">Black</option>
          <option value="White">White</option>
        </select>
      </div>
      <div class="form-group">
        <label for="Theme-Select">Theme of Card</label>
        <select class="form-control" id="Theme-Select">
          <option value="">--Please choose an option--</option>
          <option
            v-for="t in themes"
            v-bind:value="t.Theme_ID"
            v-bind:key="t.Theme_ID"
          >
            {{ t.Description }}
          </option>
        </select>
      </div>
      <div class="form-group">
        <label for="description">Descrption</label>
        <input
          type="text"
          class="input form-control"
          id="description"
          placeholder="Exemple: It's funny to __"
        />
      </div>
    </form>
    <button class="play btn btn-primary" v-on:click="addCard">ADD</button>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import axios from "axios";
import GoHome from '../compenant/GoHome';
export default {
  name: "CreateCard",
  components:{
        GoHome
    },
  data: function () {
    return {
      themes: [],
    };
  },
  mounted() {
    axios.get("http://35.205.199.18:3000/themes").then((result) => {
      this.themes = result.data;
    });
  },
  methods: {
    addCard: function () {
      try {
        let Description = document.getElementById("description").value;
        let TypeCard = document.getElementById("Type-Select").value;
        let ThemeID = document.getElementById("Theme-Select").value;
        if (Description != "" && TypeCard != "" && ThemeID != "") {
          let card = {
            Description,
            TypeCard,
            ThemeID,
          };
          axios
            .post("http://localhost:3000/cards", card)
            .then(function (response) {
              alert(
                "Congratulation you have add a new card : " +
                  card.Description +
                  "(" +
                  card.TypeCard +
                  ")"
              );
            });
        }
        else{
          alert('Remplisez touts les champs');
        }
      } catch (error) {
        alert(error);
      }
    },
  },
};
</script>

<style scoped>
.name_of_game > h1 {
  font-weight: bold;
  color: #2c3e50;
  font-size: xxx-large;
  color: white;
}
.name_of_game {
  background-color: lightblue;
  width: 45%;
  text-align: center;
  margin-left: 28%;
  border-radius: 10px;
}
.form-group {
  display: inline-block;
  margin: 2rem;
}
.form-group > label,
h1 {
  color: lightblue;
}
.form-group > label {
  font-size: x-large;
}
</style>