<template>
    <section class="gallery-section container-fluid">
        <div class="row g-2 py-2">
            <div class="my-card col-3" v-for="img in store.galleryImgs" :key="img.id">
                <a class="over-card" :href="img.link"><img :src="img.url" alt="gallery image"></a>
                <figure class="under-card"><i class="fa-regular fa-eye"></i></figure>
            </div>
        </div>
    </section>
</template>

<script>
import { store } from "../../data/store";
export default{
    name: 'GallerySection',
    data(){
        return{
            store,
        }
    }
}
</script>

<style lang="scss" scoped>
    
</style>
