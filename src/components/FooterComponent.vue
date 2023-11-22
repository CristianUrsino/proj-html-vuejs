<template>
    <footer class="d-flex">

        <div class="mt-5 pt-5 container-fluid">

            <div class="row justify-content-between wrap">
                <ul class="col-12 col-md-4">

                    <li class="title-list mb-3">FIND OUR RESTAURANTS</li>
                    <li class="mb-3" v-for="address in store.restaurantAddresses">
                        <ul>
                            <div><a href="#">{{address.address}}</a></div>
                            <div><a href="#">{{address.city}}, {{ address.province }} {{ address.postalCode }} </a></div>
                            <div><a href="#">({{ address.prefixTelephone }}) {{ address.telephoneNumber }}</a></div>
                        </ul>
                    </li>

                </ul>

                <div  class="col-12 col-md-4 d-flex flex-column">
                    <ul>

                        <li class="title-list mb-3">WORKING HOURS</li>
                        <li class="mb-3" v-for="day in store.workingHours" :key="day.id">
                            <ul>
                                <li class="sub-title-list">{{ day.rangeDays }}</li>
                                <li :class="{'red-text': day.workingHoursRange.includes('closed')}">{{ day.workingHoursRange }}</li>
                            </ul>
                        </li>

                    </ul>

                    <div class="d-flex follow-us pb-3">
                    <div class="sub-title-list">FOLLOW US:</div>
                    <ul class="d-flex">
                        <a v-for="icon in store.iconFooterList" :href="icon.link">
                            <i :class="icon.iconClass"></i>
                        </a>
                    </ul>
                </div>
                </div>

                <h3 class="col-12 col-md-4">
                    THE DON PEPPE CREW FIRST AND FOREMOST VALUES AN AUTHENTIC, WELL BAKED SLICE OF PIZZA.
                </h3>

            </div>

            <div class="d-flex justify-content-between created-by ">
                <div class="align-self-end pb-5"><span class="sub-title-list">created by</span> <span>boolean</span></div>
                <figure class="px-4"><img src="../assets/images/footer-bottom-img.png" alt="logo"></figure>
            </div>
            
        </div>

        <figure class="d-none d-lg-block">
            <img src="../assets/images/footer-img-1.jpg" alt="">
        </figure>

    </footer>
</template>

<script>
import {store} from '../data/store'
export default{
    name: 'FooterComponent',
    data(){
        return{
            store,
        }
    }
}
</script>

<style lang="scss" scoped>
    
</style>
