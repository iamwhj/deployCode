<template>
  <el-container>
      <el-header style="height: 100px;line-height:100px">
        <router-link to="/first">first</router-link>
        <router-link to="/second">second</router-link>
        <router-link to="/bar">bar</router-link>
        <router-link to="/echarts">Echarts</router-link>
      </el-header>
      <el-container>
        <el-aside width="200px">Aside
          <ws1></ws1>
        </el-aside>
        <el-container>
          <el-main>
            <h1>Main</h1>
            <el-button type="primary" class="btn1" plain>探索</el-button>
            <el-button type="info" >信息</el-button>
            <el-button type="danger" circle>危险</el-button>
            <i class="el-icon-no-smoking active" >123</i>
            <el-button type="primary" icon="el-icon-edit" >编辑</el-button>
            
          </el-main>
          <el-footer>Foot</el-footer>
        </el-container>
      </el-container>
    </el-container>
</template>

<script>
import ws1 from './text'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    ws1
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
