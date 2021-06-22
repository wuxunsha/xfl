<template>
  <div class="questionnaires">
    <div v-if="isEquipmentType === 'pc'" class="pc"></div>
    <div v-else class="yd">
      <div class="maincontent" v-if="isFlag">
        <div class="coverimg">
          <img src="../assets/image/logo/yjzx-logo.jpg" alt>
        </div>
        <div class="maincontent-title">
          <h4>一键咨询</h4>
        </div>
        <div class="maincontent-name">
          <p>
            <span>您的尊称</span>
            <span>*</span>
          </p>
          <p>
            <van-field v-model="formData.name"/>
          </p>
        </div>
        <div class="maincontent-name">
          <p>
            <span>联系方式</span>
            <span>*</span>
          </p>
          <p>
            <van-field v-model="formData.phone" type="tel"/>
          </p>
        </div>
        <div class="maincontent-name">
          <p>
            <span>您的所在地</span>
            <span>*</span>
          </p>
          <p>
            <van-field v-model="formData.address" type="textarea" rows="4"/>
          </p>
        </div>
        <div class="maincontent-name">
          <p>
            <span>您的项目状态</span>
            <span>*</span>
          </p>
          <p>
            <van-radio-group v-model="formData.status">
              <van-radio name="1">A.未开盘</van-radio>
              <van-radio name="2">B.热销盘</van-radio>
              <van-radio name="3">C.尾盘</van-radio>
            </van-radio-group>
          </p>
        </div>
        <div class="submit-box">
          <p @click="submit">提交</p>
        </div>
      </div>
      <div v-else class="success-box">
        <div class="success-img">
          <img src="../assets/image/success.png" alt>
          <h4>提交成功！</h4>
          <p>我们已收到您提交的资料，非常感谢</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { save } from '@/api/index'
import store from '../store/index.js'
import { Toast } from 'vant'
export default {
  name: 'main',
  data() {
    return {
      isEquipmentType: store.state.userAgent,
      isFlag: true,
      formData: {
        name: '',
        address: '',
        phone: '',
        status: ''
      }
    }
  },
  created() {
    console.log(this.isEquipmentType)
  },
  methods: {
    // 提交
    submit() {
      if (this.formData.name === '') {
        Toast.fail('请输入您的尊称')
        return
      }
      if (this.formData.phone === '') {
        Toast.fail('请输入联系方式')
        return
      }
      if (this.formData.address === '') {
        Toast.fail('请输入所在地')
        return
      }
      if (this.formData.status === '') {
        Toast.fail('请选择您的项目状态')
        return
      }
      let _obj = {
        username: this.formData.name,
        mobile: this.formData.phone,
        address: this.formData.address,
        status: this.formData.status
      }
      save(_obj).then(res => {
        if(res.code === 0) {
          this.isFlag = false
        }
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
.questionnaires {
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
      .maincontent-title {
        padding: 0 40px;
        margin-top: 20px;
        > h4 {
          font-size: 36px;
          color: #0c9794;
          font-weight: 400;
          text-align: left;
          border-bottom: 2px solid #eee;
          padding: 16px 0;
        }
      }
      .maincontent-name {
        margin-top: 40px;
        padding: 0 80px;
        > p:nth-child(1) {
          text-align: left;
          > span {
            color: #333;
            font-size: 26px;
          }
          > span:nth-child(2) {
            color: red;
          }
        }
        > p:nth-child(2) {
          margin-top: 20px;
          .van-cell {
            border: 2px solid #ced4da;
            border-radius: 10px;
            line-height: 40px;
            font-size: 28px;
          }
          .van-radio {
            font-size: 28px;
            //   margin-bottom: 40px;
            overflow: unset;
            /deep/ .van-icon {
              font-size: 24px;
              border: 2px solid #c8c9cc;
              //   vertical-align: middle;
            }
            /deep/ .van-radio__label {
              line-height: 80px;
            }
            /deep/ .van-radio__icon {
              height: 32px;
              margin-right: 20px;
            }
          }
        }
      }
      .submit-box {
        width: 100%;
        text-align: center;
        margin-top: 120px;
        > p {
          display: inline-block;
          font-size: 28px;
          color: #fff;
          background: #0c9794;
          padding: 14px 60px;
          border-radius: 10px;
          font-weight: bold;
        }
      }
    }
    .success-box {
      font-size: 0;
      .success-img {
        width: 100%;
        height: 188px;
        text-align: center;
        margin-top: 200px;
        > img {
          width: 240px;
          height: 100%;
        }
        > h4 {
          color: #000000;
          margin: 20px;
          line-height: 25px;
          font-size: 52px;
          font-weight: 400;
        }
        >p {
            margin-top: 40px;
            color: #666;
            font-size: 28px;
        }
      }
    }
  }
}
</style>
<style lang="less">
.van-toast {
  font-size: 24px !important;
  width: auto;
}
</style>

