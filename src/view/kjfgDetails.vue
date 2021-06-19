<template>
  <div class="kjfgDetails-content">
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
      <!-- 面包屑 -->
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
          <h4 class="title">{{dcxmDetailsData.title}}</h4>
          <p class="fbsj">
            <span>发布日期：</span>
            <span>{{dcxmDetailsData.fbrq}}</span>
          </p>
          <p class="xmjs">
            {{dcxmDetailsData.content}}
          </p>
          <p class="kjfg-img">
            <img :src="dcxmDetailsData.url" alt="">
          </p>
          <!-- <ul>
            <li v-for="item in dcxmDetailsData.urlList" :key="item.id">
              <img :src="item.url" alt="">
            </li>
          </ul> -->
        </div>
      </div>
      <!-- 推荐新闻 -->
      <tjalPc></tjalPc>

      <!-- 底部 -->
      <footerPc></footerPc>

      <toolbar></toolbar>

    </div>
    <div v-else class="yd">
      <!-- 顶部导航栏 -->
      <headerYd></headerYd>
      <!-- 项目详情 -->
      <div class="yd-lxwmTitle">
        <h4 class="title">{{dcxmDetailsData.title}}</h4>
        <p class="fbsj">
          <span>发布日期：</span>
          <span>{{dcxmDetailsData.fbrq}}</span>
        </p>
        <p class="xmjs">
          {{dcxmDetailsData.content}}
        </p>
        <ul>
          <li>
            <img :src="dcxmDetailsData.url" alt="">
          </li>
        </ul>
      </div>

      <bottomYd></bottomYd>
    </div>
    
  </div>
</template>

<script>
import store from '../store/index.js'
import footerYd from '../components/yd/footerYd.vue'
import headerYd from '../components/yd/headerYd.vue'
import bottomYd from '../components/yd/bottomYd.vue'
import footerPc from '../components/pc/footerPc.vue'
import tjalPc from '../components/pc/tjalPc.vue'
import toolbar from '../components/pc/toolbar.vue'
export default {
  name: 'main',
  data() {
    return {
      isEquipmentType: store.state.userAgent,
      offsetFlag: false,
      type: null,
      dcxmDetailsData: {},
      xzsjyData: {
        title: '新中式简约',
        fbrq: '2021-05-17 22:00',
        content: '新中式简约装修风格是将现代元素和传统的中式风格的相互融合，由于简化了传统中式风格的韵味，装修在线条上十分流畅，一些过于繁复的东西被简化掉。用现代的一些审美方法来营造出传统的形式美，一般采用一些工艺与科技生产的材料和家具，其特点突出是简洁、实用、美观、个性化。',
        url: require('../assets/image/zzkj/xzsjy.png')
      },
      xdqsData: {
        title: '现代轻奢',
        fbrq: '2021-04-17 22:00',
        content: '现代轻奢风格是以极致简约为基础，通过一些精致的软装元素来凸显质感，同时也浓缩着意想不到的功能与细节，营造出舒适、通透、合理的使用空间，让整个空间透着一种清澈、静怡、宁和、雅致之美，从而彰显了一种高品质的生活方式。',
        url: require('../assets/image/zzkj/xdqszs.png')
      },
      jyosData: {
        title: '简约欧式',
        fbrq: '2018-12-17 22:00',
        content: '简约欧式风格延续了古典欧式豪华、优雅、和谐、舒适、浪漫的装修特点，在设计上去繁就简，一方面保留了材质、色彩的大致风格，仍然可以很强烈地感受传统的历史痕迹与浑厚的文化底蕴，同时又摒弃了过于复杂的肌理和装饰，简化了线条。使其表现大气、更贴近于自然。',
        url: require('../assets/image/zzkj/jyos.png')
      },
      xdhbhData: {
        title: '现代黑白灰',
        fbrq: '2018-12-17 22:00',
        content: '现代黑白灰简约风格装修硬朗成熟，也不失优雅情调。在现代简约风格装修中，它们过滤掉一切繁琐杂乱色彩，主要打造的就是一个无彩色系的居室，它的装修效果简单却不失时尚，极简的黑与白，塑造优雅的同时又极具现代设计感。',
        url: require('../assets/image/zzkj/xdhbh.png')
      }
    }
  },
  components: {
    footerYd,
    headerYd,
    bottomYd,
    footerPc,
    tjalPc,
    toolbar
  },
  created() {
    this.type = this.$route.query.type
    if(Number(this.type) === 1) {
      this.dcxmDetailsData = this.xzsjyData
    } else if(Number(this.type) === 2) {
      this.dcxmDetailsData = this.xdqsData
    } else if(Number(this.type) === 3) {
      this.dcxmDetailsData = this.jyosData
    } else if(Number(this.type) === 4) {
      this.dcxmDetailsData = this.xdhbhData
    }
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
.kjfgDetails-content {
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
        .title {
          font-size: 24px; /*no*/
          color: #000;
          font-weight: bold;
        }
        .fbsj {
          margin-top: 10px; /*no*/
          padding: 10px 0; /*no*/
          border-top: 1px dashed #ccc; /*no*/
          border-bottom: 1px dashed #ccc; /*no*/
          >span {
            font-size: 14px; /*no*/
            color: #ccc;
          }
        }
        .xmjs {
          margin-top: 20px; /*no*/
          font-size: 16px; /*no*/
          line-height: 20px; /*no*/
          text-align: left;
        }
        .kjfg-img {
          margin-top: 40px; /*no*/
          height: 370px; /*no*/
          >img {
            width: 600px; /*no*/
            height: 100%;
          }
        }
      }
    }
  }

  /*-----移动---------*/
  .yd {
    padding-bottom: 120px;
    .yd-lxwmTitle {
      padding: 40px 20px;
      .title {
        font-size: 48px;
        color: #000;
        font-weight: bold;
      }
      .fbsj {
        margin-top: 20px;
        padding: 20px 0;
        text-align: left;
        >span {
          font-size: 28px;
          color: #ccc;
        }
      }
      .xmjs {
        margin-top: 40px;
        font-size: 28px;
        line-height: 60px;
        text-align: left;
        color: #000;
      }
      >ul {
        margin-top: 80px;
        padding: 0 40px;
        >li {
          width: 100%;
          height: 300px;
          margin-bottom: 30px;
          >img {
            width: 100%;
            height: 100%;
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
.kjfgDetails-content .el-carousel__item img {
  width: 100%;
  height: 100%;
}
</style>
