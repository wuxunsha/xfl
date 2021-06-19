<template>
  <div class="kjfg-content">
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
            <img src="../assets/image/zzkj/xzsjy.png" alt>
          </el-carousel-item>
        </el-carousel>
      </div>
      <!-- 整装科技 -->
      <div class="pc-gywm">
        <div class="pc-gywm-content">
          <div class="pc-gywm-mbx">
            <p>
              <span class="iconfont icon-fangzi"></span>
              <span>您的位置：</span>
              <span @click="tzHome">主页</span>
              <span>></span>
              <span @click="tzDcxm">项目案例</span>
              <span>></span>
              <span>空间风格</span>
            </p>
          </div>
          <div class="pc-gywm-tab">
            <ul>
              <li @click="tzDcxm">
                <p>地产项目</p>
                <i></i>
              </li>
              <li @click="tzKjfg">
                <p>空间风格</p>
                <i></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 空间风格 -->
      <div class="pc-zlhz">
        <div class="main3_l">
          <div class="main3_1b">
            <ul>
              <li @click="tzKjfgDetails(1)">
                <div>
                  <img src="../assets/image/zzkj/xzsjy.png" alt>
                </div>
                <div>
                  <h4>新中式简约</h4>
                  <div @click.stop="lxwm">
                    <p>预约</p>
                    <p>咨询</p>
                  </div>
                </div>
              </li>
              <li @click="tzKjfgDetails(2)">
                <div>
                  <img src="../assets/image/zzkj/xdqszs.png" alt>
                </div>
                <div>
                  <h4>现代轻奢</h4>
                  <div @click.stop="lxwm">
                    <p>预约</p>
                    <p>咨询</p>
                  </div>
                </div>
              </li>
              <li @click="tzKjfgDetails(3)">
                <div>
                  <img src="../assets/image/zzkj/jyos.png" alt>
                </div>
                <div>
                  <h4>简约欧式</h4>
                  <div @click.stop="lxwm">
                    <p>预约</p>
                    <p>咨询</p>
                  </div>
                </div>
              </li>
              <li @click="tzKjfgDetails(4)">
                <div>
                  <img src="../assets/image/zzkj/xdhbh.png" alt>
                </div>
                <div>
                  <h4>现代黑白灰</h4>
                  <div @click.stop="lxwm">
                    <p>预约</p>
                    <p>咨询</p>
                  </div>
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
  </div>
</template>

<script>
import store from '../store/index.js'
import footerYd from '../components/yd/footerYd.vue'
import headerYd from '../components/yd/headerYd.vue'
import bottomYd from '../components/yd/bottomYd.vue'
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
    // 品牌体系
    tzPptx() {
      this.$router.push({
        path: '/pinpaitx'
      })
    },
    // 买房送套餐包
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
    // 空间风格详情
    tzKjfgDetails(type) {
      this.$router.push({
        path: '/kjfgDetails',
        query: {
          type: type
        }
      })
    },
    handleScrollx() {
      if (this.isEquipmentType === 'pc') {
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
    if (this.isEquipmentType === 'pc') {
      window.addEventListener('scroll', this.handleScrollx, true)
    }
  },
  destroyed() {
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
.kjfg-content {
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
          > p {
            color: #363636;
            font-size: 14px; /*no*/
            > span:nth-child(1) {
              font-size: 20px; /*no*/
              vertical-align: middle;
              font-weight: bold;
            }
            > span:nth-child(3),
            > span:nth-child(5) {
              cursor: pointer;
            }
            > span:nth-child(4),
            > span:nth-child(6) {
              margin: 0 6px; /*no*/
            }
            > span:nth-child(3):hover,
            > span:nth-child(5):hover {
              color: #e9bb5f;
            }
          }
        }
        .pc-gywm-tab {
          width: 190px; /*no*/
          > ul {
            display: flex;
            > li {
              flex: 1;
              position: relative;
              > p {
                font-size: 14px; /*no*/
                color: #363636;
                cursor: pointer;
              }
              > i {
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
            > li:nth-child(2) {
              > p {
                color: #e9bb5f;
              }
              > i {
                width: 100%;
                margin-left: -50%;
              }
            }
            > li:nth-child(1):hover {
              > p {
                color: #e9bb5f;
              }
              > i {
                width: 100%;
                margin-left: -50%;
              }
            }
          }
        }
      }
    }
    .pc-zlhz {
      border-top: 1px solid #eee; /*no*/
      width: 100%;
      padding: 40px 0; /*no*/
      // height: 360px; /*no*/
      .main3_l {
        width: 1200px; /*no*/
        margin: 0 auto;
        .main3_1b {
          > ul {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            > li {
              width: 390px; /*no*/
              height: 390px; /*no*/
              border: 1px solid #f3f3f3;
              margin-bottom: 30px; /*no*/
              > div:nth-child(1) {
                width: 100%;
                height: 300px; /*no*/
                cursor: pointer;
                > img {
                  width: 100%;
                  height: 100%;
                }
              }
              > div:nth-child(2) {
                display: flex;
                margin-top: 25px; /*no*/
                padding: 0 10px; /*no*/
                > h4 {
                  flex: 1;
                  font-size: 16px; /*no*/
                  font-weight: bold;
                  color: #000;
                  text-overflow: ellipsis;
                  text-align: left;
                  cursor: pointer;
                }
                > div:nth-child(2) {
                  width: 44px; /*no*/
                  height: 40px; /*no*/
                  border-radius: 6px; /*no*/
                  border: 1px solid #666; /*no*/
                  cursor: pointer;
                  > p {
                    font-size: 14px; /*no*/
                    line-height: 20px; /*no*/
                  }
                }
                > div:nth-child(2):hover {
                  color: #e9bb5f;
                }
              }
            }
          }
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
.kjfg-content .el-carousel__item img {
  width: 100%;
  height: 100%;
}
</style>
