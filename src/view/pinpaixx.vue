<template>
  <div class="pinpai-content">
    <div v-if="isEquipmentType === 'pc'" class="pc">

    </div>
    <div v-else class="yd">
      <!-- 顶部导航栏 -->
      <headerYd></headerYd>
      <!-- 标题 -->
      <div class="yd-pinpaiTitle">
        <p>品牌形象</p>
      </div>
      <div class="yd-pinpai-content">
        <div class="yd-pinpai-image">
          <img src="../assets/image/gywm/gywm.png" alt="">
        </div>
        <div class="yd-pinpai-text">
          <h4>品牌名片</h4>
          <p>新方略信息科技有限公司隶属于佳银集团旗下全资子公司，凭借多年房地产开发经验及家装产业链的资源整合，全心致力于房地产+全屋设计+全屋整装+C2F全产品供应链一体化新模式的探索，以前瞻视野和创新驱动聚力打造一站式全品类家装产品供应以及精装服务的升级转型。</p>
          <p>公司始终以客户需求为中心，坚持全产业链一体化多方共赢的可持续经营理念，与国内外知名品牌厂商集中采购深度合作，去中间化以及C2F全产业供应链流通环节无缝衔接，充分发挥在基础装修、主材产品、固装家具、活动家具、软装配饰、全屋电器等家居资源的规模效应和集采优势，为实现客户拎包入住提供一站式最具性价比优势的整体家装解决方案。</p>
        </div>
      </div>

      <bottomYd></bottomYd>

      <footerYd :footerNavActive="1"></footerYd>
    </div>

  </div>
</template>

<script>
import store from '../store/index.js'
import footerYd from '../components/yd/footerYd.vue'
import headerYd from '../components/yd/headerYd.vue'
import bottomYd from '../components/yd/bottomYd.vue'
import footerPc from '../components/pc/footerPc.vue'
import tjxwPc from '../components/pc/tjxwPc.vue'
export default {
  name: 'main',
  data() {
    return {
      isEquipmentType: store.state.userAgent,
      offsetFlag: false
    }
  },
  components: {
    footerYd,
    headerYd,
    bottomYd,
    footerPc,
    tjxwPc
  },
  created() {
    console.log(this.isEquipmentType)
  },
  methods: {
    // 跳转首页
    tzHome() {
      this.$router.push({
        path: '/'
      })
    },
    // 联系我们
    lxwm() {
      this.$router.push({
        path: '/lxwm'
      })
    },
    // 商务合作
    tzShwhz() {
      this.$router.push({
        path: '/shwhz'
      })
    },
    // 跳转战略合作
    tzZhlhz() {
      this.$router.push({
        path: '/zhlhz'
      })
    },
    handleScrollx() {
      if(this.isEquipmentType === 'pc') {
        let topOffset = this.$refs.bannerImage.getBoundingClientRect().top
        if (topOffset < 0) {
          this.offsetFlag = true
        } else {
          this.offsetFlag = false
        }
      }
    },
  },
  mounted() {
    if(this.isEquipmentType === 'pc') {
      window.addEventListener('scroll', this.handleScrollx, true)
    }
  },
  destroyed(){
    window.removeEventListener('scroll', this.handleScrollx, true);
  }
}
</script>

<style lang='less' scoped>
ul,
p,
h4 {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
.pinpai-content {
  // width: 1200px !important;
  margin: 0 auto !important;

  /*-----PC---------*/
  .pc {
  }

  /*-----移动---------*/
  .yd {
    padding-bottom: 120px;
    .yd-pinpaiTitle {
      width: 100%;
      height: 112px;
      line-height: 112px;
      background: #393939;
      color: #fff;
      font-size: 36px;
    }
    .yd-pinpai-content {
      background: #fff;
      padding: 0 0 80px;
      .yd-pinpai-image {
        width: 100%;
        height: 290px;
        >img {
          width: 100%;
          height: 100%;
        }
      }
      .yd-pinpai-text {
        margin-top: 40px;
        padding: 0 20px;
        >h4 {
          text-align: left;
          font-size: 36px;
          color: #333;
          font-weight: bold;
        }
        >p {
          margin-top: 20px;
          font-size: 14px; /*no*/
          color: #333;
          text-align: left;
          line-height: 50px;
          text-indent: 2em;
        }
      }
    }
  }

}
</style>
<style lang="less">
.pinpai-content .el-carousel__item img {
  width: 100%;
  height: 100%;
}
</style>
