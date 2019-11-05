<template>
    <div>
        <h3>son2</h3>
        <div>
            <button @click="add">+</button>
            {{num}}
            <button @click="de">-</button>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        num(){
            return this.$store.state.count;
        }
    },
    methods: {
        add() {
            this.$store.commit('add')
        },
        de() {
            this.$store.dispatch("reduce")
        }
    },
    beforeRouteEnter (to, from, next) {
        console.log("组件级路由")
        next()
    },
}
</script>