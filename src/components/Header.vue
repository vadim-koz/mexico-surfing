<script>

export default {
  name: 'Header',
  
  
 
}
</script>

<template>
  <div class="navbar">         
    <a href="#Home">Home</a>
    <a href="#SurfSpots">Surf Spots</a>
    <a href="#CoffeeShops">Coffee Shops</a>
  </div>
</template>


<style scoped>
.navbar {
  overflow: hidden;
  background-color: #333;
  position: fixed; /* Set the navbar to fixed position */
  top: 0; /* Position the navbar at the top of the page */
  width: 100%; /* Full width */
  z-index: 99999;
  
}

/* Links inside the navbar */
.navbar a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* Change background on mouse-over */
.navbar a:hover {
  background: #ddd;
  color: black;
}

/* Main content */
.main {
  margin-top: 30px; /* Add a top margin to avoid content overlay */
}
</style>
