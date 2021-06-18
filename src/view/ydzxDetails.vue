<template>
  <div class="ydzxDetails-content">
    <div v-if="isEquipmentType === 'pc'" class="pc">

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
    bottomYd
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
.ydzxDetails-content {
  // width: 1200px !important;
  margin: 0 auto !important;

  /*-----PC---------*/
  .pc {
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
    }
  }
}
</style>

