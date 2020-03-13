<template>
  <!-- <div>
    <el-row>
      <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
        <el-card :body-style="{ padding: '0px' }">
          <img src="@/assets/airBalloon.jpg" class="image">
          <div style="padding: 14px;">
            <span>Style</span>
            <div class="bottom clearfix">
              <time class="time">{{ currentDate }}</time>
              <el-button type="text" class="button">Go Style One</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div> -->
  <div class="demo-image__preview">
    <el-image 
      style="width: 100px; height: 100px"
      :src="url" 
      :preview-src-list="srcList">
    </el-image>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date(),
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      srcList: [
        'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1579524614148&di=94313e86f6f712d03d295f4c8b905e66&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201706%2F09%2F20170609121142_Mk38T.jpeg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1579524546594&di=7865d9c479ae12fe7ed5cf5beff3d44c&imgtype=0&src=http%3A%2F%2Fstatic.tourhb.net%2Fupload%2Fimage%2F2017%2F02%2F22%2F40701_09055175.jpg'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.image {
  width: 100%;
  display: block;
}
</style>