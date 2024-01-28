<template>
<div class="flex justify-between items-center px-5 py-2 desktop:mb-16  overflow-hidden border-b-2 border-gray-100">
    <div class="flex justify-between items-center gap-6  mr-8">
        <i @click="openMenu" class="cursor-pointer fa fa-bars desktop:hidden font-bold text-2xl"></i>
        <h1 class="titulo font-bold text-2xl">sneakers</h1>
        <nav :class="open ? 'flex' : 'hidden desktop:flex'">
            

            <ul class="flex flex-col absolute desktop:relative bg-white top-0 left-0 w-[40%] justify-center desktop:justify-between gap-10 items-center  h-full desktop:h-auto desktop:flex-row  desktop:gap-6 z-10 desktop:pt-2">
                <button @click="open = false" class="absolute top-2 right-3">
                    <i class="fa fa-times desktop:hidden"></i>
                </button>
                <li v-for="link in dataLinks">
                    <a :href="link.href" 
                    @click="handleActive(link.index)"
                    :class="classActive == link.index ? 'active' : ''"
                    class="cursor-pointer text-gray-500">{{link.name}}</a>
                </li>
                
            </ul>
        </nav>

    </div>

    <div class="flex justify-between items-center gap-6 ">
        <button @click="showCart" class="relative">
            <i 
            v-if="quantity"
            class="fa-solid fa-circle text-red-500 text-[.6rem] absolute -top-1 -right-1"></i>
            <img src="/images/icon-cart.svg" alt="icon cart" title="icon cart">
        </button>
        <button class="rounded-full w-[30px] h-[30px]">
            <img src="/images/image-avatar.png" alt="image avatar" title="image avatar">
        </button>
    </div>

    <CartComponent 
    v-if="cart" 
    :cart="cart"/>
</div>
</template>

<script setup>
import CartComponent from './CartComponent.vue';

import { ref,computed,  reactive } from 'vue';
import { useStore } from 'vuex';

const store = useStore()

const quantity = computed(() => store.state.quantity)

const dataLinks = reactive([
    {
        index: 0,
        name: 'Collections',
        url: '#'
    },
    {
        index: 1,
        name: 'Men',
        url: '#'
    },
    {
        index: 2,
        name: 'Women',
        url: '#'
    },
    {
        index: 3,
        name: 'About',
        url: '#'
    },
    {
        index: 4,
        name: 'Contact',
        url: '#'
    }
])



const classActive = ref(-1)
const handleActive = (index) => {
    classActive.value = index
    console.log(index);
} 


const open = ref(false)

const openMenu = () => {
    open.value = !open.value
    console.log(open.value);
}


const ventana = window
const ancho = reactive({
    ancho: window.innerWidth
})


const cart = ref(false)
const showCart = () => {
    cart.value = !cart.value
}
ventana.addEventListener('resize', () => {
    ancho.ancho = window.innerWidth
})
</script>

<style scoped>
.active {
    border-bottom: 3px solid #d26b27;
    padding-bottom: 10px;
    border-radius: 3px;
}
</style>
