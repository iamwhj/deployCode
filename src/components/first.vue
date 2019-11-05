<template>
    <div class="one">
        <router-link to="/first/son">son</router-link>
        <router-link to="/first/son1?username='abc'&password=123">son1</router-link>
        <router-link to="/first/son2">son2</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: 5
        }
    }
}
</script>

<style>
    
</style>