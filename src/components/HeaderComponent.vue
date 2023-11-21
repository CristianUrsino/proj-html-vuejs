<template>
    <header>
        <NavComponent/>
        <HeroComponent/> 
    </header>
</template>

<script>
import NavComponent from './header/NavComponent.vue';
import HeroComponent from './header/HeroComponent.vue';
export default{
    name: 'HeaderComponent',
    components:{
        NavComponent,
        HeroComponent,
    }
}
</script>

<style lang="scss" scoped>
    
</style>
