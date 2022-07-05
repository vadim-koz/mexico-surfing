<script>
export default {
  name: "Map",

};
</script>



<template>

<div class="points">
  <img src="../assets/Map.png" alt="Map" class="mapSize">
  <a href="#surf-spot-rock" style="top: 75%; left: 51%"></a>
  <a href="#surf-spot-zippers" style="top: 48%; left: 50%"></a>
  <a href="#surf-spot-costa-azul" style="top: 15%; left: 57%"></a>

</div>
</template>





<style scoped>
  .mapSize{
    width: 100%;
    /* margin-left: 10px;
    margin-right: 20px;  */
  }

  .points a {
    width: 20px;
    height: 20px;
    background-color: red;
    border-radius: 50%;
    position: absolute;
  }


  .points{
    position: relative;
  }
</style>