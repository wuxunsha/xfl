<template>
  <div class="pc-tjxw">
    <div class="content">
      <div class="titis">
        <div>
          <p>推荐新闻</p>
        </div>
        <div>
          <!-- <p>
            查看更多
            <span class="iconfont icon-youshuangjiantou"></span>
          </p> -->
        </div>
      </div>
      <div class="pc-tjxw-content">
        <ul>
          <li @click="ydzxDetails(1)">
            <div>
              <p>10</p>
              <p>2021-05</p>
            </div>
            <div>
              <h4>房地产营销全业态创新发展模式践行者</h4>
              <p>新方略信息科技有限公司隶属于佳银集团旗下全资子公司，凭借多年房地产开发经验及家装产业链的资源整合，全心致力于房地产+全屋设计+全屋整装+C2F全产品供应链...</p>
            </div>
          </li>
          <li @click="ydzxDetails(2)">
            <div>
              <p>30</p>
              <p>2021-04</p>
            </div>
            <div>
              <h4>一站式全屋整装 拎包入住 赠送价值12万品牌套餐包</h4>
              <p>我们不仅仅是送，新方略首创一站式厂商源头集采，更是一种全新生活方式的创享</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tjxwPc',
  data() {
    return {
    }
  },
  methods: {
    // 资讯详情
    ydzxDetails(type) {
      this.$router.push({
        path: '/ydzxDetails',
        query: {
          type: type
        }
      })
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
.pc-tjxw {
  // background: #f5f5f5;
  padding: 20px 0 60px; /*no*/
  .content {
    width: 1200px; /*no*/
    margin: 0 auto;
    .titis {
      margin: 30px 0; /*no*/
      display: flex;
      > div:nth-child(1) {
        flex: 1;
        text-align: left;
        > p {
          padding-left: 10px; /*no*/
          font-size: 24px; /*no*/
          border-left: 4px solid #e9bb5f; /*no*/
        }
      }
      > div:nth-child(2) {
        width: 140px;
        text-align: right;
        > p {
          font-size: 16px; /*no*/
          cursor: pointer;
          > span {
            font-size: 16px; /*no*/
          }
        }
        > p:hover {
          color: #e9bb5f;
          > span {
            color: #e9bb5f;
          }
        }
      }
    }
    .pc-tjxw-content {
      > ul {
        display: flex;
        > li {
          width: 48%;
          display: flex;
          border: 1px solid #ddd; /*no*/
          margin: 0 1% 16px; /*no*/
          transition: all 0.2s linear 0s;
          padding: 22px 28px; /*no*/
          height: 86px; /*no*/
          cursor: pointer;
          > div:nth-child(1) {
            width: 66px; /*no*/
            border-right: 1px solid #ddd; /*no*/
            line-height: 20px; /*no*/
            padding-right: 30px; /*no*/
            color: #666;
            vertical-align: middle;
            > p:nth-child(1) {
              width: 100%;
              text-align: center;
              color: #666;
              font-size: 48px; /*no*/
              line-height: 48px; /*no*/
              font-weight: bold;
            }
            > p:nth-child(2) {
              width: 100%;
              text-align: center;
              color: #666;
              font-size: 16px; /*no*/
              line-height: 40px; /*no*/
            }
          }
          > div:nth-child(2) {
            flex: 1;
            padding-left: 30px; /*no*/
            > h4 {
              font-size: 18px; /*no*/
              font-weight: bold;
              color: #000;
              font-weight: normal;
              text-align: left;
              margin-bottom: 8px; /*no*/
            }
            > p {
              font-size: 14px; /*no*/
              color: #666;
              line-height: 20px; /*no*/
              text-align: left;
            }
          }
        }
        > li:hover {
          border: 1px solid #e9bb5f; /*no*/
          -webkit-box-shadow: 0 15px 15px rgb(0 0 0 / 10%); /*no*/
          box-shadow: 0 2px 6px rgb(0 0 0 / 10%); /*no*/
          -webkit-transform: translate3d(0, -2px, 0); /*no*/
          transform: translate3d(0, -2px, 0); /*no*/
          > div:nth-child(2) {
            > h4 {
              color: #e9bb5f;
            }
          }
        }
      }
    }
  }
}

@keyframes lxwmFrames {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
}
</style>

