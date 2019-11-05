<template>
    <div class="son">
        son
        <ul>
            <router-link tag="li" v-for="item in dataList" @click.native="getId" :to="'/first/son/'+ item.id"  :key="item.id">{{item.name}}</router-link>
        </ul>
        <div>
            <p>id: {{list.id}}</p>
            <p>name: {{list.name}}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dataList: [{id:0,name:'f'},{id:1,name:'s'}],
            id: 0,
            list: {}
        }
    },
    methods: {
        getId() {
            console.log("getId:"+ this.id)    //该函数触发比watch中$route触发得晚，导致数据更新差一步 
        },
    },
    watch: {
        $route(to, from){
            this.id = this.$route.params.id;
            this.list = this.dataList.filter(item => this.id == item.id)[0]    
        }
    },
    created(){
        this.list = this.dataList.filter(item => this.id == item.id)[0]                    
    }
}
</script>