<template>
    <section class="menu-section text-center mt-4">
       <div>
           <div class="red-text">CHOOSE YOU FLAVOR</div>
           <h3 class="my-2">THE BEST PIZZA MENU IN TOWN</h3>
           <div class="gray-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore libero et vel vero, minima quibusdam earum dicta repellat quo porro, dolores sapiente quam consectetur dolor laudantium commodi! Porro, magni beatae?</div>
       </div>
       <div class="row justify-content-between">
           <div class="col-2 card-pizza my-4" v-for="pizza in store.menuList" :key="pizza.id">
               <figure><img :src="pizza.imgUrl" :alt="'immagine'+pizza.name"></figure>
               <div class="brown-text mb-1">{{pizza.name}}</div>
                <div class="price mb-2">
                    <span class="red-text mx-2" :class="{'deleted':pizza.discount !== 0}">${{pizza.price}}</span>
                    <span v-if="pizza.discount !== 0" class="red-text">${{ calculatedPrice(pizza) }}</span> 
                </div>
               <div v-if="pizza.quantityInStore === 0" class="stamp sold">SOLD</div>
               <div v-if="pizza.discount !== 0" class="stamp discount">-{{pizza.discount}}%</div>
               <button class="my-btn" @click="pushPizza(pizza)">Add to cart</button>
           </div>
       </div>
   </section>
</template>

<script>
import {store} from '../../data/store';
export default{
    name:'MenuSection',
    data(){
        return{
            store,
        }
    },
    methods:{
        calculatedPrice(pizza){
            return parseFloat(pizza.price - (pizza.price * (pizza.discount / 100)).toFixed(2));
        },
        /**
         * [pushPizza]
         * aumenta la quantità nel carrello di pizza e da essa aggiorna il prezzo totale per articolo, e inserisce nell'array nella casistica in cui non sia già presente l'articolo
         * @param {Object} pizza 
         * @return {Void}
         */
        pushPizza(pizza){
            let isInTheCart = false;
            pizza.quantityInCart++;
            pizza.realPrice = this.calculatedPrice(pizza) * pizza.quantityInCart;
            if(this.store.cartList.length === 0) this.store.cartList.push(pizza);
            this.store.cartList.forEach(el => {
                if(el.id === pizza.id) isInTheCart = true;
            });
            if(!isInTheCart)this.store.cartList.push(pizza);
            console.log(this.store.cartList);
        }
    }
}
</script>

<style lang="scss" scoped>
    
</style>
