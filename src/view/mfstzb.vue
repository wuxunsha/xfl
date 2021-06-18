<template>
  <div class="mfstzb-content">
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
                    <li>
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
      <!-- 关于我们 -->
      <div class="pc-gywm">
        <div class="pc-gywm-content">
          <div class="pc-gywm-mbx">
            <p>
              <span class="iconfont icon-fangzi"></span>
              <span>您的位置：</span>
              <span @click="tzHome">主页</span>
              <span>></span>
              <span @click="tzPptx">品牌体系</span>
              <span>></span>
              <span>买房送套餐包</span>
            </p>
          </div>
          <div class="pc-gywm-tab">
            <ul>
              <li>
                <p>买房送套餐包</p>
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
      <!-- 买房送套餐包 -->
      <div class="pc-zlhz">
        <div class="main3_l">
          <div class="title">
            <span class="en">买房送套餐包</span>
            <span class="line-left"></span>
            <span class="line-right"></span>
          </div>
          <div class="main3_1b">
            <ul>
              <li>
                <img src="../assets/image/tcb/1-12.jpg" alt>
              </li>
              <li>
                <img src="../assets/image/tcb/1-13.jpg" alt>
              </li>
              <li>
                <img src="../assets/image/tcb/1-14.jpg" alt>
              </li>
              <li>
                <img src="../assets/image/tcb/1-15.jpg" alt>
              </li>
              <li>
                <img src="../assets/image/tcb/1-16.jpg" alt>
              </li>
              <li>
                <img src="../assets/image/tcb/1-17.jpg" alt>
              </li>
              <li>
                <img src="../assets/image/tcb/1-18.jpg" alt>
              </li>
              <li>
                <img src="../assets/image/tcb/1-19.jpg" alt>
              </li>
              <li>
                <img src="../assets/image/tcb/1-20.jpg" alt>
              </li>
              <li>
                <img src="../assets/image/tcb/1-21.jpg" alt>
              </li>
              <li>
                <img src="../assets/image/tcb/1-22.jpg" alt>
              </li>
              <li>
                <img src="../assets/image/tcb/1-23.jpg" alt>
              </li>
              <li>
                <img src="../assets/image/tcb/1-24.jpg" alt>
              </li>
              <li>
                <img src="../assets/image/tcb/1-25.jpg" alt>
              </li>
              <li>
                <img src="../assets/image/tcb/1-26.jpg" alt>
              </li>
              <li>
                <img src="../assets/image/tcb/1-27.jpg" alt>
              </li>
              <li>
                <img src="../assets/image/tcb/1-28.jpg" alt>
              </li>
              <li>
                <img src="../assets/image/tcb/1-20.jpg" alt>
              </li>
              <li>
                <img src="../assets/image/tcb/1-30.jpg" alt>
              </li>
              <li>
                <img src="../assets/image/tcb/1-31.jpg" alt>
              </li>
              <li>
                <img src="../assets/image/tcb/1-32.jpg" alt>
              </li>
              <li>
                <img src="../assets/image/tcb/1-33.jpg" alt>
              </li>
              <li>
                <img src="../assets/image/tcb/1-34.jpg" alt>
              </li>
              <li>
                <img src="../assets/image/tcb/1-35.jpg" alt>
              </li>
              <li>
                <img src="../assets/image/tcb/1-36.jpg" alt>
              </li>
              <li>
                <img src="../assets/image/tcb/1-37.jpg" alt>
              </li>
              <li>
                <img src="../assets/image/tcb/1-38.jpg" alt>
              </li>
              <li>
                <img src="../assets/image/tcb/1-39.jpg" alt>
              </li>
              <li>
                <img src="../assets/image/tcb/1-40.jpg" alt>
              </li>
              <li>
                <img src="../assets/image/tcb/1-41.jpg" alt>
              </li>
              <li>
                <img src="../assets/image/tcb/1-42.jpg" alt>
              </li>
              <li>
                <img src="../assets/image/tcb/1-43.jpg" alt>
              </li>
              <li>
                <img src="../assets/image/tcb/1-44.jpg" alt>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 推荐新闻 -->
      <tjxwPc></tjxwPc>

      <!-- 底部 -->
      <footerPc></footerPc>
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
    // 品牌体系
    tzPptx() {
      this.$router.push({
        path: '/pinpaitx'
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
    // 跳转战略合作
    tzZhlhz() {
      this.$router.push({
        path: '/zhlhz'
      })
    },
    // 商务合作
    tzShwhz() {
      this.$router.push({
        path: '/shwhz'
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
.mfstzb-content {
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
    .pc-gywm {
      height: 60px; /*no*/
      line-height: 60px; /*no*/
      background: #fff;
      .pc-gywm-content {
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
            >span:nth-child(3),
            >span:nth-child(5) {
              cursor: pointer;
            }
            >span:nth-child(4),
            >span:nth-child(6) {
              margin: 0 6px; /*no*/
            }
            >span:nth-child(3):hover,
            >span:nth-child(5):hover {
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
            >li:nth-child(1) {
              >p {
                color: #e9bb5f;
              }
              >i {
                width: 100%;
                margin-left: -50%;
              }
            }
            >li:nth-child(2):hover {
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
    .pc-zlhz {
      border-top: 1px solid #eee;
      width: 100%;
      padding: 40px 0; /*no*/
      // height: 360px; /*no*/
      .main3_l {
        width: 1200px; /*no*/
        margin: 0 auto;
        .title {
          width: 100%;
          text-align: center;
          position: relative;
          margin-bottom: 46px; /*no*/
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
        .main3_1b {
          > ul {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            > li {
              border: 1px solid #e5e5e5; /*no*/
              width: 22%; /*no*/
              height: 300px; /*no*/
              margin: 20px 1% 0; /*no*/
              > img {
                width: 100%;
                height: 100%;
              }
            }
          }
        }
      }
    }
  }

}
</style>
<style lang="less">
.mfstzb-content .el-carousel__item img {
  width: 100%;
  height: 100%;
}
</style>
