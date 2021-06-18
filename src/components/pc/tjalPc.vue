<template>
  <div class="pc-tjal">
    <div class="content">
      <div class="titis">
        <div>
          <p>推荐案例</p>
        </div>
        <div>
          <p @click="tzPinpaitx">
            查看更多
            <span class="iconfont icon-youshuangjiantou"></span>
          </p>
        </div>
      </div>
      <div class="pc-tjal-content">
        <ul>
          <li @click="tzKjfgDetails(1)">
            <div>
              <img src="../../assets/image/zzkj/xzsjy.png" alt>
            </div>
            <div>
              <h4>新中式简约</h4>
              <p>MORE+</p>
            </div>
          </li>
          <li @click="tzKjfgDetails(2)">
            <div>
              <img src="../../assets/image/zzkj/xdqszs.png" alt>
            </div>
            <div>
              <h4>现代轻奢</h4>
              <p>MORE+</p>
            </div>
          </li>
          <li @click="tzKjfgDetails(3)">
            <div>
              <img src="../../assets/image/zzkj/jyos.png" alt>
            </div>
            <div>
              <h4>简约欧式</h4>
              <p>MORE+</p>
            </div>
          </li>
          <li @click="tzKjfgDetails(4)">
            <div>
              <img src="../../assets/image/zzkj/xdhbh.png" alt>
            </div>
            <div>
              <h4>现代黑白灰</h4>
              <p>MORE+</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tjalPc',
  data() {
    return {
    }
  },
  methods: {
    tzPinpaitx() {
      this.$router.push({
        path: '/pinpaitx'
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
.pc-tjal {
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
    .pc-tjal-content {
      > ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        > li {
          width: 23%; /*no*/
          height: 300px; /*no*/
          border: 1px solid #f3f3f3;
          margin-bottom: 30px; /*no*/
          box-shadow: 0 2px 5px rgba(146, 146, 146, 0.2); /*no*/
          transition: all 0.2s linear 0s;
          cursor: pointer;
          > div:nth-child(1) {
            width: 100%;
            height: 200px; /*no*/
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
        > li:hover {
          transform: translate3d(0, -2px, 0); /*no*/
          > div:nth-child(1) {
            img {
              animation: xmalFrames 1s ease 0s;
              animation-fill-mode: forwards;
            }
          }
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

