<template>
  <div>
      <el-container>
          <el-header>
              <head-nav></head-nav>
          </el-header>

          <el-main>
              <slide-map></slide-map>
          </el-main>

          <el-main>
              <detail></detail>
          </el-main>
          <el-footer>foot</el-footer>
      </el-container>
  </div>
</template>

<script>
import {headNav, slideMap, detail} from './home/components';

export default {
    components: {
        headNav,
        slideMap,
        detail
    }
};
</script>

<style lang="">

</style>