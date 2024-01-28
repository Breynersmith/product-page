<template>
    <div class="w-[100%] overflow-hidden">
        <div class="w-[100%] desktop:w-[70%] mx-auto h-[18rem] desktop:h-[100%]">
            <div class="w-[100%] h-[100%]">
                <img 
                @click="showModal = !showModal"
                class="w-[100%] h-[100%] object-cover rounded-xl 5" :src="imgActiva" alt="">
            </div>

            <div v-if="showModal"
            @click="showModal = !showModal"
            class="w-[100%] h-[100%] absolute top-0 left-0 bg-[rgba(0,0,0,0.5)] backdrop-filter backdrop-blur-lg flex justify-center items-center z-10 ">
                <div 
                @click.stop
                class="w-[90%]  tablet:w-[50%] h-[50%] desktop-md:h-[20%] flex justify-center items-center z-[1000] ">
                    <i 
                @click="prevImg"
                class="bg-transparent cursor-pointer fa fa-angle-left  text-gray-300 text-[2rem] tablet:text-[5rem] hover:opacity-60 active:opacity-100"></i>         
                <div class=" flex justify-center items-center ">
                    <img 
                    class="rounded-2xl w-[90%] h-[90%] object-cover"
                    :src="imgActiva" :alt="imgActiva">
                </div>
                <i 
                @click="nextImg" class="bg-transparent cursor-pointer fa fa-angle-right text-gray-300 text-[2rem] tablet:text-[5rem] hover:opacity-60 active:opacity-100"></i>
                </div>
            </div>

            <div class="hidden thumbnails desktop:flex justify-between items-center w-[21.6%] gap-4 mt-4">
                <img @click="changeImage(0)" class="w-[100%] object-cover" src="/images/image-product-1.jpg" alt="">
                <img @click="changeImage(1)" class="w-[100%]  object-cover" src="/images/image-product-2.jpg" alt="">
                <img @click="changeImage(2)" class="w-[100%]  object-cover" src="/images/image-product-3.jpg">
                <img @click="changeImage(3)" class="w-[100%] object-cover" src="/images/image-product-4.jpg">
            </div>
        </div>

        <div class="flex justify-between items-center text-xs px-5 desktop:hidden">
            <button
            @click="prevImg()">
                <i class="fa fa-angle-left"></i>

            </button>
            <button
            @click="nextImg()">
                <i class="fa fa-angle-right"></i>
            </button>
        </div>

    </div>
</template>


<script setup>
import { ref, reactive } from 'vue';

const base = import.meta.env.BASE_URL + 'images'

const images = reactive([
    {
        id: 1,
        src: '/image-product-1.jpg'
    },
    {
        id: 2,
        src: '/image-product-2.jpg'
    },
    {
        id: 3,
        src: '/image-product-3.jpg'
    },
    {
        id: 4,
        src: '/image-product-4.jpg'
    }
])

const imgActiva = ref(base + images[0].src)

function changeImage(id) {
    imgActiva.value = base + images[id].src
    console.log(imgActiva.value);
}

const nextImg = () => {
  const currentIndex = images.findIndex(img => img.src === imgActiva.value);
  const nextIndex = (currentIndex + 1) % images.length;
  imgActiva.value = images[nextIndex].src;
};

const prevImg = () => {
    const currentIndex = images.findIndex(img => img.src === imgActiva.value);
    const prevIndex = (currentIndex - 1) % images.length;
    imgActiva.value = images[prevIndex].src;
}


const showModal = ref(false)

const hidingModal = (e) => {
    console.log(e.target);
}

if (showModal.value) {
    hidingModal(e)
}

</script>

<style scoped>
    button {
        margin-top: -17rem;
        width: 28px;
        height: 28px;
        background-color: white;
        border: none;
        border-radius: 50%;
        padding: 5px;
    }

    .thumbnails img {
        cursor: pointer;
        border-radius: 6px;
    }

    .thumbnails img:hover {
        opacity: 0.5;
    }

    .thumbnails img:active {
        opacity: 1;
        
    }
</style>