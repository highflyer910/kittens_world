<template>
<footer class="text-center">
<div class="px-6 pt-6 bg-blue-400">
<form action="">
    <div class="grid md:grid-cols-3 gird-cols-1 gap-4 flex justify-center items-center">
        <div class="md:ml-auto md:mb-6">
        <p class="text-blue-50">
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
            text-blue-50
            bg-white bg-clip-padding
            border border-solid border-blue-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-blue-100 focus:bg-white focus:border-blue-600 focus:outline-none
            "
            id="exampleFormControlInput1"
            placeholder="Email address"/>
        </div>

        <div class="md:mr-auto mb-6">
        <button type="button" class="inline-block px-6 py-2.5 bg-blue-500 text-blue-50 text-xs rounded shadow-md hover:bg-blue-600 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out">Join</button>
        </div>
    </div>
    </form>
</div>

<div class="text-center text-blue-50 pb-7 bg-blue-400">
    Copyright © Kittens 2022
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