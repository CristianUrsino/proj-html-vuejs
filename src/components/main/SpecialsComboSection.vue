<template>
    <section class="special-combo-section container-fluid">
        <div class="row">
            <figure class="col-12 col-lg-6">
                <img src="../../assets/images/h1-img-4.jpg" alt="image sezione">
                <img class="over-img" src="../../assets/images/h1-img-7n.png" alt="logo sopra l'immagine">
            </figure>
            <div class="col-12 col-lg-6">
                <div>
                    <h2>SPECIALS*</h2>
                    <div class="gray-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, molestiae?</div>
                </div>
                <div class="d-flex gap-4 my-4" v-for="combo in store.specialsComboList" :key="combo.id">
                    <h4 class="red-text">${{combo.price}}</h4>
                    <div>
                        <h4>{{combo.name}}</h4>
                        <div class="gray-text">{{combo.description}}</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { store } from "../..//data/store";
export default{
    name: 'SpecialComboSection',
    data(){
        return{
            store,
        }
    }
}
</script>

<style lang="scss" scoped>
    
</style>
