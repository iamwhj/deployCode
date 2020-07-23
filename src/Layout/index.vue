<template>
    <div class="layout">
        <navBar></navBar>
        <router-view></router-view>
    </div>
</template>

<script>
import navBar from './topBar/navBar.vue';

export default {
    components: {
        navBar
    }
}
</script>

<style lang="scss">
    
</style>