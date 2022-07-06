<script>
// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import Img from './components/Img.vue'
import SurfSpots from './components/SurfSpots.vue'
import Map from './components/Map.vue'
import CoffeeCafe from './components/CoffeeCafe.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    Header,
    Img,
    SurfSpots,
    Map,
    CoffeeCafe
  },
  data() {
    return {
      imageAlt: 'Surf Mexico',
      name: 'Hi, my name is Vadim',
      imageClass: 'imgSize',
    }
  }
}
</script>



<template>
  <Header/>
  <img :alt="imageAlt" src="./assets/logo.png" :class="imageClass" id="Home">
  <div class="main-container" style="text-align:left">
    
    <div>
      <h2>Hi! My name is Vadim :)</h2>
      This is an easy site about Surfing at Cabo, Baja California, Mexico. Here you can get info about three main surf spots: 
      The Rocks, Costa Azul and Zippers. You can check descriptions, locations and of course the link to the forecast.
      <br><br>
      Also, as a bonus for a good beginning of the day, here you can find information about great Cafes where you can enjoy your breakfast and of course flavored invigorating coffee.
     </div>
    <div> <Img/> </div>
  </div>
  <!--<h1 :class="Myclass"> {{ name }} </h1> 
  <Img/>
  <HelloWorld msg="Welcome to Mexico Surfing site" :mex="Cifra"/> -->
  <Map/>
  <SurfSpots/>
  <CoffeeCafe/>
  
  
</template>



<style>
html {
  scroll-padding-top: 50px;
}
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: -10px;
}
.title {
  color:red;
  margin-top: 0;
  margin-bottom: 0;
  line-height: 0;
  padding-top: 0;
}
.imgSize {
  height: auto;
  width: 100px;
  margin-bottom: 0;
  margin-top: -10px;
  transform: rotate(90deg);
  padding-top: 0;
  align-items:center;
}

.main-container {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10px;
}

</style>
