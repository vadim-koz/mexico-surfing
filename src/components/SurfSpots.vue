<script>
export default {
  name: "SurfSpots",
  data() {
    return {
      items: [
        {
          title: "THE ROCK",
          description: "The entire lineup from beginning to end is strewn with rocks, big ones. At low tide, especially, you will be dodging boils, burps and weird, sharp sections that love eating fiberglass. The wave itself is extremely fun, though not as good as neighboring Zippers. It is a right reef break that can be infected with a few difficult sections to negotiate, and it is also often a little mushy in certain parts. That said, on a strong S swell and a mid-high tide, you won't find anyone complaining out there - imagine a poor man's version of Upper Trestles and you're almost there. The proper takeoff area is pretty small - right next to the rock - so crowds become a factor pretty quick, making catching a decent wave infinitely more difficult.",
          photos: ["PhotoRocks1.jpeg", "PhotoRocks2.jpeg", "PhotoRocks.jpeg"],
          id: "rock",
          forecastUrl: "https://magicseaweed.com/The-Rock-Surf-Guide/9042/" 

        },
        {
          title: "ZIPPERS",
          description: "One of the best waves in the Cabo San Lucas region, Zippers is sufficient enough in quality that just a few good ones can make your session. A river mouth-created right, Zippers peaks up gently outside of some exposed rocks, allowing for a smooth, easy takeoff. It then quickly whizzes almost laterally along the cobblestone reef, picking up speed as it heads towards its inside section, where tubes and air sections are commonplace. The wave maintains its size all the way down the line; it's one of those waves where you can incrementally improve your turns. This all sounds dreamy except for the fact that Zippers is Cabo's most crowded wave",
          photos: ["zippers1.jpeg", "PhotoRocks.jpeg", "PhotoRocks.jpeg"],
          id: "zippers",
          forecastUrl: "https://magicseaweed.com/Zippers-Surf-Guide/9043/"

        },
        {
          title: "COSTA AZUL",
          description: 'Calafia may be named after the mythical indigenous Queen of California - immortalized by poet Garci Rodríguez de Montalvo, but it’s not what you’d call regal. A mere huddle of houses on a rocky outcrop at a bend in the Tijuana highway makes up this settlement just south of Rosarito. Yet there’s a very good reason to visit if you’re surf-crazy, and that’s to ride the right point break that runs onto the rocks. It’s an exhilarating spot, hence the popularity, and while there are a few hotels the best accommodation remains in Rosarito town.',
          photos: ["CostaAzul1.jpeg", "CostaAzul2.jpeg", "PhotoRocks.jpeg"],
          id: "costa-azul",
          forecastUrl: "https://magicseaweed.com/Costa-Azul-Surf-Guide/329/"

        },
      ],
    };
  },
  methods: {
    getImgUrl(photo) {
      return require('../assets/' +photo)
    }
  }
};
</script>



<template>
  <div class="surfspot-container">
    <h2 style="font-weight:700; font-size:36px" id="SurfSpots"> Surf Spots </h2>
    <div v-for="item in items" :key="item.title" class="">   <!-- уникальное название пишем в key  - то есть чтобы системе понять в чем различие итемов -->
      <h3 :id="'surf-spot-' + item.id">{{ item.title }}</h3>
      <div class="photo-container">
        <div class="photo-item" v-for="photo in item.photos" :key="photo" :style="{'background-image': 'url(' + getImgUrl(photo) + ')'}"></div>
        <!-- <img v-for="photo in item.photos" :src="getImgUrl(photo)" :key="photo"> -->
      </div>
      <div class="description-container">
        <p>{{ item.description }}</p>
        <a :href="item.forecastUrl" target="_blank" style="color: #859527"> Surf Forecast</a>
      </div>
    </div>
  </div>

</template>





<style scoped>
  .photo-container {
    max-height: 400px;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;
  }

  .photo-item {
    width: 100%;
    padding-bottom: 100%;
    background-size: cover;
    background-position: center;
  }

  .surfspot-container {
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    display: grid;                                      /* грид систем - сделали что 1 строка */
    grid-template-columns: repeat(1, minmax(0, 1fr));     /* грид систем - сделали что 1 строка */
    gap: 4rem;                                            /* это расстояние в рэмах*/
    margin-top: 29px;
  }

  .surfspot-container img {
    margin: 0 auto;
    width: 100%;
  }

  .description-container {
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;
  }

  .description-container p {
    grid-column: span 2 / span 2;
    text-align: left;
  }


</style>