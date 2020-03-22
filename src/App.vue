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
            <div> - Dashbord SI - </div>
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

