<template>
    <div class="absolute w-[16rem] top-[2rem] right-[3.5rem] p-8 flex flex-col gap-4 shadow-md shadow-slate-300 bg-white rounded-lg">
        <h2 class="font-semibold">Cart</h2>
        <hr>
        <p 
        v-if="!quantity"
        class="text-center text-xs">Your cart is emty.</p>
        <div 
        v-if="quantity">
            <div class="flex gap-4 justify-center items-center relative">
                <div class="w-[5rem]">
                    <img 
                    class="w-[100%] object-cover"
                    :src="srcImg" :alt="product">
                </div>
                <div class="w-[100%]">
                    <h2 class="text-[.8rem]">{{product}}</h2>
                <p class="text-[.8rem] font-bold">{{quantity}} x ${{price}}</p>
                <h2 class="text-[.9rem] font-bold">total:  {{ totalFormated }} </h2>
                </div>
                <div class="w-[1rem]   absolute -right-3 bottom-2">
                    <i 
                    @click="trash"
                    class=" text-[1.5rem] fa fa-trash hover:opacity-60 active:opacity-100 cursor-pointer"></i>
                </div>
            </div>
            <div>
                <button class="w-full rounded-md px-4 py-2 bg-[#d26b27] text-white  mt-5 hover:opacity-70 active:opacity-100">Checkout</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore()

const product = computed(() => store.state.product)
const quantity = computed(() => store.state.quantity)
const srcImg = computed(() => store.state.srcImg)
const price = computed(() => store.state.price)
const total = computed(() => store.getters.total)

const totalFormated = computed(() => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(total.value))


const trash = () => {
    store.state.quantity = 0
}






</script>