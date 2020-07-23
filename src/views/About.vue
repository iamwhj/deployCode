<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>{{author}}</h2>
    <ul>
      <li v-for="item in listArr" :key="item.age">
        name: {{item.name}}, age: {{item.age}}
      </li>
    </ul>
    <img src="../assets/img/f1.jpg" alt="" srcset="">
  </div>
</template>

<script>
export default {
  data() {
    return {
      listArr: [],
      author: ''
    }
  },
  created() {
    this.axios.post('author').then(result => {
      this.author = result.data
    })
    this.axios.post('list').then(result => {
      this.listArr = result.data;
    })
  },
}
</script>

<style lang="scss">
  
</style>