<template>
  <div class="xiangmuanli-content">
    <div v-if="isEquipmentType === 'pc'" class="pc">

    </div>
    <div v-else class="yd">
      <!-- 顶部导航栏 -->
      <headerYd></headerYd>
      <!-- 标题 -->
      <div class="yd-pinpaiTitle">
        <p>项目案例</p>
      </div>
      <div class="yd-pinpai-content">
        <!-- 项目案例 -->
        <xmalYd></xmalYd>
      </div>

      <bottomYd></bottomYd>

      <footerYd :footerNavActive="3"></footerYd>
    </div>

  </div>
</template>

<script>
import store from '../store/index.js'
import footerYd from '../components/yd/footerYd.vue'
import headerYd from '../components/yd/headerYd.vue'
import bottomYd from '../components/yd/bottomYd.vue'
import xmalYd from '../components/yd/xmalYd.vue'
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
    xmalYd
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
    }
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
.xiangmuanli-content {
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
      margin-bottom: 20px;
    }
    .yd-pinpai-content {
      background: #fff;
      padding: 20px 20px 80px;
      .yd-pinpai-text {
        margin-top: 40px;
        >p {
          margin-top: 20px;
          font-size: 24px;
          color: #333;
          text-align: left;
          line-height: 50px;
          text-indent: 2em;
        }
      }
      .yd-pptx-image {
        width: 100%;
        margin: 20px 0;
        >img {
          width: 100%;
        }
      }
    }
  }

}

@keyframes xmalFrames {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
}
</style>
