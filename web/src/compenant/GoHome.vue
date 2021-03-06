<template>
  <div id="nav">
    <div class="name_of_game" @click="goHome">
      <h1>Blanc Manger Coco</h1>
    </div>
    <div class="logoGame">
      <img src="../assets/logo.png" alt="logo_of_game" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
  methods: {
    goHome() {
      this.$router.push("/");
    }
  }
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
.name_of_game:hover {
  cursor: pointer;
}
</style>