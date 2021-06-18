<template>
  <div class="dcxmDetails-content">
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
              <span>地产项目</span>
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
      <!-- 地产项目 -->
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
          <ul>
            <li v-for="item in dcxmDetailsData.urlList" :key="item.id">
              <img :src="item.url" alt="">
            </li>
          </ul>
        </div>
      </div>
      <!-- 推荐新闻 -->
      <tjalPc></tjalPc>

      <!-- 底部 -->
      <footerPc></footerPc>
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
          <li v-for="item in dcxmDetailsData.urlList" :key="item.id">
            <img :src="item.url" alt="">
          </li>
        </ul>
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
import footerPc from '../components/pc/footerPc.vue'
import tjalPc from '../components/pc/tjalPc.vue'
export default {
  name: 'main',
  data() {
    return {
      type: null,
      isEquipmentType: store.state.userAgent,
      offsetFlag: false,
      dcxmDetailsData: {},
      mdlhyData: {
        title: '马德里花园',
        fbrq: '2021-05-17 22:00',
        content: '2020年5月份，嫁接新方略“买房送家装礼包”活动，对案场重新包装，现场摆放家居礼包产品，提升体验感，突出性价比，线上线下配合项目全面宣传发声，活动释放当天人气爆棚、拥挤看房，实现月销98套，三个月一期基本售罄。',
        urlList: [
          { 
            id: 1,
            url: require('../assets/image/dcxm/mdlhy01.jpg')
          },
          {
            id: 2,
            url: require('../assets/image/dcxm/mdlhy02.jpg')
          },
          {
            id: 3,
            url: require('../assets/image/dcxm/mdlhy03.jpg')
          }
        ]
      },
      ylwData: {
        title: '御龙湾',
        fbrq: '2021-04-17 22:00',
        content: '嫁接新方略“买房送家装礼包”模式，快速制定营销方案，梳理流程，重点包装礼包样板间，提升楼盘价值，开展渠道大会蓄水，开盘当天洋房产品成交460多套，人气爆棚，销售团队备受鼓舞，当月再次加推，100多套又一抢而空，创造区域惊人佳绩！',
        urlList: [
          { 
            id: 1,
            url: require('../assets/image/dcxm/ylw01.jpg')
          },
          {
            id: 2,
            url: require('../assets/image/dcxm/ylw02.jpg')
          },
          {
            id: 3,
            url: require('../assets/image/dcxm/ylw03.jpg')
          }
        ]
      },
      bjyhData: {
        title: '滨江壹号',
        fbrq: '2018-12-17 22:00',
        content: '2018年末，嫁接新方略“买房送家装礼包”模式， 提升楼盘价值，吸引客户目光，通过渠道带客和线上宣传，一周蓄客500组，再开盘首日成交101套，30天总去化217套，逆袭区域销冠。',
        urlList: [
          { 
            id: 1,
            url: require('../assets/image/dcxm/bjyh01.jpg')
          },
          {
            id: 2,
            url: require('../assets/image/dcxm/bjyh02.jpg')
          },
          {
            id: 3,
            url: require('../assets/image/dcxm/bjyh03.jpg')
          }
        ]
      }
    }
  },
  components: {
    footerYd,
    headerYd,
    bottomYd,
    footerPc,
    tjalPc
  },
  created() {
    this.type = this.$route.query.type
    if(Number(this.type) === 1) {
      this.dcxmDetailsData = this.mdlhyData
    } else if(Number(this.type) === 2) {
      this.dcxmDetailsData = this.ylwData
    } else if(Number(this.type) === 3) {
      this.dcxmDetailsData = this.bjyhData
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
    // 战略合作
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
.dcxmDetails-content {
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
        >ul {
          margin-top: 40px; /*no*/
          display: flex;
          justify-content: space-between;
          >li {
            width: 32%;
            height: 300px; /*no*/
            >img {
              width: 100%;
              height: 100%;
            }
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
</style>
<style lang="less">
.dcxmDetails-content .el-carousel__item img {
  width: 100%;
  height: 100%;
}
</style>
