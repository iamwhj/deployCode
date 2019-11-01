<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
 
};
</script>

<style lang="scss">
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
.btn1{
  border-radius: 30px;
}
.active:hover{
  color: red;
  cursor: pointer;
}
</style>
