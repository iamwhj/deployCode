<template>
    <div class="slide-wrapper" @click="showViewport">
        <img src="https://s-4zswac.byton.com/attachments/ck0d7ya4w11sj0sk70je2y5ji-homepage-kv-iaa-2x.jpg" alt="">
    </div>
</template>

<script>
export default {
    methods: {
        showViewport() {
            console.log(window.innerWidth)
        }
    }
}
</script>

<style lang="scss">
    .slide-wrapper{
        overflow-x: hidden;
        img{
            max-width: 1519px;
            width: 100%;
        }
    }
</style>