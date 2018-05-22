<template>
  <div class="category">
    <span class="skin-color categoryBar"  @click="categoryVisible  = true">
      <i class="iconfont icon-fenlei2"></i>
      <div>分类</div>
    </span>

    <mt-popup v-model="categoryVisible"  position="right">
      <s3-header head-title="分类" @click.native="categoryVisible = false" class="skin-back"></s3-header>


      <mt-button @click.native="categoryVisible = false" size="large" type="primary" class="skin-back">关闭 popup</mt-button>
    </mt-popup>
  </div>
</template>

<script type="text/babel">

  /**
   * s3-category
   * @param {string} [currentName] - 展示当前选中的值
   * @param {array} [actionList] - 信息列表
   */
  export default {
    name:'s3-category',
    props: {
    },
    data() {
      return {
        categoryVisible: false
      };
    },
    computed: {

    }
  };
</script>
<style scoped>
  .category{
    display: inline-block;
  }
  .category .categoryBar>i{
    font-size: 22px;
  }
  .category .categoryBar>div{
    font-size: 14px;
  }
  .category .mint-popup{
    width: 100%;
    height: 100%;
    background: #fff;
  }
</style>
