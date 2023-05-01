<template>
  <Spinner v-if="loading" />
    <div v-else class="gallery">
      <div id="grid">
        <div v-for="(imageData, index) in imagesData" :key="index" class="gallery-item">
          <img :src="imageData.url" :alt="imageData.id"/>
        </div>
      </div>  
    </div>
</template>


<script>
import Spinner from "@/components/Spinner.vue";
export default {
  name: "FactsView",
  components: {
    Spinner
  },
  data() {
    return {
      loading: true,
      imagesData: [],
      api_key: "live_sBF3B0BNapHWKA2DOjQvOd1JBBLbxrXJd4bdRhNGhl1EWmNtR7kVsY4XFYtEsHKz",
      url: "https://api.thecatapi.com/v1/images/search?limit=18",
    };
  },
  mounted() {
    fetch(this.url, {
      headers: {
        "x-api-key": this.api_key,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.imagesData = data;
        this.loading = false;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>

#grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  padding: 1rem;
  margin: 2rem auto;
  max-width: 1200px;
  gap: 50px;
}

.gallery-item{
    width: 100%;
    height: 100%;
    transition: opacity 0.5s;
}

.gallery-item img{
  width: 350px;
  height: 350px;
  object-fit: cover;
}

.gallery-item:hover{
    cursor: pointer;
    opacity: 80%;
}

@media (max-width: 600px) {
  body {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
}
</style>
