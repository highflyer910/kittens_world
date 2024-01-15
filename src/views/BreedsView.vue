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
            try {
                const response = await fetch(`${this.apiUrl}/breeds`, {
                    headers: {
                        'x-api-key': this.apiKey
                    }
                });
                if (!response.ok) {
                    throw new Error(`API call failed with status: ${response.status}`);
                }
                const breeds = await response.json();
                this.breeds = breeds;
            } catch (error) {
                console.error('Failed to fetch breeds:', error);
                // Handle the error appropriately, e.g., show a user-friendly message
            }
        },
        async getBreed(id) {
            try {
                const response = await fetch(`${this.apiUrl}/images/search?breed_id=${id}`, {
                    headers: {
                        'x-api-key': this.apiKey
                    }
                });
                if (!response.ok) {
                    throw new Error(`API call failed with status: ${response.status}`);
                }
                const data = await response.json();
                if (!data.length || !data[0].breeds || !data[0].breeds.length) {
                    throw new Error('No breed data available');
                }
                const breedData = data[0].breeds[0];
                const breed = {
                    name: breedData.name,
                    image: data[0],
                    description: breedData.description,
                    country_code: breedData.country_code,
                    temperament: breedData.temperament,
                    origin: breedData.origin,
                    life_span: breedData.life_span,
                    cfa_url: breedData.cfa_url,
                    vetstreet_url: breedData.vetstreet_url,
                    vcahospitals_url: breedData.vcahospitals_url,
                    wikipedia_url: breedData.wikipedia_url
                };
                this.breed = breed;
            } catch (error) {
                console.error('Failed to fetch breed data:', error);
                // Handle the error appropriately
            }
        }
    },
    watch: {
        selectedBreed(id) {
            if (id) {
                this.getBreed(id);
            } else {
                this.breed = null;
            }
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