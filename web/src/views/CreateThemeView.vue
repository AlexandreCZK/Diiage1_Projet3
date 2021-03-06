<template>
   <div class="home">
     <GoHome></GoHome>
    <div class="newTheme">
      <h2>Add a new theme</h2>
       <input id="myTheme" type="text" class="form-control" aria-label="Default">
        <button class="btn btn-info" v-on:click="addTheme">ADD</button>
        <button class="btn btn-info" v-on:click="back">Back</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import GoHome from '../compenant/GoHome';
export default {
    name: 'CreateThemeView',
    components:{
        GoHome
    },
    methods: {
        addTheme(){
           try {
             let theme = document.getElementById("myTheme").value;
             // console.log('New theme: ' ,theme);
             axios.post('http://localhost:3000/themes', {Description: theme})
                .then(function( response ){alert("Congratulation you have add a new theme : "+theme)}.bind(this));                
           } catch (error) {
              alert(error)
           }
        },
        back(){
          this.$router.push('/createGame');
        }
    }
}
</script>

<style scoped>
.name_of_game>h1{
  font-weight: bold;
  color: #2c3e50;
  font-size: xxx-large;
  color: white;
}
.name_of_game{
  background-color: lightblue;
  width: 45%;
  text-align: center;
  margin-left: 28%;
  border-radius: 10px;
}
.newTheme>h2{
    font-weight: bold;
    color: rgb(109, 198, 228);
}
.newTheme>input,button{
    margin-block-start: 2%;
}
.newTheme{
    width: 50%;
    margin-inline-start: 25%;
}
</style>

