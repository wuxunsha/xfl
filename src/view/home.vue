<template>
  <div class="main">
    <div v-if="isEquipmentType === 'pc'">
      <!-- 顶部导航栏 -->
      <div class="header-main">
        <div class="header-logo">
          <img src="../assets/image/logo.png" alt>
        </div>
        <div class="header-nav">
          <div>
            <ul>
              <li>
                <p>首页</p>
              </li>
              <li>
                <p>品牌体系</p>
                <div class="pptx-nav">
                  <ul>
                    <li>
                      <p>买房送装修</p>
                    </li>
                    <li>
                      <p>整装体系</p>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <p>项目案例</p>
                <div class="xmal-nav">
                  <ul>
                    <li>
                      <p>地产项目</p>
                    </li>
                    <li>
                      <p>空间风格</p>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <p>联系我们</p>
                <div class="lxwm-nav">
                  <ul>
                    <li>
                      <p>战略合作</p>
                    </li>
                    <li>
                      <p>商务合作</p>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <p>全国统一服务热线</p>
            <p>400-800-8996</p>
          </div>
        </div>
      </div>
      <!-- 轮播图 -->
      <div class="banner-box">
        <el-carousel :interval="5000" height="800px" >
          <el-carousel-item>
            <img src="../assets/image/1-2103021SHS95.jpg" alt="">
          </el-carousel-item>
          <el-carousel-item>
            <img src="../assets/image/1-210326094641E9.jpg" alt="">
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div v-else>移动</div>
  </div>
</template>

<script>
import store from '../store/index.js'
export default {
  name: 'main',
  data() {
    return {
      isEquipmentType: store.state.userAgent
    }
  },
  created() {
    console.log(this.isEquipmentType)
  },
  methods: {
  }
}
</script>

<style lang='less' scoped>
ul,
p {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
.main {
  // width: 1200px !important;
  margin: 0 auto !important;
  .header-main {
    position: fixed;
    top: 0;
    height: 96px;
    padding: 0 20px;
    width: 100%;
    background: #585858;
    display: flex;
    z-index: 1000;
    .header-logo {
      flex: 0.35;
      padding: 10px 0;
      > img {
        width: 100%;
        height: 100%;
      }
    }
    .header-nav {
      display: flex;
      flex: 1;
      padding: 20px 0;
      > div:nth-child(1) {
        flex: 1;
        > ul {
          display: flex;
          > li {
            flex: 1;
            text-align: center;
            cursor: pointer;
            > p {
              line-height: 56px;
              font-size: 18px;
              color: #fff;
            }
            .pptx-nav,
            .xmal-nav,
            .lxwm-nav {
              position: relative;
              top: 20px;
              display: none;
              background: rgba(0, 0, 0, 0.6);
              box-shadow: 0 13px 42px 11px rgb(0 0 0 / 5%);
              height: auto;
              overflow: hidden;
              width: 100%;
              animation: forward 0.4s ease 0s;
              > ul {
                > li {
                  height: 40px;
                  line-height: 40px;
                  > p {
                    color: #fff;
                    display: block;
                    font-size: 14px;
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
          line-height: 28px;
          font-size: 18px;
          color: #fff;
          cursor: pointer;
        }
        > p:nth-child(2) {
          font-size: 24px;
          font-weight: 600;
        }
      }
    }
  }
  .banner-box {
    margin-top: 96px;
  }
}

@keyframes forward {
  0% {
    top: 40px;
  }
  25% {
    top: 35px;
  }
  50% {
    top: 30px;
  }
  75% {
    top: 25px;
  }
  100% {
    top: 20px;
  }
}
</style>
<style lang='less'>
.main .el-carousel__item img {
  width: 100%;
}
</style>

