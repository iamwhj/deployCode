<template>
  <div class="head-nav">
    <div class="xs-box">
      <span class="left">左边</span>
      <span class="mid">图标</span>
      <span class="right">右边</span>
    </div>
    <ul>
      <li>导航1</li>
      <li>导航2</li>
      <li>导航3</li>
      <li>导航4</li>
      <li>导航5</li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.head-nav {
  .xs-box {
    display: none;
    .left {
      float: left;
    }
    .right {
      float: right;
    }
  }
  ul {
    margin: 0;
    padding: 0;
    float: right;
    li {
      display: inline-block;
      margin: 0 20px;
      &:hover {
        background: red;
      }
    }
  }
}

@media screen and (max-width: 767px) {
    .head-nav{
        .xs-box{
            display: block;
        }
        ul{
            display: none;
        }
    }
}
</style>