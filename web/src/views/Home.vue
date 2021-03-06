<template>
  <div class="home">
    <div>
      <GoHome></GoHome>
      <div>
        <button type="button" class="btn btn-info" @click="createGame">
          Create Game
        </button>
        <button type="button" class="btn btn-info" @click="joinGame">
          Join Game
        </button>
        <button type="button" class="btn btn-info" @click="createCard">
          Create Card
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import GoHome from '../compenant/GoHome';
import Socket from "../common/socket";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
  name: 'Home',
  components:{
        GoHome
    },
  mounted() {
    Socket.initialize();
  },
   methods: {
        joinGame(){
            this.$router.push('/joinAGame');
        },
        createGame(){
            this.$router.push('/createGame');
        },
        createCard(){
            this.$router.push('/createCard');
        }
    }
}
</script>
<style scoped>
.login{
    margin-block-start: 2%;
    width: 40%;
    margin-inline-start: 28%;
}
button{
margin-inline-start: 7%;
}
</style>