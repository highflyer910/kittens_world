<template>
<div>
  
<div class="md:flex justify-between py-20 px-10">
  <div class="md:w-1/2 mb-10 md:mb-0">
    <h2 class="text-2xl text-deep-100 md:text-4xl lg:text-6xl mb-6 px-3">{{property.title}}</h2>
    <blockquote class="mb-6 px-3">
    <p>“Time spent with cats is never wasted.”</p>
      <footer><cite>– Sigmund Freud</cite></footer>
      <p class="p-6">Discover the Joy of Kittens! Our website is dedicated to all things cats, 
      with a special focus on the adorable and playful kittens. From breeds to care tips, 
      we provide the latest information to help you better understand and appreciate these 
      furry friends. Join our community of cat lovers and share your own experiences 
      and pictures of your beloved kittens. Get ready to be inspired and fall in love 
      with these cute and cuddly creatures!</p>
      <p class="p-6">Explore the fascinating world of felines with our Kittens website. 
      From their history, behavior and health, to choosing the right breed, nutrition, and grooming, 
      we've got you covered. With our comprehensive guides and expert advice, you'll be equipped to 
      provide the best care for your furry companion. Join our active community of cat lovers where 
      you can connect, share and learn with others who share your passion for these amazing animals. 
      Get ready to embark on a journey of discovery and be amazed by the joy, love, and companionship 
      that only a kitten can bring.</p>
      </blockquote>
      <router-link to="/about"><a href="#" class="px-4 py-3 text-lg bg-deep-100 rounded text-tasman-0 mr-2 hover:bg-deep-50">Learn More</a></router-link>
  </div>
  
  <div class="md:w-1/2">
    <img :src="property.imageUrl" :alt="property.imageAlt" class="w-full rounded shadow-2xl" loading="lazy">
  </div>
</div>  


<div class="md:flex text-tasman-0 px-10 py-16 bg-deep-100">
  <div class="photo mr-2 text-center mt-8">
    <router-link to="/breeds">
      <img :src="property.imageOne" :alt="property.imageAlt" class="image">
    </router-link>
    <p class="text">
      Breeds
    </p>
  </div>
  <div class="photo mr-2 text-center">
    <router-link to="/facts">
      <img :src="property.imageTwo" :alt="property.imageAlt" class="image">
    </router-link>
    <p class="text">
      Gallery
    </p>
  </div>
  <div class="photo mr-2 text-center mt-8">
    
    <router-link to="/tips">
      <img :src="property.imageThree" :alt="property.imageAlt" class="image">
    </router-link>
    <p class="text">
      Care Tips
    </p>
  </div>
</div>
</div>

<footer class="text-center">
  <div class="px-6 pt-6 bg-deep-50">
  <form action="">
      <div class="grid md:grid-cols-3 gird-cols-1 gap-4 flex justify-center items-center">
          <div class="md:ml-auto md:mb-6">
          <p class="text-tasman-50">
              Join our newsletter
          </p>
          </div>
  
          <div class="md:mb-6">
          <input
              type="text"
              class="
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-tasman-50
              bg-tasman-0 bg-clip-padding
              border border-solid border-deep-50
              rounded
              transition
              ease-in-out
              m-0
              focus:text-deep-100 focus:bg-tasman-0 focus:border-deep-50 focus:outline-none
              "
              id="exampleFormControlInput1"
              placeholder="Email address"/>
          </div>
  
          <div class="md:mr-auto mb-6">
          <button type="button" class="cursor-pointer inline-block px-6 py-2.5 bg-deep-100 text-tasman-50 text-xs rounded shadow-md hover:bg-deep-50 hover:shadow-lg focus:bg-deep-50 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-deep-100 active:shadow-lg transition duration-150 ease-in-out">Join</button>
          </div>
      </div>
      </form>
  </div>
  
  <div class="text-center text-tasman-50 pb-7 bg-deep-50">
      © Kittens 2024
  </div>
  
  
  </footer>
    
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'

export default {
  name: 'HomeView',
  components: {
    Header
  },
  data:() => ({
    property: {
      imageUrl: "https://i.pinimg.com/736x/87/85/26/8785265e88f8917e66fd1f538b5a38cf--british-longhair-cutest-animals.jpg",
      imageAlt: "A photo of a cat",
      title: "All About Kittens",
      imageOne: "https://images.unsplash.com/photo-1636014436444-f660718b02fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      imageTwo: "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      imageThree: "https://images.unsplash.com/photo-1513977055326-8ae6272d90a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      imageFour: "https://images.unsplash.com/photo-1516750105099-4b8a83e217ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    }
  })
}
</script>

<style scoped>
  .image{
    @apply 
    w-full 
    mb-4 
    rounded 
    border-solid 
    border-2 
  border-deep-50
  }


  .photo{
    transition: all .9s ease .1s;
  }

  .photo:hover{
    transform: translateY(-24px);
    cursor: pointer;
    filter:opacity(80%);
  }

  .text{
    @apply 
  text-tasman-50
    cursor-pointer
  }

  .photo{
    cursor: pointer;
  }
</style>
