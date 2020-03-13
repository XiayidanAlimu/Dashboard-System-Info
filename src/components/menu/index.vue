<template>
  <div>
    <el-menu
      router
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="collapse"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <template v-for="(item, index) in router">
        <el-submenu
          :index="'menu-' + index"
          :key="'menu-' + index"
          v-if="item.children && item.children.length"
        >
          <template slot="title">
            <i :class="item.meta.icon ? item.meta.icon : 'el-icon-location'"></i>
            <span>{{ item.meta.title }}</span>
          </template>
          <el-menu-item
            v-for="(menu, menuIndex) in item.children"
            :index="menu.path"
            :key="'menu' + index + '-' + menuIndex"
          >{{ menu.meta.title }}</el-menu-item>
        </el-submenu>
        
        <el-menu-item :route="{path: item.path}" :index="item.path" :key="'menu-' + index" v-else>
          <i class="el-icon-location"></i>
          <span>{{ item.meta.title }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
import router from "@/configs/router/index.js";

export default {
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      router
    };
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    handleOpen(key, keyPath) {},
    // eslint-disable-next-line no-unused-vars
    handleClose(key, keyPath) {}
  }
};
</script>

<style lang="scss" scoped>
</style>