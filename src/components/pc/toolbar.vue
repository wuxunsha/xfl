<template>
  <div class="toolbar-box">
    <div class="toolbar">
      <ul>
        <li>
          <p>
            <span></span>
            微信咨询
          </p>
          <div class="zx-erm">
            <img src="../../assets/image/gt-erm.jpg" alt="">
            <h4>扫码一对一沟通</h4>
          </div>
        </li>
        <li>
          <p>
            <span class="lxdh-icon"></span>
            <span>联系电话</span>
          </p>
          <p>
            <span>0731-23108999</span>
          </p>
        </li>
        <!-- <li>
        <p>
          <span></span>
          回到顶部
        </p>
        </li>-->
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'toolbar',
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
.toolbar-box {
  .toolbar {
    width: 130px; /*no*/
    position: fixed;
    right: 15px; /*no*/
    top: 460px; /*no*/
    z-index: 999;
    > ul {
      > li {
        cursor: pointer;
        > p {
          > span:nth-child(1) {
            width: 24px; /*no*/
            height: 24px; /*no*/
            display: inline-block;
            vertical-align: middle;
            margin-right: 5px; /*no*/
          }
        }
      }
      > li:nth-child(1) {
        width: 130px; /*no*/
        height: 55px; /*no*/
        background: url(../../assets/image/rightfixicon.png) no-repeat -36px 0; /*no*/
        > p {
          color: #fff;
          font-size: 16px; /*no*/
          line-height: 48px; /*no*/
        }
        .zx-erm {
          display: none;
          width: 100px; /*no*/
          position: fixed;
          right: 150px; /*no*/
          top: 460px; /*no*/
          z-index: 999;
          padding: 15px 15px 0; /*no*/
          background: #e9bb5f;
          >img {
            width: 100%;
          }
          >h4 {
            height: 40px; /*no*/
            line-height: 40px; /*no*/
            text-align: center;
            color: #fff;
            font-size: 12px; /*no*/
            font-weight: 400;
          }
        }
      }
      > li:nth-child(1) {
        > p {
          > span {
            background: url(../../assets/image/rightfixicon.png) no-repeat 0 -33px; /*no*/
          }
        }
      }
      > li:nth-child(2) {
        width: 130px; /*no*/
        height: 45px; /*no*/
        background: #e9bb5f;
        > p {
          color: #fff;
          font-size: 16px; /*no*/
          line-height: 45px; /*no*/
          .lxdh-icon {
            background: url(../../assets/image/rightfixicon.png) no-repeat 0 -65px; /*no*/
          }
        }
        > p:nth-child(1) {
          display: block;
        }
        > p:nth-child(2) {
          display: none;
        }
      }
      > li:nth-child(1):hover {
        .zx-erm {
          display: block;
          animation: gtForward 0.1s ease 0s;
          animation-fill-mode: forwards;
        }
      }
      > li:nth-child(2):hover {
        > p:nth-child(1) {
          display: none;
        }
        > p:nth-child(2) {
          display: block;
          > span {
            display: contents;
          }
        }
      }
    }
  }
}

@keyframes gtForward {
  0% {
    right: 90px; /*no*/
  }
  25% {
    right: 105px; /*no*/
  }
  50% {
    right: 120px; /*no*/
  }
  75% {
    right: 135px; /*no*/
  }
  100% {
    right: 150px; /*no*/
  }
}
</style>

