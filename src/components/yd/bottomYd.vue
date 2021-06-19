<template>
  <div class="yd-bottom">
    <p>
      <span @click="tzPinpaixx">品牌形象</span>
      <span class="hs">|</span>
      <span @click="tzPinpaitx">品牌体系</span>
      <span class="hs">|</span>
      <span @click="tzXiangmuanli">项目案例</span>
      <span class="hs">|</span>
      <span @click="tzZxzhx">资讯中心</span>
    </p>
    <p>
      地 址：湖南省醴陵市城南立三大道
      <br>兰天宾馆旁
    </p>
  </div>
</template>

<script>
export default {
  name: 'bottomYd',
  data() {
    return {
    }
  },
  methods: {
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
    tabbarChange(id) {
      this.active = id
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
.yd-bottom {
  padding: 60px 0;
  background: #f5f5f5;
  > p:nth-child(1) {
    line-height: 40px;
    > span {
      font-size: 24px;
      color: #333;
    }
    .hs {
      color: #ccc;
    }
  }
  > p:nth-child(2) {
    font-size: 24px;
    color: #333;
    line-height: 40px;
  }
}
</style>

