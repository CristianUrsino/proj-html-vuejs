<template>

    <nav>
        <div v-if="!searchBar" class="container d-flex justify-content-between align-items-center align-content-center">
            <button class="my-btn">ORDER ONLINE</button>

            <ul class="d-flex justify-content-between gap-3 align-items-center">
                <!-- diverso da 4 perchè è il logo -->
                <li  v-for="dropLink in store.navLinks" :key="dropLink.id" class="dropdown">
                    <div v-show="dropLink.id !== 4" class="drop">
                        <span v-if="dropLink.id===1"><img src="images/svg-0.svg" alt="mustache icon"></span>
                        {{dropLink.text}}
                    </div>

                    <div v-show="dropLink.id !== 4" class="dropdown-content">

                        <!-- se esistono link scrorre -->
                        <a v-show="dropLink.primaryLinks.length > 0" v-for="(link,i) in dropLink.primaryLinks" :key="link.id" @mouseenter="addActive(i)" @mouseleave="removeActive" :class="{'active':(currentActive ===  i || link.text === store.CurrentPageName)}" :href="link.link">
                            <span class="mustacheIcon"><img src="images/svg-0.svg" alt="mustache icon"></span>
                            <span>{{link.text}}</span>

                            <!-- se esistono sotto link scorre -->
                            <div class="nested-dropdown" v-if="link.subLinks.length > 0">
                                <!-- active è >=0 se nei link primary e <0 se nei secondary-->
                                <a v-for="(subLink,y) in link.subLinks" @mouseenter="addActive(0 - (y+1))" @mouseleave="removeActive" :class="{'active':currentActive === 0 - (y+1)}" href="#">
                                    <span class="mustacheIcon"><img src="images/svg-0.svg" alt="mustache icon"></span>
                                    <span>{{subLink.text}}</span>
                                </a>
                            </div>

                        </a>

                    </div>
                    <!-- il quarto è il logo -->
                    <figure v-if="dropLink.id === 4"><img src="../../assets/images/h5-logo-divided-header.png" alt="logo"></figure>

                </li>
            </ul>

            <ul class="d-flex justify-content-between gap-3 align-items-center clickable">
                <li class="dropdown">
                    <div class="drop">
                        <div class="cartNumber">{{ store.cartList.length }}</div>
                        <i class="fa-solid fa-motorcycle me-1"></i><span>CART</span>
                    </div>

                    <div class="dropdown-content">

                        <!-- se esistono prodotti li scrorre -->
                        <div v-if="store.cartList.length > 0" v-for="(product,index) in cartList" :key="index"><!--cambiare key=index con product.id-->
                            <!-- <span>{{product.name}}</span> -->

                        </div>

                        <!-- altrimenti visualizza che il carrello è vuoto-->
                        <div v-else>Non products in the cart</div>

                    </div>
                </li>
                <li @click="toggleSearchBar"><i class="fa-solid fa-magnifying-glass me-1 "></i>SEARCH</li>
            </ul>
        </div> 

        <div v-else class="search-bar">
            <div class="h-100 container d-flex align-items-center justify-content-between">
                <div>
                    <i class="fa-solid fa-magnifying-glass me-1 "></i>
                    <input type="text" placeholder="Search...">
                </div>
                <div @click="toggleSearchBar"><i class="fa-solid fa-xmark clickable"></i></div>
            </div>
        </div>
    </nav>

</template>


<script>

import {store} from '../../data/store'

export default{
    name: 'NavComponent',
    data(){
        return{
            currentActive : null,
            searchBar: false,
            store,
        }
    },
    methods:{

        /**
         * [addActive]
         * currentActive viene aggiornato al link/subLink corrente
         * @param {Number} i 
         */
        addActive(i){
            this.currentActive= i;
        },

        /**
         * [removeActive]
         * currentActive viene riportato a null
         */
        removeActive(){
            this.currentActive = null;
        },

        toggleSearchBar(){
            this.searchBar = !this.searchBar;
        }
    }
}
</script>

<style lang="scss" scoped>
    
</style>
