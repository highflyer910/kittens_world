<template>
    <div class="container flex flex-col items-center justify-start">
        <h2 class="text-xl text-deep-50 font-bold mb-8">Explore Your Cat Breed</h2>
        <select v-model="selectedBreed" class="bg-white rounded px-6 py-2 mb-4">
            <option v-for="breed in breeds" :key="breed.id" :value="breed.id">{{ breed.name }}</option>
        </select>
        <div v-if="breed" class="container_result text-center">
            <h3 class="text-2xl text-deep-50 font-bold mb-4"> {{ breed.name }}</h3>
            <img :src="breed.image.url" alt="Breed Image" class="w-66 object-contain mb-4">
            <p class="mb-4 text-deep-50"> {{ breed.description }}</p>
            <ul class="text-center text-deep-50 mb-4">
                <li><strong>Country of Origin:</strong> {{ breed.origin }}</li>
                <li><strong>Personality:</strong> {{ breed.temperament }}</li>
                <li><strong>Life Span:</strong> {{ breed.life_span }}</li>
                <li>
                <div class="container_links">
                    <li><a :href="breed.cfa_url" target="_blank" class="hover:text-deep-0 text-deep-100 font-bold">| CFA</a></li>
                    <li><a :href="breed.vetstreet_url" target="_blank" class="hover:text-deep-0 text-deep-100 font-bold">| Vetstreet</a></li>
                    <li><a :href="breed.vcahospitals_url" target="_blank" class="hover:text-deep-0 text-deep-100 font-bold">| VCA Hospitals |</a></li>
                </div>
                </li>
                <li><a :href="breed.wikipedia_url" target="_blank" class="bg-deep-100 text-tasman-0 hover:bg-deep-50 px-4 py-3 rounded font-bold">Wikipedia</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
        data() {
            return {
                breeds: [],
                selectedBreed: '',
                breed: null,
                apiKey: process.env.VUE_APP_CAT_API_KEY_BREEDS,
                apiUrl: 'https://api.thecatapi.com/v1'
    };
},
        methods: {
            async getBreeds() {
                const response = await fetch(`${this.apiUrl}/breeds`, {
                    headers: {
                        'x-api-key': this.apiKey
                    }
                });
                const breeds = await response.json();
                this.breeds = breeds;
            },
            async getBreed(id) {
                const response = await fetch(`${this.apiUrl}/images/search?breed_id=${id}`, {
                    headers: {
                        'x-api-key': this.apiKey
                    }
                });
                const data = await response.json();
                const breed = {
                    name: data[0].breeds[0].name,
                    image: data[0],
                    description: data[0].breeds[0].description,
                    country_code: data[0].breeds[0].country_code,
                    temperament: data[0].breeds[0].temperament,
                    origin: data[0].breeds[0].origin,
                    life_span: data[0].breeds[0].life_span,
                    cfa_url: data[0].breeds[0].cfa_url,
                    vetstreet_url: data[0].breeds[0].vetstreet_url,
                    vcahospitals_url: data[0].breeds[0].vcahospitals_url,
                    wikipedia_url: data[0].breeds[0].wikipedia_url
                };
                this.breed = breed;
            }
        },
        watch: {
            selectedBreed(id) {
                this.getBreed(id);
            }
        },
        async created() {
            await this.getBreeds();
        }
    };
</script>

<style scoped>
  /* Simple CSS Styling */
h2 {
    font-size: 1.5rem;
    font-weight: bold;
    border-bottom: 2px solid #15286d;
    padding: 5px;
}


select{
    font-size: 16px;
}

select:focus{
    outline: none;
}

.container{
    margin-top: 50px;
    padding: 50px;
}

.container_result{
    max-width: 600px;
    margin: 0 auto;
}

.container_result img{
    display: flex;
    justify-content: center;
    border: 2px solid #15286d;
    transition: all 0.3s ease-in-out;
}

.container_result img:hover{
    opacity: 0.9;
}

ul li{
    list-style-type: none;
    margin-bottom: 20px;
}

.container_links{
    display: flex;
    justify-content: center;
    gap: 5px;
    margin-bottom: 20px;
}
</style>  