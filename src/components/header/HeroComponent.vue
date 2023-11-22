<template>

    <div class="hero">

        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carouse">

            <div class="carousel-inner my-carousel-inner">
                <div v-for="(heroImgs,index) in store.heroImgsList" :key="heroImgs.id" class="carousel-item" :class="{'active' : index === 0}">
                    <figure class="pizza-slice-img">
                        <img :src="heroImgs.urlPizzaSlice" class="d-block w-100" :alt="'immagine pezzo di pizza numero: ' + index">
                    </figure>
                    <figure class="written-slice-pizza-img">
                        <img :src="heroImgs.urlWrittenSlicePizza" class="d-block w-100" :alt="'immagine background del pezzo di pizza numero: ' + index">
                    </figure>
                </div>

            </div>

            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span class="carousel-control-prev-icon slide-btn" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span class="carousel-control-next-icon slide-btn" aria-hidden="true"></span>
                <span class="visually-hidden ">Next</span>
            </button>
        </div>

    </div>

</template>

<script>
import {store} from '../../data/store'
export default{
    name: 'HeroComponent',
    data(){
        return{
            store,
        }
    },
}
</script>

<style lang="scss" scoped>
    
</style>
