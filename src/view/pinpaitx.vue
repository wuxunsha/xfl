<template>
  <div class="pinpaitx-content">
    <div v-if="isEquipmentType === 'pc'" class="pc">
      <!-- 顶部导航栏 -->
      <div :class="offsetFlag ? 'header-main height-opacity' : 'header-main'">
        <div class="header-logo" @click="tzHome">
          <img src="../assets/image/logo/logo.png" alt>
        </div>
        <div class="header-nav">
          <div>
            <ul>
              <li @click="tzHome">
                <p>首页</p>
              </li>
              <li>
                <p @click="tzPptx">品牌体系</p>
                <div class="pptx-nav">
                  <ul>
                    <li @click="tzMfstzb">
                      <p>买房送套餐包</p>
                    </li>
                    <li @click="tzZztx">
                      <p>整装科技</p>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <p @click="tzDcxm">项目案例</p>
                <div class="xmal-nav">
                  <ul>
                    <li @click="tzDcxm">
                      <p>地产项目</p>
                    </li>
                    <li @click="tzKjfg">
                      <p>空间风格</p>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <p @click="lxwm">联系我们</p>
                <div class="lxwm-nav">
                  <ul>
                    <li @click="tzZhlhz">
                      <p>战略合作</p>
                    </li>
                    <li @click="tzShwhz">
                      <p>商务合作</p>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <p>全国统一服务热线</p>
            <p>0731-23108999</p>
          </div>
        </div>
      </div>
      <!-- 轮播图 -->
      <div class="banner-box" ref="bannerImage">
        <el-carousel :interval="5000" height="630px">
          <el-carousel-item>
            <img src="../assets/image/banner/pc-lxwm-banner.jpg" alt>
          </el-carousel-item>
        </el-carousel>
      </div>
      <!-- 面包屑 -->
      <div class="pc-mbx">
        <div class="pc-mbx-content">
          <div class="pc-gywm-mbx">
            <p>
              <span class="iconfont icon-fangzi"></span>
              <span>您的位置：</span>
              <span @click="tzHome">主页</span>
              <span>></span>
              <span>品牌体系</span>
            </p>
          </div>
          <div class="pc-gywm-tab">
            <ul>
              <li @click="tzMfstzb">
                <p>买房送套装包</p>
                <i></i>
              </li>
              <li @click="tzZztx">
                <p>整装科技</p>
                <i></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 品牌体系 -->
      <div class="pc-pptx">
        <div class="main3_l">
          <div class="title">
            <span class="en">品 牌 体 系</span>
            <span class="line-left"></span>
            <span class="line-right"></span>
          </div>
          <p class="nytitle">拐点之下新方略 行业破冰新模式</p>
          <div class="pc-pptx-text">
            <p>新方略专注于打造拎包入住、全屋整装家具、家电、装修主材知名品牌C2F全产业链服务平台,去中间化、规模化源头厂商集中采购。打造销售爆点、拉升楼盘价值、赋能房产引流，实现快速去化房地产。</p>
          </div>
          <div class="pc-pptx-image">
            <img src="../assets/image/pptx/pptx01.jpg" alt="">
          </div>
          <div class="pc-pptx-image">
            <img src="../assets/image/pptx/pptx02.jpg" alt="">
          </div>
        </div>
      </div>
      <!-- 项目案例 -->
      <div class="pc-xmal">
        <div class="px-xmal-content">
          <div class="title">
            <span class="en">项 目 案 例</span>
            <span class="line-left"></span>
            <span class="line-right"></span>
          </div>
          <div class="pc-xmal-box">
            <ul>
              <li @click="dcxmDetails(1)">
                <div>
                  <img src="../assets/image/xmal/mdlhy.jpg" alt>
                </div>
                <div>
                  <h4>马德里花园</h4>
                  <p>MORE+</p>
                </div>
              </li>
              <li @click="dcxmDetails(2)">
                <div>
                  <img src="../assets/image/xmal/ylw.jpg" alt>
                </div>
                <div>
                  <h4>御龙湾</h4>
                  <p>MORE+</p>
                </div>
              </li>
              <li @click="dcxmDetails(3)">
                <div>
                  <img src="../assets/image/xmal/bjyh.jpg" alt>
                </div>
                <div>
                  <h4>滨江壹号</h4>
                  <p>MORE+</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 推荐新闻 -->
      <tjxwPc></tjxwPc>

      <!-- 底部 -->
      <footerPc></footerPc>

      <toolbar></toolbar>

    </div>
    <div v-else class="yd">
      <!-- 顶部导航栏 -->
      <headerYd></headerYd>
      <!-- 标题 -->
      <div class="yd-pinpaiTitle">
        <p>品牌体系</p>
      </div>
      <div class="yd-pinpai-content">
        <div class="yd-pinpai-text">
          <p>新方略专注于打造拎包入住、全屋整装家具、家电、装修主材知名品牌C2F全产业链服务平台,去中间化、规模化源头厂商集中采购。</p>
          <p>打造销售爆点、拉升楼盘价值、赋能房产引流，实现快速去化房地产。</p>
        </div>
        <div class="yd-pptx-image">
          <img src="../assets/image/pptx/pptx01.jpg" alt="">
        </div>
        <div class="yd-pptx-image">
          <img src="../assets/image/pptx/pptx02.jpg" alt="">
        </div>
        <!-- 项目案例 -->
        <div>
          <h4 style="font-size: 16px;color:#000;">项目案例</h4>
          <xmalYd></xmalYd>
        </div>
      </div>

      <bottomYd></bottomYd>

      <footerYd :footerNavActive="2"></footerYd>
    </div>

  </div>
