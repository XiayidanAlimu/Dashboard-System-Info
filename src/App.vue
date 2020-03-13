<template>
  <div id="app" class="main">
    <el-container>
      <el-container>
        <el-aside style="width: auto;">
          <side-menu ref="menu" :collapse="collapse"></side-menu>
        </el-aside>
        <el-container>
          <el-header>
            <Header :collapse="collapse" @change="change"></Header>
          </el-header>
          <el-main>
            <router-view :key="new Date().getTime()"></router-view>
          </el-main>
          <el-footer class="footer">
            <div>Future technology company - 2020-20200</div>
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import './style/index.scss';
import SideMenu from './components/menu';
import Header from './components/header.vue';

export default {
  name: 'app',
  components: {
    SideMenu,
    Header
  },
  data() {
    return {
      collapse: false
    }
  },
  methods: {
    change(type) {
      this.collapse = type === 'close';
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  height: 100%;

  .footer {
    font-size: 14px;
  }
}
</style>
