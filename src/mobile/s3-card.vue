<template>
  <div>
    <div class="page-cell">
      <a class="mint-cell mb-10" v-for="(item,index) in list">
        <router-link :to='"/"+modules+"/"+item.id'  class="mint-cell" >
          <!--顶部-->
          <div class="mint-cell-wrapper">
            <div class="mint-cell-title tl">
              <i class="iconfont" :class="icon"></i>
              <span class="mint-cell-text">{{item.id}}</span>
              <i class="iconfont icon-arrow-right"></i>
            </div>
            <div class="mint-cell-value" v-if="showstatus">
              <span class="color-orange">{{item.statusName}}</span>
            </div>
          </div>
          <!--图片和详细信息-->
          <div class="mint-cell-content">
            <div class="img-box" :class="{'u-4': image}">
              <img src="http://file.gongyinju.com/group1/M00/00/A8/bQYdm1q0TXeAMRteAAPpCWl-69g236.jpg" :src="item.picFilePath" alt="">
            </div>
            <ul class="content-box" :class="{'u-8': image,'u-12':!image}">
              <li>
                <p class="mint-p-list" v-for="(name,index) in modulesconfig">
                  <span>用户名称</span><span>{{item[name]}}</span>
                </p>
              </li>
            </ul>
          </div>

        </router-link>
        <!--加入购物车部分-->
        <div class="mint-cell-wrapper bottom-cell" v-if="item.showCartAction && typeof item.showCartAction === 'function' && !nobottom">
          <div class="mint-cell-title tl">
            <span class="mint-cell-text">单价：<span class="color-red fw">￥{{item.price}}</span></span>
          </div>
          <div class="mint-cell-value" >
            <span class="color-orange" @click.stop="itemClick(item)">加入购物车</span>
          </div>
        </div>
        <!--只显示金额-->
        <div class="mint-cell-wrapper bottom-cell" v-if="typeof item.showCartAction !== 'function' && !nobottom">
          <div class="mint-cell-title tl"></div>
          <div class="mint-cell-value" >
            <span class="mint-cell-text">{{pricename}}：<span class="color-red fw">￥{{item[priceattr]}}</span></span>
          </div>
        </div>
      </a>

    </div>
  </div>
</template>

<script>
  export default {
    name: "s3Card",
    props: {
      //列表数据
      list: {
        type: Array,
        default: function () {
          return []
        }
      },
      modules: {
        type: String,
        default: 'orderlist'
      },
      icon: {
        type: String,
        default:'icon-icon17'
      },
      //展示右上方状态
      showstatus:{
        type: Boolean,
        default:false
      },
      detail:{
        type: String,
        default:'detail'
      },
      //是否配置图片
      image:{
        type: Boolean,
        default:false
      },
      //配置底部金额名称
      pricename:{
        type: String,
        default:'金额'
      },
      priceattr:{
        type: String,
        default:'price'
      },
      nobottom:{
        type: Boolean,
        default:false
      }

    },
    data(){
      return{
        modulesconfig:[]
      }
    },
    created(){
      this.modulesconfig = config.modules[this.modules][this.detail];
    },
    methods: {
      itemClick(item) {
        if (item.showCartAction && typeof item.showCartAction === 'function') {
          item.showCartAction(item);
        }
      }
    },
  }
</script>

<style scoped>
  ul,li{
    list-style: none;
    padding: 0;
    margin:0;
  }
  p{
    margin: 0;
    padding: 0;
  }
  .fr{
    float: right;
  }
  .fw{
    font-weight: 600;
  }
  .tl{
    text-align: left;
  }
  .page-cell{
    font-size: 14px;
  }
  .page-cell .img-box{
    display: none;
  }
  .page-cell .content-box{
    margin: 10px 0;
  }
  .page-cell .bottom-cell{
    background-image: none;
    font-size: 13px;
  }
  .page-cell .img-box>img{
    width:108px;
    height:108px;
  }
  .mint-cell-wrapper{
    border-bottom: 1px solid #dfdfdf;
  }
  .mb-10{
    margin-bottom: 10px;
  }
  .mint-cell-value.is-link{
    margin-right: 0;
  }
  .mint-cell-content .mint-p-list{
    display: flex;
    padding: 2px 0;
    font-size: 13px;
    color: #999;
  }
  .mint-p-list span{
    flex: 2;
    text-align: left;
    padding: 0 10px;
  }
  .mint-p-list span:nth-child(2){
    text-align: right;
  }
  .color-orange{
    color: #fc9b16;
  }
  .color-red{
    color: #fb3b4e;
  }
  .u-4{
    width: 33%;
    float: left;
  }
  .u-4.img-box{
    padding-left: 10px;
    box-sizing: border-box;
    margin: 10px 0;
    display: block;
  }
  .u-8{
    width:67%;
    float: right;
  }
  .u-12{
    width: 100%;
  }
</style>
