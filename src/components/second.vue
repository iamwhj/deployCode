<template>
    <div>
        <router-link to="/second/person">person</router-link>
        <router-link to="/second/person1">person1</router-link>
        <div class="demo" @click="testResult">点击事件</div>
        <div class="demo1" >点击事件2</div>
        <div class="demo3">文字溢出打点文字溢出打点文字溢出打点文字溢出打点文字溢出打点文字溢出打点</div>
        <router-view></router-view>

    </div>
</template>

<script>
import { async } from 'q';
export default {
    methods: {
        add : async () => console.log(await this.add),
        doubleAfter2seconds(num) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(2 * num)
                }, 2000);
            } )
        },
        testResult : async function() {let result = await this.doubleAfter2seconds(30); console.log(result);}
    }
}
</script>

<style lang="">
    .demo3{
        width: 100%;
        border: 1px solid red; 
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
    }
</style>