</template>

<script>
import store from '../store/index.js'
import footerYd from '../components/yd/footerYd.vue'
import headerYd from '../components/yd/headerYd.vue'
import bottomYd from '../components/yd/bottomYd.vue'
import xmalYd from '../components/yd/xmalYd.vue'
import footerPc from '../components/pc/footerPc.vue'
import tjxwPc from '../components/pc/tjxwPc.vue'
import toolbar from '../components/pc/toolbar.vue'
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
    tjxwPc,
    xmalYd,
    toolbar
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
    // 品牌体系
    tzPptx() {
      this.$router.push({
        path: '/pinpaitx'
      })
    },
    // 买房送套装包
    tzMfstzb() {
      this.$router.push({
        path: '/mfstzb'
      })
    },
    // 整装科技
    tzZztx() {
      this.$router.push({
        path: '/zztx'
      })
    },
    // 地产项目
    tzDcxm() {
      this.$router.push({
        path: '/dcxm'
      })
    },
    // 空间风格
    tzKjfg() {
      this.$router.push({
        path: '/kjfg'
      })
    },
    // 地产项目详情
    dcxmDetails(type) {
      this.$router.push({
        path: '/dcxmDetails',
        query: {
          type: type
        }
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
.pinpaitx-content {
  // width: 1200px !important;
  margin: 0 auto !important;

  /*-----PC---------*/
  .pc {
    .header-main {
      position: fixed;
      top: 0;
      height: 96px; /*no*/
      padding: 0 20px; /*no*/
      width: 100%;
      background: #585858;
      display: flex;
      z-index: 1000;
      .header-logo {
        flex: 0.35;
        padding: 10px 0; /*no*/
        margin-top: 20px; /*no*/
        cursor: pointer;
        > img {
          width: 100%;
          height: 80%;
        }
      }
      .header-nav {
        display: flex;
        flex: 1;
        padding: 20px 0; /*no*/
        > div:nth-child(1) {
          flex: 1;
          > ul {
            display: flex;
            > li {
              flex: 1;
              text-align: center;
              cursor: pointer;
              > p {
                line-height: 56px; /*no*/
                font-size: 18px; /*no*/
                color: #fff;
              }
              .pptx-nav,
              .xmal-nav,
              .lxwm-nav {
                position: relative;
                top: 20px; /*no*/
                display: none;
                background: rgba(0, 0, 0, 0.6);
                box-shadow: 0 13px 42px 11px rgb(0 0 0 / 5%); /*no*/
                height: auto;
                overflow: hidden;
                width: 100%;
                animation: forward 0.4s ease 0s;
                > ul {
                  > li {
                    height: 40px; /*no*/
                    line-height: 40px; /*no*/
                    > p {
                      color: #fff;
                      display: block;
                      font-size: 14px; /*no*/
                      font-weight: 500;
                      padding: 0;
                      transition: all 0.2s ease-in-out 0s;
                      max-width: 100%;
                      border: 0 none;
                      border-radius: initial;
                    }
                  }
                  > li:hover {
                    background: #000;
                  }
                }
              }
            }
            > li:nth-child(2):hover {
              .pptx-nav {
                display: inline-block;
              }
            }
            > li:nth-child(3):hover {
              .xmal-nav {
                display: inline-block;
              }
            }
            > li:nth-child(4):hover {
              .lxwm-nav {
                display: inline-block;
              }
            }
          }
        }
        > div:nth-child(2) {
          flex: 0.3;
          text-align: left;
          > p {
            line-height: 28px; /*no*/
            font-size: 18px; /*no*/
            color: #fff;
            cursor: pointer;
          }
          > p:nth-child(2) {
            font-size: 24px; /*no*/
            font-weight: 600;
          }
        }
      }
    }
    .height-opacity {
      background: rgba(0, 0, 0, 0.2);
    }
    .banner-box {
      margin-top: 96px; /*no*/
    }
    .pc-mbx {
      height: 60px; /*no*/
      line-height: 60px; /*no*/
      background: #fff;
      .pc-mbx-content {
        width: 1200px; /*no*/
        margin: 0 auto;
        display: flex;
        .pc-gywm-mbx {
          flex: 1;
          text-align: left;
          >p {
            color: #363636;
            font-size: 14px; /*no*/
            >span:nth-child(1) {
              font-size: 20px; /*no*/
              vertical-align: middle;
              font-weight: bold;
            }
            >span:nth-child(3) {
              cursor: pointer;
            }
            >span:nth-child(4) {
              margin: 0 6px; /*no*/
            }
            >span:nth-child(3):hover {
              color: #e9bb5f;
            }
          }
        }
        .pc-gywm-tab {
          width: 190px; /*no*/
          >ul {
            display: flex;
            >li {
              flex: 1;
              position: relative;
              >p {
                font-size: 14px; /*no*/
                color: #363636;
                cursor: pointer;
              }
              >i {
                position: absolute;
                bottom: 0;
                left: 50%;
                width: 0;
                height: 2px; /*no*/
                background-color: #e9bb5f;
                -webkit-transition: all 0.3s ease 0s;
                transition: all 0.3s ease 0s;
              }
            }
            >li:hover {
              >p {
                color: #e9bb5f;
              }
              >i {
                width: 100%;
                margin-left: -50%;
              }
            }
          }
        }
      }
    }
    .pc-pptx {
      width: 100%;
      padding-top: 20px; /*no*/
      border-top: 1px solid #eee; /*no*/
      padding-top: 40px; /*no*/
      .main3_l {
        width: 1200px; /*no*/
        margin: 0 auto;
        .title {
          width: 100%;
          text-align: center;
          position: relative;
          margin-bottom: 20px; /*no*/
          .en {
            color: #2f2f2f;
            font-size: 30px; /*no*/
            line-height: 30px; /*no*/
            margin-bottom: 6px; /*no*/
            text-transform: uppercase;
            font-family: "microsoft yahei", "Arial";
            display: block;
          }
          .line-left {
            left: 50%;
            margin-left: -202px; /*no*/
          }
          .line-right {
            right: 50%;
            margin-right: -202px; /*no*/
          }
          .line-left,
          .line-right {
            width: 90px; /*no*/
            height: 1px; /*no*/
            position: absolute;
            bottom: 12px; /*no*/
            display: block;
            background: #c1c1c1;
          }
        }
        .nytitle {
          font-size: 16px; /*no*/
        }
        .pc-pptx-text {
          margin-top: 20px; /*no*/
          >p {
            color: rgb(51, 51, 51);
            font-family: "microsoft yahei", Arial;
            font-size: 16px; /*no*/
            text-align: left;
            text-indent: 2em; /*no*/
            line-height: 30px; /*no*/
          }
        }
        .pc-pptx-image {
          padding: 20px 100px; /*no*/
          height: 300px; /*no*/
          >img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .pc-xmal {
      padding-top: 20px; /*no*/
      .px-xmal-content {
        width: 1200px; /*no*/
        margin: 0 auto;
        .title {
          width: 100%;
          text-align: center;
          position: relative;
          margin-bottom: 20px; /*no*/
          .en {
            color: #2f2f2f;
            font-size: 30px; /*no*/
            line-height: 30px; /*no*/
            margin-bottom: 6px; /*no*/
            text-transform: uppercase;
            font-family: "microsoft yahei", "Arial";
            display: block;
          }
          .line-left {
            left: 50%;
            margin-left: -202px; /*no*/
          }
          .line-right {
            right: 50%;
            margin-right: -202px; /*no*/
          }
          .line-left,
          .line-right {
            width: 90px; /*no*/
            height: 1px; /*no*/
            position: absolute;
            bottom: 12px; /*no*/
            display: block;
            background: #c1c1c1;
          }
        }
        .pc-xmal-box {
          > ul {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            > li {
              width: 390px; /*no*/
              height: 410px; /*no*/
              border: 1px solid #f3f3f3;
              margin-bottom: 30px; /*no*/
              box-shadow: 0 2px 5px rgba(146, 146, 146, 0.2); /*no*/
              transition: all 0.2s linear 0s;
              cursor: pointer;
              > div:nth-child(1) {
                width: 100%;
                height: 300px; /*no*/
                overflow: hidden;
                cursor: pointer;
                > img {
                  width: 100%;
                  height: 100%;
                }
              }
              > div:nth-child(2) {
                padding: 20px 40px; /*no*/
                > h4 {
                  font-size: 18px; /*no*/
                  font-weight: bold;
                  color: #000;
                  text-overflow: ellipsis;
                  text-align: left;
                  border-bottom: 1px solid #ddd; /*no*/
                  padding: 6px 0; /*no*/
                }
                > p:nth-child(2) {
                  font-size: 14px; /*no*/
                  line-height: 40px; /*no*/
                  text-align: left;
                  color: #666;
                }
              }
            }
            >li:hover {
              transform: translate3d(0, -2px, 0); /*no*/
              >div:nth-child(1) {
                img {
                  animation: xmalFrames 1s ease 0s;
                  animation-fill-mode: forwards;
                }
              }
              >div:nth-child(2) {
                >h4 {
                  color: #e9bb5f;
                }
              }
            }
          }
        }
      }
    }
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
<style lang="less">
.pinpaitx-content .el-carousel__item img {
  width: 100%;
  height: 100%;
}
</style>
