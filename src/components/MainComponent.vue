<template>
    <main>
        <h3><GallerySection/></h3>
        <h3><QuotesSection/></h3>
        <h3><SpecialsComboSection/></h3>
        <h3><SloganSection/></h3>
        <h3><TeamSection/></h3>
        <h3><SponsorSection/></h3>
        <h3><MenuSection/></h3>
        <h3><EventsSection/></h3>
        <h3><ReservationSection/></h3>
    </main>
</template>

<script>

import GallerySection from './main/GallerySection.vue';
import QuotesSection from './main/QuotesSection.vue';
import SpecialsComboSection from './main/SpecialsComboSection.vue';
import SloganSection from './main/SloganSection.vue';
import TeamSection from './main/TeamSection.vue';
import SponsorSection from './main/SponsorSection.vue';
import MenuSection from './main/MenuSection.vue';
import EventsSection from './main/EventsSection.vue';
import ReservationSection from './main/ReservationSection.vue';

export default{
    name: 'MainComponent',
    components:{
        GallerySection,
        QuotesSection,
        SpecialsComboSection,
        QuotesSection,
        SloganSection,
        TeamSection,
        SponsorSection,
        MenuSection,
        EventsSection,
        ReservationSection,
    },
}
</script>

<style lang="scss" scoped>
    
</style>
