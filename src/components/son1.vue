<template>
    <div class="son1">
        son1
        <div @click="returnTop">点击到锚点</div @click="returnTop"> 
        <div class="wrap">
                
        </div>        
        <div>
            <div id="a123">锚点</div>
        </div>
    </div>
</template>

<script>
export default {
    created() {
        console.log(this.$route.query)
    },
    methods: {
        returnTop:function(){
            document.querySelector("#a123").scrollIntoView(true);
        }
    }
}
</script>

<style>
    .wrap{
        height: 2000px;
        background-color: aqua;
    }
    #a123{
       height: 2000px; 
    }
</style>

