<template>
  <div class="footer">
    <ul>
      <li :class="active === item.id ? 'tabbarActive' : ''" v-for="item in navbarList" :key="item.text" @click="tabbarChange(item.id)">
        <img :src="item.url" alt="">
        <p>{{item.text}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['footerNavActive'],
  name: 'footerYd',
  data () {
    return {
      active: null,
      navbarList: [
        {
          id: 1,
          text: '电话咨询',
          url: require("../../assets/image/footer/fmenu1.png")
        },
        {
          id: 2,
          text: '品牌体系',
          url: require("../../assets/image/footer/fmenu2.png")
        },
        {
          id: 3,
          text: '项目案例',
          url: require("../../assets/image/footer/fmenu3.png")
        },
        {
          id: 4,
          text: '联系我们',
          url: require("../../assets/image/footer/fmenu4.png")
        }
      ]
    }
  },
  methods: {
    tabbarChange(id) {
      this.active = id
      if(id === 1) {
        let phoneNumber = 23108999
        window.location.href = 'tel://' + phoneNumber
      } else if(id === 2) {
        this.$router.push({
          path: '/pinpaitx'
        })
      } else if(id === 3) {
        this.$router.push({
          path: '/xiangmuanli'
        })
      } else if(id === 4) {
        this.$router.push({
          path: '/lxwm'
        })
      }
    }
  },
  created() {
    if(this.footerNavActive) {
      this.active = this.footerNavActive
    } else {
      this.active = 0
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
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 124px;
  background: #363636;
  z-index: 999;
  >ul {
    width: 100%;
    height: 100%;
    display: flex;
    >li {
      padding-top: 15px;
      flex: 1;
      height: 100%;
      >img {
        width: 42px;
        height: 42px;
      }
      >p {
        font-size: 26px;
        color: #fff;
      }
    }
    .tabbarActive {
      background: #e7bd6b;
    }
  }
}
</style>

