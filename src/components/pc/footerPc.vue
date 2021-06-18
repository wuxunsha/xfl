<template>
  <div class="footer">
    <div class="content">
      <div class="footer-top">
        <div>
          <img src="../../assets/image/logo/footer-logo.png" alt>
        </div>
        <div>
          <p>
            <span class="iconfont icon-dianhua"></span>
            <span>0731-23108999</span>
          </p>
          <p>邮 箱：xinfanglue188@163.com</p>
          <p>地 址：湖南省醴陵市城南立三大道兰天宾馆旁</p>
        </div>
        <div>
          <div>
            <img src="../../assets/image/erweima.jpg" alt>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="footer-text">
          <div>
            <p>
              <span>Copyright © 搜好房 版权所有</span>
              <span>网站地图</span>
              <span>苏ICP备2020050978号-2</span>
            </p>
          </div>
    </div>-->
  </div>
</template>

<script>
export default {
  name: 'headerPc',
  data() {
    return {
    }
  },
  methods: {
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
.footer {
  // height: 312px;
  background: #191919;
  .content {
    width: 1200px; /*no*/
    margin: 0 auto;
    padding-top: 60px; /*no*/
    .footer-top {
      padding: 30px 0; /*no*/
      border-top: 1px solid #353535; /*no*/
      display: flex;
      > div:nth-child(1) {
        flex: 1;
        text-align: left;
        > img {
          width: 60%;
        }
      }
      > div:nth-child(2) {
        width: 340px; /*no*/
        text-align: left;
        > p:nth-child(1),
        > p:nth-child(2),
        > p:nth-child(3) {
          color: #999;
          font-size: 14px; /*no*/
          line-height: 36px; /*no*/
        }
        > p:nth-child(1) {
          > span {
            margin-right: 20px;
            font-size: 32px; /*no*/
          }
        }
      }
      > div:nth-child(3) {
        width: 130px; /*no*/
        > div {
          width: 130px; /*no*/
          height: 130px; /*no*/
          border: 5px solid #666; /*no*/
          > img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
  .footer-text {
    border-top: 1px solid #353535; /*no*/
    > div:nth-child(1) {
      width: 1200px; /*no*/
      margin: 0 auto;
      > p {
        line-height: 60px; /*no*/
        color: #999;
        font-size: 12px; /*no*/
        text-align: left;
      }
    }
  }
}
</style>

