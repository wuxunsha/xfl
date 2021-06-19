<template>
  <div class="yd-header">
    <div class="header-logo" @click="homeNav">
      <img src="../../assets/image/logo/h5-logo.png" alt>
    </div>
    <div class="header-navbar">
      <ul>
        <li @click="tzPinpaixx">
          <span>品牌</span>
        </li>
        <li @click="tzZxzhx">
          <span>资讯</span>
        </li>
        <li @click="tzLxwm">
          <span>联系</span>
        </li>
      </ul>
    </div>
    <div class="header-nav" @click="h5Nav">
      <img src="../../assets/image/yd-header/menu.png" alt>
    </div>

    <!-- 顶部导航栏弹窗 -->
    <van-popup
      v-model="navTopShow"
      position="top"
      lock-scroll
      :get-container="getContainer"
      class="navTop-dialog"
    >
      <ul>
        <li @click="homeNav">
          <p>网站首页</p>
        </li>
        <li @click="tzPinpaixx">
          <p>品牌形象</p>
          <p>
            <van-icon name="arrow"/>
          </p>
        </li>
        <li @click="tzPinpaitx">
          <p>品牌体系</p>
          <p>
            <van-icon name="arrow"/>
          </p>
        </li>
        <li @click="tzXiangmuanli">
          <p>项目案例</p>
          <p>
            <van-icon name="arrow"/>
          </p>
        </li>
        <li @click="tzZxzhx">
          <p>资讯中心</p>
          <p>
            <van-icon name="arrow"/>
          </p>
        </li>
        <li @click="tzLxwm">
          <p>联系我们</p>
          <p>
            <van-icon name="arrow"/>
          </p>
        </li>
      </ul>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: 'headerYd',
  data() {
    return {
      navTopShow: false
    }
  },
  methods: {
    // 跳转首页
    homeNav() {
      this.$router.push({
        path: '/'
      })
    },
    // 联系我们
    tzLxwm() {
      this.$router.push({
        path: '/lxwm'
      })
    },
    // 品牌形象
    tzPinpaixx() {
      this.$router.push({
        path: '/pinpaixx'
      })
    },
    // 品牌体系
    tzPinpaitx() {
      this.$router.push({
        path: '/pinpaitx'
      })
    },
    // 项目案例
    tzXiangmuanli() {
      this.$router.push({
        path: '/xiangmuanli'
      })
    },
    // 资讯中心
    tzZxzhx() {
      this.$router.push({
        path: '/zxzhx'
      })
    },
    // 打开H5导航栏
    h5Nav() {
      this.navTopShow = !this.navTopShow
    },
    // 返回一个特定的 DOM 节点，作为挂载的父节点
    getContainer() {
      return document.querySelector('.yd-header');
    }
  },
  created() {

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
.yd-header {
  height: 56px;
  padding: 40px 20px 30px;
  display: flex;
  .header-logo {
    width: 160px;
    height: 50px;
    > img {
      width: 100%;
      height: 100%;
    }
  }
  .header-navbar {
    flex: 1;
    line-height: 30px;
    > ul {
      display: flex;
      > li {
        flex: 1;
        padding: 4px 0;
        border-right: 1px solid #999;
        > span {
          font-size: 24px;
          color: #666;
          text-align: center;
        }
      }
      > li:nth-child(3) {
        border-right: none;
      }
    }
  }
  .header-nav {
    width: 50px;
    height: 36px;
    > img {
      width: 100%;
      height: 100%;
    }
  }
  .navTop-dialog {
    width: 100%;
    background: #e7bd6b;
    > ul {
      > li {
        padding: 20px;
        border-bottom: 2px solid rgba(255, 255, 255, 0.4);
        display: flex;
        > p {
          flex: 1;
          font-size: 32px;
          color: #fff;
        }
        > p:nth-child(1) {
          text-align: left;
        }
        > p:nth-child(2) {
          text-align: right;
          .van-icon {
            vertical-align: middle;
          }
        }
      }
    }
  }
}
</style>
<style lang="less">
.yd-header {
  .van-overlay {
    z-index: 200 !important;
    // top: 126px;
    background-color: rgba(0, 0, 0, 0);
  }
  .van-popup {
    top: 126px;
    background: #e7bd6b;
  }
}
</style>

