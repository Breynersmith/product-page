<template>
<div  class="w-[100%] desktop-md:w-[80%] mx-auto overflow-hidden ">
    <HeaderComponent 
    :quantity="n"
    :product="name" />

    <div class="w-[100%] desktop:flex justify-between desktop-md:w-[90%] mx-auto">
        <div class="px-4 desktop:w-[50%] w-[100%]">
            <LightboxComponent />
        </div>
    
        <div class="px-4 desktop:w-[50%] ">
                
        <div class="p-3">
            <p class="uppercase tracking-widest text-[#d26b27] text-xs">sneaker company</p>
            <h1 class="font-bold text-xl pr-[40%]">Fall Limited Edition Sneakers</h1>
            <p class="text-gray-500 mt-2 text-[.9rem]">
                These low-profile sneakers are your perfect casual wear companion. Featuring a
                durable rubber outer sole, they’ll withstand everything the weather can offer.
            </p>
        </div>
    
        <div class="px-4 flex justify-between items-center">
            <p class="text-xl font-bold ">$125.00 <span class="bg-[#ECC17F] text-orange-600 font-semibold text-sm rounded-sm px-1   ml-2 opacity-80">50%</span>
            </p>
            <span class="text-gray-500 line-through">$250.00</span>
        </div>
    
        <div class="px-4 desktop:flex desktop:justify-between desktop:items-center gap-4">
            <p class="desktop:w-[40%] flex justify-between items-center px-4 bg-slate-100 py-1 rounded-md desktop:py-3 desktop:mt-5">
                <button 
                @click="lowerQuantity()"
                class="text-[#d26b27] font-bold  cursor-pointer">
                -
                </button>
                {{ quantitylocal }}
                <button 
                @click="increaseQuantity()"
                class="text-[#d26b27] font-bold cursor-pointer">
                    +
                </button>
            </p>
            <button 
            @click="addToCart"
            class="w-full rounded-md px-4 py-3 bg-[#d26b27] text-white  mt-5 hover:opacity-80 active:opacity-100">Add to cart</button>
        </div>
        </div>
    </div>

  
</div>

</template>

<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import HeaderComponent from '../components/HeaderComponent.vue';
import LightboxComponent from '../components/LightboxComponent.vue';

const store = useStore()

const quantity = computed(() => store.state.quantity)
const quantitylocal = ref(0)
const increaseQuantity = () => {
        quantitylocal.value++
    }

const lowerQuantity = () => {
    if (quantitylocal.value > 0){
        quantitylocal.value--
    } else {
        quantitylocal.value = 0
    }
}


const addToCart = () => {
    store.commit('quantity', quantitylocal.value)
    console.log(quantitylocal.value);
}

</script>

<style scoped>

</style>
