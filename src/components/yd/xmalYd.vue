<template>
  <div class="yd-pptx-xmal">
    <ul>
      <li @click="ydXmalDetails(1)">
        <p>
          <img src="../../assets/image/xmal/mdlhy.jpg" alt>
        </p>
        <p>马德里花园</p>
      </li>
      <li @click="ydXmalDetails(2)">
        <p>
          <img src="../../assets/image/xmal/ylw.jpg" alt>
        </p>
        <p>御龙湾</p>
      </li>
      <li @click="ydXmalDetails(3)">
        <p>
          <img src="../../assets/image/xmal/bjyh.jpg" alt>
        </p>
        <p>滨江壹号</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'xmalYd',
  data() {
    return {
    }
  },
  methods: {
    // 地产项目详情
    ydXmalDetails(type) {
      this.$router.push({
        path: '/dcxmDetails',
        query: {
          type: type
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
.yd-pptx-xmal {
  margin-top: 60px;
  > ul {
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
    > li {
      width: 46%;
      margin: 0 2% 30px;
      padding: 20px 0;
      background: #fff;
      > p:nth-child(1) {
        height: 250px;
        > img {
          width: 100%;
          height: 100%;
        }
      }
      > p:nth-child(2) {
        padding: 20px 0;
        font-size: 28px;
        padding-top: 20px;
        border-bottom: 2px solid #ddd;
        color: #000;
      }
    }
  }
}
</style>

