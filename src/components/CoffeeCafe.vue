<script>
export default {
  name: "CoffeeCafe",
data () {
  return {
    items: [
      {
        title: "Coffee Lab",
        mapUrl: "https://www.google.com/maps/place/Coffee+Lab/@23.0575603,-109.6984145,16.56z/data=!4m9!1m2!2m1!1scoffee!3m5!1s0x86af509c7381b121:0x9b7b780eeafd3522!8m2!3d23.0579458!4d-109.695439!15sCgZjb2ZmZWVaCCIGY29mZmVlkgEEY2FmZZoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VNeUxUUkhabmQzUlJBQg",
        photos: "CoffeeLab1.jpeg",
        photosOverlay: "CoffeeLab2.jpeg",

      },
      {
        title: "El Wine Shop",
        mapUrl: "https://www.google.com/maps/place/El+Wine+Shop/@23.0412702,-109.7076169,17.59z/data=!4m9!1m2!2m1!1scoffe!3m5!1s0x86af5188edbfe71d:0xba5d9a85842882c9!8m2!3d23.0420486!4d-109.7061301!15sCgZjb2ZmZWVaCCIGY29mZmVlkgELY29mZmVlX3Nob3CaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVTXlkUzAzVTFSM0VBRQ",
        photos: "ElWineShop1.jpeg",
        photosOverlay: "ElWineShop2.jpeg",
      
      },
      {
        title: "PEZGALLO Coffee",
        mapUrl: "https://www.google.com/maps/place/PEZGALLO+Coffee/@23.0625124,-109.6956489,19z/data=!4m10!1m3!2m2!1scoffee!6e5!3m5!1s0x86af518b5ddf4007:0xc27cdcb1f3501140!8m2!3d23.0625123!4d-109.6949391!15sCgZjb2ZmZWVaCCIGY29mZmVlkgERYnJ1bmNoX3Jlc3RhdXJhbnSaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVUlZkbUZMUVdKUkVBRQ",
        photos: "PEZGALLOCoffee1.jpeg",
        photosOverlay: "PEZGALLOCoffee2.jpeg",
      
      
      }, 
    ],

     
    //  hover: false,

  // function() {
  //   return {
  //     images: {
  //       out: require("/Users/vadim/Documents/Github/mexico-surfing/src/components/cafe/PEZGALLOCoffee1.jpeg"),
  //       over: require("/Users/vadim/Documents/Github/mexico-surfing/src/components/cafe/PEZGALLOCoffee2.jpeg")
  //     },
  //     currentImage: require("/Users/vadim/Documents/Github/mexico-surfing/src/components/cafe/PEZGALLOCoffee2.jpeg")
  //   };
  // },
    
      
  };
},

  // created: function() {
  //   this.currentImage = this.images.out;
  // },
  // methods: {
  //   changeImageWhen: function(state) {
  //     this.currentImage = this.images[state];
  //   }
  // },

   methods: {
    getImgUrl(photo) {
      return require('../assets/cafe/' +photo)
    }
  },

  // computed: {
  //   pictureHover (pictures) {
  //     if (this.hover == true) {
  //       return this.getImgUrl(pictures[0])
  //     } else {
  //       return this.getImgUrl(pictures[1])
  //     }
  //   }
  // }

  

};
</script>



<template>
<div>
  <div>
    <h2 style="font-weight:700; font-size:36px" id="CoffeeShops"> Coffee cafes for a Breakfast </h2>
      <div v-for="item in items" :key="item.title" class="" >
        <h3> {{item.title}}</h3>
        <div class="photo-container">

      <img class="animation" :src="getImgUrl(item.photos)"> 
      <img class="animation" :src="getImgUrl(item.photosOverlay)">

        <!-- <img :src="pictureHover(item.photos)" @mouseover="hover = true" @mouseleave="hover = false"> -->
        </div>
        <a :href="item.mapUrl" target="_blank"> Cafe on the map</a>
        </div>
    
    
         

</div>
</div> 
 
    <!-- <transition name="fade" mode="in-out">
      <div>
        <g-image
          :src="currentImage"
          :key="currentImage"
          @mouseover="changeImageWhen('over')"
          @mouseout="changeImageWhen('out')"
        ></g-image>
      </div>
    </transition> -->




</template>





<style scoped>
    .photo-container {
    margin:auto;
    }
   
   img {
    width:400px;
   }
  




  
  img.animation:hover {
  background: url("/Users/Vadim/Documents/Github/mexico-surfing/src/assets/cafe/CoffeeLab2.jpeg") no-repeat; 
  border: 1px solid rgb(0, 0, 0); 
  margin:auto; 
  width:400px;
  


}


/* .fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
} */


</style>