<template>
  <Navbar/>
  <router-view ></router-view>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar,
}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800;900&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
  font-family: 'Rubik', sans-serif;
  color: #2c3e50;
}
#app {
  height: 100vh;
}

a {
  text-decoration: none;
}

button {
    border: none;
    padding: 15px 20px;
    border-radius: 10px;
    font-size: large;
    cursor: pointer;
}

</style>
