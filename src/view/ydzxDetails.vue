<template>
  <div class="ydzxDetails-content">
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
      <!-- 地产项目 -->
      <div class="pc-zlhz">
        <div class="main3_l">
          <h4 class="title">{{ydzxData.title}}</h4>
          <p class="fbsj">
            <span>发布日期：</span>
            <span>{{ydzxData.fbsj}}</span>
          </p>
          <ul>
            <li v-for="(item,index) in ydzxData.list" :key="index">
              <p>{{item.content}}</p>
              <p>
                <img :src="item.url" alt>
              </p>
            </li>
          </ul>
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
      <div class="yd-ydzxDetails-content">
        <h4>
          {{ydzxData.title}}
        </h4>
        <p>发布时间：{{ydzxData.fbsj}}</p>
        <ul>
          <li v-for="(item,index) in ydzxData.list" :key="index">
            <p>{{item.content}}</p>
            <p>
              <img :src="item.url" alt>
            </p>
          </li>
        </ul>
        <p class="yd-fhlb" @click="ydFhlb">返回列表</p>
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
import tjalPc from '../components/pc/tjalPc.vue'
import toolbar from '../components/pc/toolbar.vue'
export default {
  name: 'main',
  data() {
    return {
      isEquipmentType: store.state.userAgent,
      offsetFlag: false,
      type: null,
      ydzxData: {},
      jbxxData: {
        title: '房地产营销全业态创新发展模式践行者',
        fbsj: '2018-06-18',
        list: [
          {
            content: '新方略信息科技有限公司隶属于佳银集团旗下全资子公司，凭借多年房地产开发经验及家装产业链的资源整合，全心致力于房地产+全屋设计+全屋整装+C2F全产品供应链一体化新模式的探索，以前瞻视野和创新驱动聚力打造一站式全品类家装产品供应以及精装服务的升级转型。',
            url: require('../assets/image/banner/pc-lxwm-banner.jpg')
          },
          {
            content: '公司始终以客户需求为中心，坚持全产业链一体化多方共赢的可持续经营理念，与国内外知名品牌厂商集中采购深度合作，去中间化以及C2F全产业供应链流通环节无缝衔接，充分发挥在基础装修、主材产品、固装家具、活动家具、软装配饰、全屋电器等家居资源的规模效应和集采优势，为实现客户拎包入住提供一站式最具性价比优势的整体家装解决方案。',
            url: require('../assets/image/gywm/gywm.png')
          }
        ]
      },
      hdxxData: {
        title: '一站式全屋整装 拎包入住 赠送价值12万品牌套餐包',
        fbsj: '2021-05-10',
        list: [
          {
            content: '我们不仅仅是送，新方略首创一站式厂商源头集采，更是一种全新生活方式的创享',
            url: require('../assets/image/xgzx/xgzx02.jpg')
          },
          {
            content: '价值12万豪华升级装修品牌家电赠送项（4K高清电视机）',
            url: require('../assets/image/tcb/1-12.jpg')
          },
          {
            content: '价值12万豪华升级装修品牌家电赠送项（对开门冰箱）',
            url: require('../assets/image/tcb/1-13.jpg')
          },
          {
            content: '价值12万豪华升级装修品牌家电赠送项（立式3匹空调）',
            url: require('../assets/image/tcb/1-14.jpg')
          },
          {
            content: '价值12万豪华升级装修品牌家电赠送项（10KG滚筒洗衣机）',
            url: require('../assets/image/tcb/1-15.jpg')
          },
          {
            content: '价值12万豪华升级装修品牌家电赠送项（燃气灶及吸油烟机）',
            url: require('../assets/image/tcb/1-16.jpg')
          },
          {
            content: '价值12万豪华升级装修品牌家电赠送项（智能指纹锁）',
            url: require('../assets/image/tcb/1-17.jpg')
          },
          {
            content: '价值12万豪华升级装修品牌家电赠送项（5级超滤净水机）',
            url: require('../assets/image/tcb/1-18.jpg')
          },
          {
            content: '价值12万豪华升级装修装修主材赠送项（客厅、餐厅及客厅主阳台地砖）',
            url: require('../assets/image/tcb/1-19.jpg')
          },
          {
            content: '价值12万豪华升级装修装修主材赠送项（厨房、全屋卫生间及生活阳台地砖）',
            url: require('../assets/image/tcb/1-20.jpg')
          },
          {
            content: '价值12万豪华升级装修装修主材赠送项（厨房、全屋卫生间墙砖）',
            url: require('../assets/image/tcb/1-21.jpg')
          },
          {
            content: '价值12万豪华升级装修装修主材赠送项（全屋卧室瓷木地砖）',
            url: require('../assets/image/tcb/1-22.jpg')
          },
          {
            content: '价值12万豪华升级装修装修主材赠送项（全屋卫生间防水涂料）',
            url: require('../assets/image/tcb/1-23.jpg')
          },
          {
            content: '价值12万豪华升级装修装修主材赠送项（厨房、全屋卫生间吊顶）',
            url: require('../assets/image/tcb/1-24.jpg')
          },
          {
            content: '价值12万豪华升级装修卫浴洁具赠送项（连体坐便器、花洒三件套）',
            url: require('../assets/image/tcb/1-25.jpg')
          },
          {
            content: '价值12万豪华升级装修卫浴洁具赠送项（浴室柜五件套）',
            url: require('../assets/image/tcb/1-26.jpg')
          },
          {
            content: '价值12万豪华升级装修定制家具赠送项（客厅组合沙发/茶几/电视柜）',
            url: require('../assets/image/tcb/1-27.jpg')
          },
          {
            content: '价值12万豪华升级装修定制家具赠送项（餐桌/餐椅）',
            url: require('../assets/image/tcb/1-29.jpg')
          },
          {
            content: '价值12万豪华升级装修定制家具赠送项（主卧床/床头柜）',
            url: require('../assets/image/tcb/1-30.jpg')
          },
          {
            content: '价值12万豪华升级装修定制家具赠送项（客厅组合沙发）',
            url: require('../assets/image/tcb/1-31.jpg')
          },
          {
            content: '价值12万豪华升级装修定制家具赠送项（客厅组合沙发/茶几/电视柜）',
            url: require('../assets/image/tcb/1-32.jpg')
          },
          {
            content: '价值12万豪华升级装修定制家具赠送项（餐桌/餐椅/茶几/电视柜）',
            url: require('../assets/image/tcb/1-33.jpg')
          },
          {
            content: '价值12万豪华升级装修定制家具赠送项（客厅组合沙发/茶几/电视柜）',
            url: require('../assets/image/tcb/1-34.jpg')
          },
          {
            content: '价值12万豪华升级装修定制家具赠送项（主卧床/床头柜）',
            url: require('../assets/image/tcb/1-35.jpg')
          },
          {
            content: '价值12万豪华升级装修定制家具赠送项（客厅组合沙发）',
            url: require('../assets/image/tcb/1-36.jpg')
          },
          {
            content: '价值12万豪华升级装修定制家具赠送项（客厅组合沙发）',
            url: require('../assets/image/tcb/1-37.jpg')
          },
          {
            content: '价值12万豪华升级装修定制家具赠送项（餐桌/餐椅）',
            url: require('../assets/image/tcb/1-38.jpg')
          },
          {
            content: '价值12万豪华升级装修定制家具赠送项（1.8米主卧床/床头柜）',
            url: require('../assets/image/tcb/1-40.jpg')
          },
          {
            content: '价值12万豪华升级装修定制家具赠送项（床垫）',
            url: require('../assets/image/tcb/1-44.jpg')
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
    tjalPc,
    toolbar
  },
  created() {
    this.type = this.$route.query.type
    if(Number(this.type) === 1) {
      this.ydzxData = this.jbxxData
    } else if(Number(this.type) === 2) {
      this.ydzxData = this.hdxxData
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
    // 返回列表
    ydFhlb() {
      this.$router.push({
        path: '/zxzhx'
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
    }
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
.ydzxDetails-content {
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
        >ul {
          >li {
            >p:nth-child(1) {
              margin-top: 40px;
              color: #222;
              font-size: 28px;
              text-align: left;
              line-height: 50px;
            }
            >p:nth-child(2) {
              margin: 20px 0;
              width: 100%;
              height: 400px;
              >img {
                width: 100%;
                height: 100%;
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
    .yd-ydzxDetails-content {
      background: #fff;
      padding: 0 40px 40px;
      >h4 {
        font-size: 32px;
        color: #000;
        font-weight: 600;
      }
      >p:nth-child(2) {
        color: #999;
        font-size: 26px;
        padding: 30px 0;
        border-bottom: 2px solid #ddd;
      }
      >ul {
        >li {
          >p:nth-child(1) {
            margin-top: 40px;
            color: #222;
            font-size: 28px;
            text-align: left;
            line-height: 50px;
          }
          >p:nth-child(2) {
            margin: 20px 0;
            width: 100%;
            height: 400px;
            >img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
      .yd-fhlb {
        margin-top: 80px;
        width: 100%;
        font-size: 28px;
        color: #fff;
        background: #393939;
        padding: 14px 0;
      }
    }
  }
}
</style>
<style lang="less">
.ydzxDetails-content .el-carousel__item img {
  width: 100%;
  height: 100%;
}
</style>
