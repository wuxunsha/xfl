<template>
  <div class="zxzhx-content">
    <div v-if="isEquipmentType === 'pc'" class="pc">

    </div>
    <div v-else class="yd">
      <!-- 顶部导航栏 -->
      <headerYd></headerYd>
      <!-- 标题 -->
      <div class="yd-zxzhxTitle">
        <p>资讯中心</p>
      </div>
      <div class="yd-zxzhx-content">
        <ul>
          <li @click="ydzxDetails(1)">
            <h4>房地产营销全业态创新发展模式践行者</h4>
            <p>2018-06-18</p>
            <p>新方略信息科技有限公司隶属于佳银集团旗下全资子公司，凭借多年房地产开发经验及家装产业链的资源整合...</p>
          </li>
          <li @click="ydzxDetails(2)">
            <h4>一站式全屋整装 拎包入住 赠送价值12万品牌套餐包</h4>
            <p>2021-05-10</p>
            <p>我们不仅仅是送，新方略首创一站式厂商源头集采，更是一种全新生活方式的创享</p>
          </li>
        </ul>
        <div class="yd-pagination">
          <van-pagination
            v-model="currentPage"
            :total-items="2"
            :show-page-size="5"
            force-ellipses
          />
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
import xmalYd from '../components/yd/xmalYd.vue'
export default {
  name: 'main',
  data() {
    return {
      isEquipmentType: store.state.userAgent,
      offsetFlag: false,
      currentPage: 1
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
    },
    // 移动资讯详情
    ydzxDetails(type) {
      this.$router.push({
        path: '/ydzxDetails',
        query: {
          type: type
        }
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
.zxzhx-content {
  // width: 1200px !important;
  margin: 0 auto !important;

  /*-----PC---------*/
  .pc {
  }

  /*-----移动---------*/
  .yd {
    padding-bottom: 120px;
    .yd-zxzhxTitle {
      width: 100%;
      height: 112px;
      line-height: 112px;
      background: #393939;
      color: #fff;
      font-size: 36px;
      margin-bottom: 20px;
    }
    .yd-zxzhx-content {
      background: #fff;
      padding: 0 40px 40px;
      >ul {
        width: 100%;
        >li {
          width: 100%;
          padding: 20px 0;
          border-bottom: 4px solid #ddd;
          >h4 {
            width: 100%;
            font-size: 36px;
            color: #000;
            font-weight: bold;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
          }
          >p:nth-child(2) {
            font-size: 28px;
            color: #999;
            font-weight: normal; 
            text-align: left;
            padding: 20px 0;
          }
          >p:nth-child(3) {
            font-size: 24px;
            color: #777;
            font-weight: normal; 
            text-align: left;
            line-height: 40px;
          }
        }
      }
      .yd-pagination {
        padding: 40px 0;
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
<style lang="less">
.zxzhx-content {
  .yd {
    .yd-zxzhx-content {
      .van-pagination {
        font-size: 24px;
      }
      .van-pagination__item {
        color: #000;
        font-size: 24px;
        margin: 0 10px;
        border: 2px solid #d8dadf;
        padding: 0 24px;
      }
      .van-pagination__item--active {
        background-color: #333;
        color: #fff;
        border: 2px solid #333;
      }
      .van-pagination__item:active {
        background: none;
      }
    }
  }
}
</style>

