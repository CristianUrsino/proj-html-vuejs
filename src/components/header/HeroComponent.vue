<template>

    <div class="hero">

        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carouse">
            <div class="carousel-inner my-carousel-inner">
                <div class="carousel-item active">
                    <figure class="pizza-slice-img ">
                        <img src="../../assets/images/h3-rev-img-2.png" class="d-block w-100" alt="...">
                    </figure>
                    <figure class="written-slice-pizza-img">
                        <img src="../../assets/images/h3-rev-img-1.png" class="d-block w-100" alt="...">
                    </figure>
                </div>

                <div class="carousel-item">
                    <figure class="pizza-slice-img">
                        <img src="../../assets/images/h3-rev-img-2.png" class="d-block w-100" alt="...">
                    </figure>
                    <figure class="written-slice-pizza-img ">
                        <img src="../../assets/images/h3-rev-img-1.png" class="d-block w-100" alt="...">
                    </figure>
                </div>

                <div class="carousel-item">
                    <figure class="pizza-slice-img ">
                        <img src="../../assets/images/h3-rev-img-2.png" class="d-block w-100" alt="...">
                    </figure>
                    <figure class="written-slice-pizza-img ">
                        <img src="../../assets/images/h3-rev-img-1.png" class="d-block w-100" alt="...">
                    </figure>
                </div>
            </div>

            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

    </div>

</template>

<script>
export default{
    name: 'HeroComponent',
}
</script>

<style lang="scss" scoped>
    
</style>
