<script>

export default {
  name: 'Img',
  
  
 
}
</script>



<template>
<meta name="viewport" content="width=device-width, initial-scale=1">
<body>
  <div class="container">
  <img src="../assets/myPhoto.jpeg" alt="Avatar" class="image">
  <div class="middle">
  <div class="text"> That's me :D </div>
  </div>
  </div>
  
</body>

</template>





<style scoped>
.container {
  position: relative;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
 
  width: 100%;
  height: 400px;
  background-size: cover;
  background-position: center;
}

.image {
  opacity: 1;
  display: block;
  width: 90%;
  height: auto;
  transition: .5s ease;
  /* backface-visibility: hidden; */
  margin-left: auto;
  margin-right: auto;

  
}

.middle {
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}

.container:hover .image {
  opacity: 0.3;
}

.container:hover .middle {
  opacity: 1;
  
}

.text {
  /* background-color: #04AA6D; */
  color: rgb(0, 0, 0);
  font-size: 16px;
  padding: 16px 32px;
}
</style>
