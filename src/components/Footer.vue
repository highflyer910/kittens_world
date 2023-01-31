<template>
<footer>
<div class="p-10 flex justify-between bg-blue-400 sm:column">
<div class="w-1/2">
    <label class="block mb-2 text-lg text-blue-50 mt-2">Join the Newsletter:</label>
    <form class="flex">
    <input type="email" class="w-full border px-4 py-2 rounded focus:border-blue-600 outline-none" 
    autofocus placeholder="Your Email">
    <button class="btn bg-blue-500 border rounded text-blue-100 px-4 hover:text-blue-50">Join</button>
    </form>
</div>

<div class=" text-blue-50 flex items-center">
    Copyright &copy; Kittens 2022 
</div>

</div>
</footer>
</template>

<style scoped>
.text{
    @apply 
    text-blue-50
}

.btn{
    cursor: pointer;
}

</style>