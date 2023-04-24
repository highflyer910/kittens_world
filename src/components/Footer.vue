<template>
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
        <button type="button" class="inline-block px-6 py-2.5 bg-deep-50 text-deep-50 text-xs rounded shadow-md hover:bg-deep-100 hover:shadow-lg focus:bg-deep-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-deep-500 active:shadow-lg transition duration-150 ease-in-out">Join</button>
        </div>
    </div>
    </form>
</div>

<div class="text-center text-tasman-50 pb-7 bg-deep-50">
    Copyright © Kittens 2023
</div>


</footer>
</template>

<style scoped>
.text{
    @apply 
    text-tasman-50
}

.btn{
    cursor: pointer;
}

</style>