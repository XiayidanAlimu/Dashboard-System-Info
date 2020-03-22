<template>
  <div class="header">
    <div class="top-left">
      <i class="el-icon-s-unfold collapse-button" @click="open" v-if="collapse"></i>
      <i class="el-icon-s-fold collapse-button" @click="close" v-else></i>

      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">Dashbord</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/gauge' }">Gauge</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="top-right">
      <div class="block">
        <el-dropdown class="dropdown" trigger="click" @command="handleCommand">
          <span class="el-dropdown-link">
            <img class="avatar" src="@/assets/profile.jpg" />
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="about">About</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <el-dialog
      title="Dashbord SI"
      :visible.sync="dialogAbout"
      :center="false"
      >
      <div>
        <div>
          <img src="@/assets/echarts.png" width="700px"/>
          <h5>A Proof-Of-Concept (POC) for a browser-based CPU load monitoring application</h5>
        </div>
        <div></div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    collapse: Boolean // the side menu panel collapse status
  },
  data() {
    return {
      dialogAbout: false
    };
  },
  methods: {
    open() {
      this.$emit("change", "open");
    },
    close() {
      this.$emit("change", "close");
    },
    handleCommand(command) {
      if (command === 'about') {
        this.dialogAbout = true;
        // this.$message('click on item ' + command);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  .top-left {
    width: 35%;
    float: left;
    text-align: left;
  }
  .top-right {
    width: 65%;
    float: right;
    text-align: right;
    line-height: 30px;

    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 5px;
      cursor: pointer;
    }
    .dropdown {
      height: 50px;
      margin-top: 10px;
    }
  }
  .collapse-button {
    cursor: pointer;
  }
  .dialog-about {
    line-height: 30px;
  }
}
</style>