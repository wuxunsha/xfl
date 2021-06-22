<template>
  <div class="inquiry-list">
    <div v-if="isEquipmentType === 'pc'" class="pc"></div>
    <div v-else class="yd">
      <div class="maincontent">
        <div class="coverimg">
          <img src="../assets/image/logo/yjzx-logo.jpg" alt>
        </div>
        <div class="inquiry-content-box">
          <ul>
            <li>
              <div>
                <p>刘先生</p>
              </div>
              <div>
                <p>13678908765</p>
              </div>
              <div>
                <p>
                  <span>长沙市岳麓区梅溪湖街道合能璞丽8栋一单元2305</span>
                </p>
              </div>
              <div>
                <p>
                  <span>未开盘</span>
                </p>
                <p>2021-06-22</p>
              </div>
            </li>
            <li>
              <div>
                <p>刘先生</p>
              </div>
              <div>
                <p>13678908765</p>
              </div>
              <div>
                <p>
                  <span>长沙市岳麓区梅溪湖街道合能璞丽8栋一单元2305</span>
                </p>
              </div>
              <div>
                <p>
                  <span>未开盘</span>
                </p>
                <p>2021-06-22</p>
              </div>
            </li>
          </ul>
          <div class="yd-pagination">
            <van-pagination
              v-model="currentPage"
              :total-items="2"
              :show-page-size="5"
              force-ellipses
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../store/index.js'
import { Toast } from 'vant'
export default {
  name: 'main',
  data() {
    return {
      isEquipmentType: store.state.userAgent,
      currentPage: 1
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
p,
h4 {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
.inquiry-list {
  // width: 1200px !important;
  margin: 0 auto !important;

  /*-----PC---------*/
  .pc {
  }

  /*-----移动---------*/
  .yd {
    padding-bottom: 120px;
    .maincontent {
      width: 100%;
      .coverimg {
        width: 100%;
        height: 600px;
        > img {
          width: 100%;
          height: 100%;
        }
      }
      .inquiry-content-box {
        padding: 20px 40px;
        >ul {
          >li {
            padding: 20px 0;
            border-bottom: 2px solid #ccc;
            >div:nth-child(1) {
              >p {
                font-size: 26px;
                text-align: left;
                color: #666;
                line-height: 40px;
              }
            }
            >div:nth-child(2) {
              >p {
                font-size: 26px;
                text-align: left;
                color: #999;
                line-height: 40px;
              }
            }
            >div:nth-child(3) {
              padding: 10px 0;
              >p {
                font-size: 28px;
                color: #000;
                line-height: 40px;
                text-align: left;
              }
            }
            >div:nth-child(4) {
              display: flex;
              >p {
                flex: 1;
                font-size: 26px;
              }
              >p:nth-child(1) {
                text-align: left;
                color: #666;
              }
              >p:nth-child(2) {
                text-align: right;
                color: #999;
              }
            }
          }
        }
        .yd-pagination {
          padding: 40px 0;
        }
      }
    }
  }
}
</style>
<style lang="less">
.inquiry-list .van-toast {
  font-size: 24px !important;
  width: auto;
}
.inquiry-list {
  .yd {
    .inquiry-content-box {
      .van-pagination {
        font-size: 24px;
        justify-content: center;
      }
      .van-pagination__item {
        color: #000;
        font-size: 24px;
        margin: 0 10px;
        border: 2px solid #d8dadf;
        padding: 0 24px;
        flex: inherit;
      }
      .van-pagination__item--active {
        background-color: #333;
        color: #fff;
        border: 2px solid #333;
      }
      .van-pagination__item:active {
        background: none;
      }
    }
  }
}
</style>

