<template>
  <el-carousel indicator-position="outside">
    <el-carousel-item>
      <img class="img" src="@/assets/aad.gif" />
    </el-carousel-item>
    <el-carousel-item>
      <img class="img" src="@/assets/bicycle.gif" />
    </el-carousel-item>
    <el-carousel-item>
      <img class="img" src="@/assets/slowly.gif" />
    </el-carousel-item>
    <el-carousel-item>
      <img class="img" src="@/assets/fast.gif" />
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
  .img {
    margin: 20px;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  .el-carousel__container {
    height: 500px;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>