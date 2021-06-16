<template>
  <div class="main">
    <div v-if="isEquipmentType === 'pc'" class="pc">
      <!-- 顶部导航栏 -->
      <div :class="offsetFlag ? 'header-main height-opacity' : 'header-main'">
        <div class="header-logo">
          <img src="../assets/image/logo/logo.png" alt>
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
      <div class="banner-box" ref="bannerImage">
        <el-carousel :interval="5000" height="630px">
          <el-carousel-item>
            <img src="../assets/image/banner/1-2103021SHS95.jpg" alt>
          </el-carousel-item>
          <el-carousel-item>
            <img src="../assets/image/banner/banner01.jpg" alt>
          </el-carousel-item>
          <el-carousel-item>
            <img src="../assets/image/banner/banner02.jpg" alt>
          </el-carousel-item>
          <el-carousel-item>
            <img src="../assets/image/banner/banner03.jpg" alt>
          </el-carousel-item>
        </el-carousel>
      </div>
      <!-- 关于我们 -->
      <div class="about-us">
        <div class="about-us-title">
          <h4>关于我们</h4>
          <p>房地产营销全业态创新发展模式践行者</p>
        </div>
        <div class="about-us-content">
          <div class="about-us-content-text">
            <h4>
              "Practitioner of the innovative development model of the whole business of real estate marketing"
            </h4>
            <p>新方略信息科技有限公司隶属于佳银集团旗下全资子公司，凭借多年房地产开发经验及家装产业链的资源整合，全心致力于房地产+全屋设计+全屋整装+C2F全产品供应链一体化新模式的探索，以前瞻视野和创新驱动聚力打造一站式全品类家装产品供应以及精装服务的升级转型。</p>
            <p>公司始终以客户需求为中心，坚持全产业链一体化多方共赢的可持续经营理念，与国内外知名品牌厂商集中采购深度合作，去中间化以及C2F全产业供应链流通环节无缝衔接，充分发挥在基础装修、主材产品、固装家具、活动家具、软装配饰、全屋家电等家居资源的规模效应和集采优势，为实现客户拎包入住提供一站式最具性价比优势的整体家装解决方案。</p>
            <div class="ibrand-num">
              <ul>
                <li>
                  <p>
                    <span>
                      <animate-number from="1" to="60" ref="myNum01"></animate-number>
                    </span>
                    <span>余</span>
                    <span>城</span>
                  </p>
                  <p>项目落地</p>
                </li>
                <li>
                  <p>
                    <span>
                      <animate-number from="1" to="120" ref="myNum02"></animate-number>
                    </span>
                    <span>亿</span>
                    <span>+</span>
                  </p>
                  <p>成交额</p>
                </li>
                <li>
                  <p>
                    <span>
                      <animate-number from="1" to="24" ref="myNum03"></animate-number>
                    </span>
                    <span>小时</span>
                  </p>
                  <p>无条件随时安排发货</p>
                </li>
                <li>
                  <p>
                    <span>
                      <animate-number from="1" to="180" ref="myNum04"></animate-number>
                    </span>
                    <span>万</span>
                    <span>+</span>
                  </p>
                  <p>项目覆盖面积</p>
                </li>
              </ul>
            </div>
          </div>
          <div class="about-us-content-image">
            <img src="../assets/image/gywm/gywm.png" alt>
          </div>
        </div>
      </div>
      <!-- 品牌优势 -->
      <div class="main3">
        <div class="main3_l">
          <div class="title">
            <h4>品 牌 优 势</h4>
            <p>一站式极具性价比优势</p>
          </div>
          <div class="main3_1b">
            <ul class="main3_1b_1">
              <!-- <li>
                <div class="main3_1b3">
                  <img src="../assets/image/yd/yd-supp11.png" alt>
                  <p>拎包入住</p>
                </div>
                <div class="main3_1b2">
                  <p class="main3_1b4">拎包入住</p>
                  <p
                    class="txtyc3"
                  >坚持全产业链一体化共赢可持续发展战略。助力开发商快速回款、代理商快速清盘、客户装修成本最小化、厂商销售效能化，致力于打造“厂商、开发商、代理商、客户”四方共赢局面。</p>
                </div>
              </li>
              <li>
                <div class="main3_1b3">
                  <img src="../assets/image/yd/yd-supp22.png" alt>
                  <p>整体家装</p>
                </div>
                <div class="main3_1b2">
                  <p class="main3_1b4">整体家装</p>
                  <p class="txtyc3">扁平化运营，科学化管理，拥有成熟的去中间化、标准化极速低成本运作、项目直营管理模式。</p>
                </div>
              </li>
              <li>
                <div class="main3_1b3">
                  <img src="../assets/image/yd/yd-supp33.png" alt>
                  <p>C2F</p>
                </div>
                <div class="main3_1b2">
                  <p class="main3_1b4">C2F</p>
                  <p
                    class="txtyc3"
                  >全维通用型即时嫁接模式。针对不同的产品类型，采用灵活的嫁接方案，现房、期房、车位、蓄水期、开盘前、持销期均可嫁接；真正做到全系产品的一键植入。</p>
                </div>
              </li>
              <li>
                <div class="main3_1b3">
                  <img src="../assets/image/yd/yd-supp44.png" alt>
                  <p>全产业链服务平台</p>
                </div>
                <div class="main3_1b2">
                  <p class="main3_1b4">全产业链服务平台</p>
                  <p class="txtyc3">我们提供一站式差异化闭环营销服务。根据项目特点，打造跨区域差异化营销模式，提升项目附加值，增加营销爆点。</p>
                </div>
              </li> -->
              <li>
                <div class="main3_1b3">
                  <img src="../assets/image/yd/yd-supp55.png" alt>
                  <p>产业联动共赢</p>
                </div>
                <div class="main3_1b2">
                  <p class="main3_1b4">产业联动共赢</p>
                  <p class="txtyc3">通过把装修主材、家具、全屋家居、家电等产品组合成套装包，利用产品本身的价值杠杆及品牌优势，形成房产引流和销售的有效工具，助力开发商资金回笼。</p>
                </div>
              </li>
              <li>
                <div class="main3_1b3">
                  <img src="../assets/image/yd/yd-supp66.png" alt>
                  <p>厂商源头集采</p>
                </div>
                <div class="main3_1b2">
                  <p class="main3_1b4">厂商源头集采</p>
                  <p class="txtyc3">整合产业链上下游优势资源，整装产品采用去中间商、厂家源头供货的C2F全产业链集采平台，严选臻品，与产商直接砍价，以实现产品采购成本的最小化。</p>
                </div>
              </li>
              <li>
                <div class="main3_1b3">
                  <img src="../assets/image/yd/yd-supp77.png" alt>
                  <p>营销策略升级</p>
                </div>
                <div class="main3_1b2">
                  <p class="main3_1b4">营销策略升级</p>
                  <p class="txtyc3">不以破坏楼盘价值为代价，通过买房送套装礼包，送全屋精装的模式植入，拉伸楼盘价值，打造营销爆点，解决消费者后顾之忧，给予超预期优惠，以价值升级重建置业信心，达到快速营销。</p>
                </div>
              </li>
              <li>
                <div class="main3_1b3">
                  <img src="../assets/image/yd/yd-supp88.png" alt>
                  <p>赋能快销去化</p>
                </div>
                <div class="main3_1b2">
                  <p class="main3_1b4">赋能快销去化</p>
                  <p
                    class="txtyc3"
                  >从项目营销难点、价值闭环重塑、导流活动流量爆破等多维角度，结合事件营销、落地赋能、强势运营主场等非常规操盘手法，针对楼盘营销的不同阶段，实现商业、住宅、公寓、车位的快速去库存。</p>
                </div>
              </li>
              <li>
                <div class="main3_1b3">
                  <img src="../assets/image/yd/yd-supp44.png" alt>
                  <p>全程贴心服务</p>
                </div>
                <div class="main3_1b2">
                  <p class="main3_1b4">全程贴心服务</p>
                  <p
                    class="txtyc3"
                  >国内外知名高端家装品牌全系列产品套餐，通过精装房场景化、体验式的全案呈现，实现客户菜单式选择，升舱式服务，可升级可定制，厂商直供（包运费、可随时安排发货），统一售后贴心服务。</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 买房送装修 -->
      <div class="mfzx">
        <div class="content">
          <div class="titis">
            <h4>买房赠送
              <span>价值12万</span>
              品牌套装包</h4>
            <p>一站式全屋整装 拎包入住</p>
          </div>
          <div class="yf_c">
            <ul>
              <li>
                <div>
                  <p>4K高清电视</p>
                  <p>自主更换开机图片、视频，可根据使用场景自主进行替换</p>
                </div>
              </li>
              <li>
                <div>
                  <p>对开门冰箱</p>
                  <p>三档变温，超大冷冻</p>
                </div>
              </li>
              <li>
                <div>
                  <p>3匹智能空调</p>
                  <p>0.1℃精准控温技术，i-clean清洁，4DD全直流变频技术</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 整装科技 -->
      <div class="zzkj">
        <div class="content">
          <div class="titis">
            <h4>整 装 科 技</h4>
            <p>更高品质生活 更多装修风格选择</p>
          </div>
          <div class="swiper">
            <el-carousel :interval="4000" type="card" height="320px" indicator-position="none">
              <el-carousel-item v-for="item in imgLIst" :key="item.id">
                <div class="swiper-image-box">
                  <el-image :src="item.src" class="swiper-image"></el-image>
                  <div class="swiper-image-moda" @click="zzkjDetails(item.title)">
                    <p>{{item.title}}</p>
                    <p>
                      <span>了解详情</span>
                      <i class="el-icon-arrow-right"></i>
                    </p>
                  </div>
                </div>
                <p class="swiper-title">{{item.title}}</p>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
      </div>
      <!-- 精装加载 -->
      <dir class="jzjz">
        <div class="content">
          <div class="titis">
            <h4>精 装 加 载</h4>
            <p>精装交付空间定制化服务</p>
          </div>
          <div class="jzjz-al">
            <ul>
              <li>
                <div>
                  <img src="../assets/image/xmal/mdlhy.jpg" alt>
                </div>
                <div>
                  <h4>马德里花园</h4>
                  <div>
                    <p>预约</p>
                    <p>咨询</p>
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <img src="../assets/image/xmal/ylw.jpg" alt>
                </div>
                <div>
                  <h4>御龙湾</h4>
                  <div>
                    <p>预约</p>
                    <p>咨询</p>
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <img src="../assets/image/xmal/bjyh.jpg" alt>
                </div>
                <div>
                  <h4>滨江壹号</h4>
                  <div>
                    <p>预约</p>
                    <p>咨询</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </dir>
      <!-- 项目案例 -->
      <div class="xmal">
        <div class="content">
          <div class="titis">
            <h4>项 目 案 例</h4>
            <p>重塑房地产快销去化新方略</p>
          </div>
          <div class="swiper">
            <el-carousel :interval="4000" type="card" height="390px" indicator-position="none">
              <el-carousel-item v-for="item in xmalLIst" :key="item.id">
                <div class="swiper-image-box">
                  <el-image :src="item.src" class="swiper-image"></el-image>
                </div>
                <p class="swiper-title">{{item.title}}</p>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
      </div>
      <!-- 供应链资源 -->
      <!-- <div class="gylzy">
        <div class="content">
          <div class="titis">
            <h4>部 分 供 应 链 资 源</h4>
            <p>专注品质合作 精诚共襄盛誉</p>
          </div>
          <div class="gylzy-details">
            <div class="gylzy-nav">
              <ul>
                <li
                  :class="item.id === gylIsAtive ? 'isActive' : ''"
                  v-for="item in gylNavList"
                  :key="item.id"
                  @mouseover="gylNavChange(item.id)"
                >
                  <p>{{item.title}}</p>
                </li>
              </ul>
            </div>
            <div class="gylzy-list">
              <img src="../assets/image/appliance.jpg" alt v-if="gylIsAtive === 1">
              <img src="../assets/image/bathroom.jpg" alt v-if="gylIsAtive === 2">
              <img src="../assets/image/material.jpg" alt v-if="gylIsAtive === 3">
            </div>
          </div>
        </div>
      </div> -->
      <!-- 服务支持 -->
      <div class="fwzc">
        <div class="main3_l">
          <div class="title">
            <h4>服 务 支 持</h4>
            <p>一站式整体家装服务提供商</p>
          </div>
          <div class="main3_1b">
            <ul class="main3_1b_1">
              <li>
                <div class="main3_1b3">
                  <img src="../assets/image/fwys/jiangx1.png" alt>
                  <p>市场评估支持</p>
                </div>
              </li>
              <li>
                <div class="main3_1b3">
                  <img src="../assets/image/fwys/jiangx2.png" alt>
                  <p>项目定制支持</p>
                </div>
              </li>
              <li>
                <div class="main3_1b3">
                  <img src="../assets/image/fwys/jiangx3.png" alt>
                  <p>装修效果支持</p>
                </div>
              </li>
              <li>
                <div class="main3_1b3">
                  <img src="../assets/image/fwys/jiangx4.png" alt>
                  <p>培训指导支持</p>
                </div>
              </li>
              <li>
                <div class="main3_1b3">
                  <img src="../assets/image/fwys/jiangx5.png" alt>
                  <p>客户定制支持</p>
                </div>
              </li>
              <li>
                <div class="main3_1b3">
                  <img src="../assets/image/fwys/jiangx6.png" alt>
                  <p>营销策划支持</p>
                </div>
              </li>
              <li>
                <div class="main3_1b3">
                  <img src="../assets/image/fwys/jiangx7.png" alt>
                  <p>发货服务支持</p>
                </div>
              </li>
              <li>
                <div class="main3_1b3">
                  <img src="../assets/image/fwys/jiangx8.png" alt>
                  <p>门店管理支持</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 战略合作 -->
      <div class="zlhz">
        <div class="content">
          <div class="titis">
            <h4>战 略 合 作</h4>
            <p>已成功服务上百家企业</p>
          </div>
          <div class="zlhz-img">
            <ul>
              <li>
                <img src="../assets/image/hz1.jpg" alt>
              </li>
              <li>
                <img src="../assets/image/hz2.jpg" alt>
              </li>
              <li>
                <img src="../assets/image/hz3.jpg" alt>
              </li>
              <li>
                <img src="../assets/image/hz4.jpg" alt>
              </li>
              <li>
                <img src="../assets/image/hz5.jpg" alt>
              </li>
              <li>
                <img src="../assets/image/hz6.jpg" alt>
              </li>
              <li>
                <img src="../assets/image/hz7.jpg" alt>
              </li>
              <li>
                <img src="../assets/image/hz8.jpg" alt>
              </li>
              <li>
                <img src="../assets/image/hz9.jpg" alt>
              </li>
              <li>
                <img src="../assets/image/hz10.jpg" alt>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 相关资讯 -->
      <div class="xgzx">
        <div class="content">
          <div class="titis">
            <h4>相 关 资 讯</h4>
            <p>关注搜好房 掌握一手资讯</p>
          </div>
          <div class="xgzx-content">
            <div class="xgzx-swiper">
              <el-carousel :interval="4000" height="410px">
                <el-carousel-item v-for="item in xgzxLIst" :key="item.id">
                  <div class="swiper-image-box">
                    <el-image :src="item.src" class="swiper-image"></el-image>
                  </div>
                  <p class="swiper-title">{{item.title}}</p>
                  <p class="swiper-text">{{item.text}}</p>
                </el-carousel-item>
              </el-carousel>
            </div>
            <div class="xgzx-details">
              <ul>
                <li>
                  <div>
                    <p>10</p>
                    <p>2021-05</p>
                  </div>
                  <div>
                    <h4>“领创深耕·筑梦未来”仁汇集团十周年庆暨搜好房整装科技正式发布，三大战略体系深化布局</h4>
                    <p>2021年4月25日，以“领创深耕·筑梦未来”为主题的仁汇集团十周年庆暨搜好房整装发布...</p>
                  </div>
                </li>
                <li>
                  <div>
                    <p>30</p>
                    <p>2021-04</p>
                  </div>
                  <div>
                    <h4>搜好房：20家品牌方出席整装发布会，搜好房战略实力落子，新征程再出发</h4>
                    <p>4月，搜好房整装科技发布会在苏召开，西门子，TCL，欧派，大自然，箭牌，马可波罗，...</p>
                  </div>
                </li>
                <li>
                  <div>
                    <p>27</p>
                    <p>2021-05</p>
                  </div>
                  <div>
                    <h4>搜好房：前瞻布局加速发力精装后市场，定制加载打造幸福人居新生活</h4>
                    <p>搜好房以前瞻性的眼光紧跟行业风口，构建精装加载战略生态体系，纵横布局精装后市...</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="xgzx-gd">
            <p>
              <span>
                查看更多
                <i class="el-icon-d-arrow-right"></i>
              </span>
            </p>
          </div>
        </div>
      </div>
      <!-- 底部 -->
      <div class="footer">
        <div class="content">
          <div class="footer-top">
            <div>
              <img src="../assets/image/logo/footer-logo.png" alt>
            </div>
            <div>
              <p>
                <img src="../assets/image/ftel.png" alt>
              </p>
              <p>邮 箱：souhaofang@aliyun.com</p>
              <p>地 址：苏州相城区人民路4555号</p>
              <p>繁花中心A楼西座7层</p>
            </div>
            <div>
              <div>
                <img src="../assets/image/douyin.png" alt>
              </div>
              <div>
                <img src="../assets/image/erweima.png" alt>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-text">
          <div>
            <p>
              <span>Copyright © 搜好房 版权所有</span>
              <span>网站地图</span>
              <span>苏ICP备2020050978号-2</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="yd">
      <!-- 顶部导航栏 -->
      <div class="yd-header">
        <div class="header-logo">
          <img src="../assets/image/logo/h5-logo.png" alt="">
        </div>
        <div class="header-navbar">
          <ul>
            <li>
              <span>品牌</span>
            </li>
            <li>
              <span>资讯</span>
            </li>
            <li>
              <span>联系</span>
            </li>
          </ul>
        </div>
        <div class="header-nav" @click="h5Nav">
          <img src="../assets/image/yd-header/menu.png" alt="">
        </div>
      </div>
      <!-- 轮播图 -->
      <div class="yd-swipe">
        <van-swipe class="my-swipe" :autoplay="4000">
          <van-swipe-item>
            <img src="../assets/image/banner/1-2103021SHS95.jpg" alt>
          </van-swipe-item>
          <van-swipe-item>
            <img src="../assets/image/banner/banner01.jpg" alt>
          </van-swipe-item>
          <van-swipe-item>
            <img src="../assets/image/banner/banner02.jpg" alt>
          </van-swipe-item>
          <van-swipe-item>
            <img src="../assets/image/banner/banner03.jpg" alt>
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="yd-numb">
        <ul>
          <li>
            <p>
              <span>60</span>
              <span>余</span>
              <span>城</span>
            </p>
              <p>项目落地</p>
          </li>
          <li>
            <p>
              <span>120</span>
              <span>亿</span>
              <span>+</span>
            </p>
              <p>成交额</p>
          </li>
          <li>
            <p>
              <span>24</span>
              <span>H</span>
            </p>
              <p>无条件随时安排发货</p>
          </li>
          <li>
            <p>
              <span>180</span>
              <span>万</span>
              <span>+</span>
            </p>
              <p>项目覆盖面积</p>
          </li>
        </ul>
      </div>
      <!-- 品牌优势 -->
      <div class="yd-main">
        <div class="main3_l">
          <div class="title">
            <h4>品 牌 优 势</h4>
            <p>一站式极具性价比优势</p>
          </div>
          <div class="main3_1b">
            <ul class="main3_1b_1">
              <!-- <li>
                <div class="main3_1b3">
                  <img src="../assets/image/yd/yd-supp11.png" alt>
                  <p>拎包入住</p>
                </div>
              </li>
              <li>
                <div class="main3_1b3">
                  <img src="../assets/image/yd/yd-supp22.png" alt>
                  <p>整体家装</p>
                </div>
              </li>
              <li>
                <div class="main3_1b3">
                  <img src="../assets/image/yd/yd-supp33.png" alt>
                  <p>C2F</p>
                </div>
              </li>
              <li>
                <div class="main3_1b3">
                  <img src="../assets/image/yd/yd-supp44.png" alt>
                  <p>全产业链服务平台</p>
                </div>
              </li> -->
              <li>
                <div class="main3_1b3">
                  <img src="../assets/image/yd/yd-supp55.png" alt>
                  <p>产业联动共赢</p>
                </div>
              </li>
              <li>
                <div class="main3_1b3">
                  <img src="../assets/image/yd/yd-supp66.png" alt>
                  <p>厂商源头集采</p>
                </div>
              </li>
              <li>
                <div class="main3_1b3">
                  <img src="../assets/image/yd/yd-supp77.png" alt>
                  <p>营销策略升级</p>
                </div>
              </li>
              <li>
                <div class="main3_1b3">
                  <img src="../assets/image/yd/yd-supp88.png" alt>
                  <p>赋能快销去化</p>
                </div>
              </li>
              <li>
                <div class="main3_1b3">
                  <img src="../assets/image/yd/yd-supp44.png" alt>
                  <p>全程贴心服务</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 买房送装修 -->
      <div class="yd-mfzx">
        <div class="content">
          <div class="titis">
            <h4>买房赠送
              <span>价值12万</span>
              品牌套装包</h4>
            <p>一站式全屋整装 拎包入住</p>
          </div>
          <div class="yf_c">
            <ul>
              <li>
                <div>
                  <p>4K高清电视</p>
                  <p>自主更换开机图片、视频，可根据使用场景自主进行替换</p>
                </div>
              </li>
              <li>
                <div>
                  <p>对开门冰箱</p>
                  <p>三档变温，超大冷冻</p>
                </div>
              </li>
              <li>
                <div>
                  <p>3匹智能空调</p>
                  <p>0.1℃精准控温技术，i-clean清洁，4DD全直流变频技术</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 项目案例 -->
      <div class="yd-xmal">
        <div class="content">
          <div class="titis">
            <h4>项 目 案 例</h4>
            <p>更高品质生活 更多装修风格选择</p>
          </div>
          <div class="yd-xmal-swipe">
            <van-swipe class="my-swipe" :autoplay="4000">
              <van-swipe-item v-for="(item,index) in ydZxfgLIst" :key="index">
                <img :src="item.src" alt>
              </van-swipe-item>
            </van-swipe>
          </div>
        </div>
      </div>
      <!-- 精装加载 -->
      <div class="yd-jzjz">
        <div class="content">
          <div class="titis">
            <h4>精 装 加 载</h4>
            <p>精装产业 未来布局</p>
          </div>
          <div class="yd-jzjz-list">
            <ul>
              <li>
                <p>
                  <img src="../assets/image/xmal/mdlhy.jpg" alt="">
                </p>
                <p>马德里花园</p>
              </li>
              <li>
                <p>
                  <img src="../assets/image/xmal/ylw.jpg" alt="">
                </p>
                <p>御龙湾</p>
              </li>
              <li>
                <p>
                  <img src="../assets/image/xmal/bjyh.jpg" alt="">
                </p>
                <p>滨江壹号</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 服务支持 -->
      <div class="yd-fwzc">
        <div class="main3_l">
          <div class="title">
            <h4>服 务 优 势</h4>
            <p>匠心服务品质争先</p>
          </div>
          <div class="main3_1b">
            <ul class="main3_1b_1">
              <li>
                <div class="main3_1b3">
                  <img src="../assets/image/fwys/jiangx1.png" alt>
                  <p>市场评估支持</p>
                </div>
              </li>
              <li>
                <div class="main3_1b3">
                  <img src="../assets/image/fwys/jiangx2.png" alt>
                  <p>项目定制支持</p>
                </div>
              </li>
              <li>
                <div class="main3_1b3">
                  <img src="../assets/image/fwys/jiangx3.png" alt>
                  <p>装修效果支持</p>
                </div>
              </li>
              <li>
                <div class="main3_1b3">
                  <img src="../assets/image/fwys/jiangx4.png" alt>
                  <p>培训指导支持</p>
                </div>
              </li>
              <li>
                <div class="main3_1b3">
                  <img src="../assets/image/fwys/jiangx5.png" alt>
                  <p>客户定制支持</p>
                </div>
              </li>
              <li>
                <div class="main3_1b3">
                  <img src="../assets/image/fwys/jiangx6.png" alt>
                  <p>营销策划支持</p>
                </div>
              </li>
              <li>
                <div class="main3_1b3">
                  <img src="../assets/image/fwys/jiangx7.png" alt>
                  <p>发货服务支持</p>
                </div>
              </li>
              <li>
                <div class="main3_1b3">
                  <img src="../assets/image/fwys/jiangx8.png" alt>
                  <p>门店管理支持</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <myFooter :footerNavActive="1"></myFooter>
    </div>

    <!-- 顶部导航栏弹窗 -->
    <div class="navTop-dialog" v-if="navTopShow">
      <ul>
        <li>
          <p>网站首页</p>
        </li>
        <li>
          <p>品牌形象</p>
          <p>
            <van-icon name="arrow" />
          </p>
        </li>
        <li>
          <p>品牌体系</p>
          <p>
            <van-icon name="arrow" />
          </p>
        </li>
        <li>
          <p>项目案例</p>
          <p>
            <van-icon name="arrow" />
          </p>
        </li>
        <li>
          <p>资讯中心</p>
          <p>
            <van-icon name="arrow" />
          </p>
        </li>
        <li>
          <p>联系我们</p>
          <p>
            <van-icon name="arrow" />
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import store from '../store/index.js'
import myFooter from '../components/footer.vue'
export default {
  name: 'main',
  data() {
    return {
      isEquipmentType: store.state.userAgent,
      offsetFlag: false,
      imgLIst: [
        {
          id: "carousel-item-1",
          src: require("../assets/image/zzkj/xzsjy.png"),
          title: '新中式简约'
        },
        {
          id: "carousel-item-2",
          src: require("../assets/image/zzkj/xdqszs.png"),
          title: '现代轻奢'
        },
        {
          id: "carousel-item-3",
          src: require("../assets/image/zzkj/jyos.png"),
          title: '简约欧式'
        },
        {
          id: "carousel-item-4",
          src: require("../assets/image/zzkj/xdhbh.png"),
          title: '现代黑白灰'
        }
      ],
      xmalLIst: [
        {
          id: "carousel-xmal-1",
          src: require("../assets/image/xmal/mdlhy.jpg"),
          title: '马德里花园'
        },
        {
          id: "carousel-xmal-2",
          src: require("../assets/image/xmal/ylw.jpg"),
          title: '御龙湾'
        },
        {
          id: "carousel-xmal-3",
          src: require("../assets/image/xmal/bjyh.jpg"),
          title: '滨江壹号'
        }
      ],
      gylIsAtive: 1,
      gylNavList: [
        {
          id: 1,
          title: '家电类'
        },
        {
          id: 2,
          title: '卫浴类'
        },
        {
          id: 3,
          title: '主材类'
        }
      ],
      xgzxLIst: [
        {
          id: "carousel-xgzx-1",
          src: require("../assets/image/1-210510102945933-lp.png"),
          title: '“领创深耕·筑梦未来”仁汇集团十周年庆暨搜好房整装科技正式发布，三大战略体系深化布局',
          text: '2021年4月25日，以“领创深耕·筑梦未来”为主题的仁汇集团十周年庆暨搜好房整装发布...'
        },
        {
          id: "carousel-xgzx-2",
          src: require("../assets/image/1-210510111214232-lp.png"),
          title: '搜好房：20家品牌方出席整装发布会，搜好房战略实力落子，新征程再出发',
          text: '4月，搜好房整装科技发布会在苏召开，西门子，TCL，欧派，大自然，箭牌，马可波罗，...'
        },
        {
          id: "carousel-xgzx-3",
          src: require("../assets/image/1-21052GGP5331-lp.png"),
          title: '搜好房：前瞻布局加速发力精装后市场，定制加载打造幸福人居新生活',
          text: '搜好房以前瞻性的眼光紧跟行业风口，构建精装加载战略生态体系，纵横布局精装后市...'
        },
        {
          id: "carousel-xgzx-4",
          src: require("../assets/image/1-2105191G040R4-lp.png"),
          title: '搜好房整装：甄选苏式精工，初心礼敬时代，匠心雕镂时光',
          text: '搜好房以匠选苏式精工的笃正态度对待每一次家装施工，拥有全栈资深装工团队，全屋...'
        }
      ],
      navTopShow: false,
      // 移动端
      ydZxfgLIst: [
        {
          id: "carousel-yd-zxfg-1",
          src: require("../assets/image/zzkj/yd-xzsjy.jpg"),
          title: '新中式简约'
        },
        {
          id: "carousel-yd-zxfg-2",
          src: require("../assets/image/zzkj/yd-xdqs.jpg"),
          title: '现代轻奢'
        },
        {
          id: "carousel-yd-zxfg-3",
          src: require("../assets/image/zzkj/yd-jyos.jpg"),
          title: '简约欧式'
        },
        {
          id: "carousel-yd-zxfg-4",
          src: require("../assets/image/zzkj/yd-xdhbh.jpg"),
          title: '现代黑白灰'
        }
      ]
    }
  },
  components: {
    myFooter
  },
  created() {
    console.log(this.isEquipmentType)
  },
  methods: {
    // 了解整装科技详情
    zzkjDetails(title) {
      console.log(title)
    },
    // 供应链资源类型改变
    gylNavChange(id) {
      this.gylIsAtive = id
    },
    // 打开H5导航栏
    h5Nav() {
      this.navTopShow = !this.navTopShow
    },
    // 返回一个特定的 DOM 节点，作为挂载的父节点
    getContainer() {
      return document.querySelector('.yd-header');
    },
    handleScrollx() {
      this.$refs.myNum01.start()
      this.$refs.myNum02.start()
      this.$refs.myNum03.start()
      this.$refs.myNum04.start()
      let topOffset = this.$refs.bannerImage.getBoundingClientRect().top
      if (topOffset < 0) {
        this.offsetFlag = true
      } else {
        this.offsetFlag = false
      }
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScrollx, true)
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
.main {
  // width: 1200px !important;
  margin: 0 auto !important;

  /*-----PC---------*/
  .pc {
    .header-main {
      position: fixed;
      top: 0;
      height: 96px; /*no*/
      padding: 0 20px; /*no*/
      width: 100%;
      background: #585858;
      display: flex;
      z-index: 1000;
      .header-logo {
        flex: 0.35;
        padding: 10px 0; /*no*/
        margin-top: 20px; /*no*/
        > img {
          width: 100%;
          height: 80%;
        }
      }
      .header-nav {
        display: flex;
        flex: 1;
        padding: 20px 0; /*no*/
        > div:nth-child(1) {
          flex: 1;
          > ul {
            display: flex;
            > li {
              flex: 1;
              text-align: center;
              cursor: pointer;
              > p {
                line-height: 56px; /*no*/
                font-size: 18px; /*no*/
                color: #fff;
              }
              .pptx-nav,
              .xmal-nav,
              .lxwm-nav {
                position: relative;
                top: 20px; /*no*/
                display: none;
                background: rgba(0, 0, 0, 0.6);
                box-shadow: 0 13px 42px 11px rgb(0 0 0 / 5%); /*no*/
                height: auto;
                overflow: hidden;
                width: 100%;
                animation: forward 0.4s ease 0s;
                > ul {
                  > li {
                    height: 40px; /*no*/
                    line-height: 40px; /*no*/
                    > p {
                      color: #fff;
                      display: block;
                      font-size: 14px; /*no*/
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
            line-height: 28px; /*no*/
            font-size: 18px; /*no*/
            color: #fff;
            cursor: pointer;
          }
          > p:nth-child(2) {
            font-size: 24px; /*no*/
            font-weight: 600;
          }
        }
      }
    }
    .height-opacity {
      background: rgba(0, 0, 0, 0.2);
    }
    .banner-box {
      margin-top: 96px; /*no*/
    }
    .about-us {
      height: 830px; /*no*/
      // padding-bottom: 70px;
      background: #eee;
      position: relative;
      .about-us-title {
        font-size: 0;
        width: 100%;
        text-align: center;
        padding-top: 30px; /*no*/
        > h4 {
          font-size: 40px; /*no*/
          text-align: center;
          height: 68px; /*no*/
          line-height: 68px; /*no*/
          font-weight: bold;
          text-shadow: 1px 1px 1px #697b72; /*no*/
        }
        > p {
          letter-spacing: 8px; /*no*/
          text-align: center;
          font-size: 16px; /*no*/
        }
      }
      .about-us-content {
        display: flex;
        margin-top: 20px; /*no*/
        .about-us-content-text {
          flex: 1;
          padding: 0 100px; /*no*/
          height: 100%;
          > h4 {
            font: 22px "Times New Roman", Times, serif;
            background: url(../assets/image/gywm/yinz_h.png) no-repeat left center;
            text-transform: uppercase;
            line-height: 40px; /*no*/
            padding: 11px 0 11px 120px; /*no*/
          }
          > p {
            font: 20px "Microsoft YaHei";
            line-height: 40px; /*no*/
            color: #333;
            margin: 22px 0 20px; /*no*/
            text-align: left;
          }
          .ibrand-num {
            position: absolute;
            left: 100px; /*no*/
            bottom: 30px; /*no*/
            width: 900px; /*no*/
            height: 210px; /*no*/
            background: #e7bd6b;
            z-index: 10;
            > ul {
              display: flex;
              > li {
                position: relative;
                flex: 1;
                padding: 56px 0 0 40px; /*no*/
                > p:nth-child(1) {
                  text-align: left;
                  font-size: 0;
                  > span:nth-child(1) {
                    font: 60px "Times New Roman", Times, serif; /*no*/
                  }
                  > span:nth-child(2) {
                    font: 14px "Microsoft YaHei"; /*no*/
                  }
                  > span:nth-child(3) {
                    display: inline-block;
                    width: 20px; /*no*/
                    height: 20px; /*no*/
                    border-radius: 20px; /*no*/
                    background: #282828;
                    font: 14px "Microsoft YaHei"; /*no*/
                    color: #e7bd6b;
                    text-align: center;
                    line-height: 20px; /*no*/
                  }
                }
                > p:nth-child(2) {
                  font: 16px "Microsoft YaHei"; /*no*/
                  color: #282828;
                  text-align: left;
                }
              }
              > li:before {
                display: inline-block;
                content: "";
                position: absolute;
                top: 70px; /*no*/
                right: 0;
                width: 1px; /*no*/
                height: 70px; /*no*/
                background: #a28448;
              }
              > li:nth-child(4):before {
                display: contents;
              }
              > li:hover {
                > p {
                  color: #fff;
                }
                > p:nth-child(1) {
                  > span:nth-child(3) {
                    background: #fff;
                  }
                }
              }
            }
          }
        }
        .about-us-content-image {
          flex: 1;
          height: 615px; /*no*/
          overflow: hidden;
          > img {
            width: 100%;
            height: 100%;
            cursor: pointer;
            transition: 1s;
          }
        }
        .about-us-content-image:hover {
          > img {
            transform: scale(1.2);
          }
        }
      }
    }
    .main3 {
      width: 100%;
      padding-top: 20px; /*no*/
      height: 760px; /*no*/
      background: url(../assets/image/main3.jpg) no-repeat;
      .main3_l {
        width: 1200px; /*no*/
        margin: 0 auto;
        .title {
          visibility: visible;
          animation-name: bounceIn;
          height: 126px; /*no*/
          margin-top: 30px; /*no*/
          color: #fff;
          > h4 {
            font-size: 40px; /*no*/
            text-align: center;
            height: 68px; /*no*/
            line-height: 68px; /*no*/
            font-weight: bold;
            text-shadow: 1px 1px 1px #697b72; /*no*/
          }
          > p {
            letter-spacing: 8px; /*no*/
            text-align: center;
            font-size: 16px; /*no*/
          }
        }
        .main3_1b {
          .main3_1b_1 {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            > li {
              position: relative;
              width: 30%;
              margin: 20px 0.9% 0 0; /*no*/
              height: 260px; /*no*/
              cursor: pointer;
              .main3_1b3 {
                display: block;
                >img {
                  width: 60%;
                }
                > p {
                  font-size: 16px; /*no*/
                  line-height: 42px; /*no*/
                  text-align: center;
                  color: #fff;
                }
              }
              .main3_1b2 {
                display: none;
                width: 86%;
                position: absolute;
                top: 0;
                left: 0;
                height: 209px; /*no*/
                padding: 0 20px; /*no*/
                background: rgba(0, 0, 0, 0.6);
                .main3_1b4 {
                  width: 100%;
                  height: 42px; /*no*/
                  line-height: 42px; /*no*/
                  border-bottom: 1px solid #fff; /*no*/
                  font-size: 16px; /*no*/
                  color: #fff;
                }
                .txtyc3 {
                  line-height: 22px; /*no*/
                  font-size: 14px; /*no*/
                  margin-top: 17px; /*no*/
                  color: #fff;
                  text-align: left;
                }
              }
            }
            > li:hover {
              .main3_1b3 {
                display: none;
              }
              .main3_1b2 {
                display: block;
              }
            }
          }
        }
      }
    }
    .mfzx {
      height: 540px; /*no*/
      background: #f5f5f5;
      padding: 20px 0; /*no*/
      .content {
        width: 1200px; /*no*/
        margin: 0 auto;
        .titis {
          visibility: visible;
          animation-name: bounceIn;
          height: 126px; /*no*/
          margin-top: 30px; /*no*/
          > h4 {
            font-size: 40px; /*no*/
            text-align: center;
            height: 68px; /*no*/
            line-height: 68px; /*no*/
            font-weight: bold;
            text-shadow: 1px 1px 1px #697b72; /*no*/
            color: #333;
            >span {
              color: #e9bb5f;
            }
          }
          > p {
            letter-spacing: 8px; /*no*/
            text-align: center;
            font-size: 16px; /*no*/
          }
        }
        .yf_c {
          > ul {
            display: flex;
            flex-wrap: wrap;
            > li {
              flex: 1;
              height: 340px; /*no*/
              position: relative;
              margin-right: 15px; /*no*/
              > div:nth-child(1) {
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.6);
                > p:nth-child(1) {
                  padding-top: 80px; /*no*/
                  line-height: 46px; /*no*/
                  font-size: 36px; /*no*/
                  color: #e7bd6b;
                  font-weight: bold;
                }
                > p:nth-child(2) {
                  padding: 0 30px; /*no*/
                  font-size: 16px; /*no*/
                  color: #e7bd6b;
                  line-height: 28px; /*no*/
                  margin-top: 20px; /*no*/
                }
              }
            }
            > li:hover {
              > div:nth-child(1) {
                > p:nth-child(1) {
                  animation: fade-in; /*动画名称*/
                  animation-duration: 0.5s; /*动画持续时间*/
                  -webkit-animation: fade-in 0.5s; /*针对webkit内核*/
                }
              }
            }
            > li:nth-child(1) {
              background: url(../assets/image/yd/tc11.jpg) no-repeat;
              background-size: 100% 100%;
            }
            > li:nth-child(2) {
              background: url(../assets/image/yd/tc22.jpg) no-repeat;
              background-size: 100% 100%;
            }
            > li:nth-child(3) {
              background: url(../assets/image/yd/tc33.jpg) no-repeat;
              background-size: 100% 100%;
            }
          }
        }
      }
    }
    .zzkj {
      height: 500px; /*no*/
      background: #eee;
      padding: 20px 0; /*no*/
      .content {
        width: 1200px; /*no*/
        margin: 0 auto;
        .titis {
          visibility: visible;
          animation-name: bounceIn;
          height: 126px; /*no*/
          margin-top: 30px; /*no*/
          > h4 {
            font-size: 40px; /*no*/
            text-align: center;
            height: 68px; /*no*/
            line-height: 68px; /*no*/
            font-weight: bold;
            text-shadow: 1px 1px 1px #697b72; /*no*/
            color: #333;
          }
          > p {
            letter-spacing: 8px; /*no*/
            text-align: center;
            font-size: 16px; /*no*/
          }
        }
        .swiper {
          .swiper-image-box {
            position: relative;
            width: 100%;
            height: 280px; /*no*/
            .swiper-image {
              width: 100%;
              height: 100%;
            }
            .swiper-image-moda {
              display: none;
              position: absolute;
              height: 100%;
              width: 100%;
              left: 0;
              top: 0;
              background: url(../assets/image/zzkj/wzbj.png) no-repeat center;
              background-size: 100% 100%;
              > p:nth-child(1) {
                margin-top: 100px; /*no*/
                font-size: 26px; /*no*/
                font-weight: bold;
                height: 40px; /*no*/
                line-height: 40px; /*no*/
                color: #fff;
                margin-bottom: 20px; /*no*/
              }
              > p:nth-child(2) {
                font-size: 18px; /*no*/
                color: #da251c;
              }
            }
          }
          .swiper-image-box:hover {
            .swiper-image-moda {
              display: block;
            }
          }
          .swiper-title {
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            color: #000;
            font-size: 18px; /*no*/
          }
        }
      }
    }
    .jzjz {
      height: 570px; /*no*/
      margin: 0;
      .content {
        width: 1200px; /*no*/
        margin: 0 auto;
        .titis {
          visibility: visible;
          animation-name: bounceIn;
          height: 126px; /*no*/
          margin-top: 30px; /*no*/
          > h4 {
            font-size: 40px; /*no*/
            text-align: center;
            height: 68px; /*no*/
            line-height: 68px; /*no*/
            font-weight: bold;
            text-shadow: 1px 1px 1px #697b72; /*no*/
            color: #333;
          }
          > p {
            letter-spacing: 8px; /*no*/
            text-align: center;
            font-size: 16px; /*no*/
          }
        }
        .jzjz-al {
          > ul {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            > li {
              width: 390px; /*no*/
              height: 390px; /*no*/
              border: 1px solid #f3f3f3;
              margin-bottom: 30px; /*no*/
              > div:nth-child(1) {
                width: 100%;
                height: 300px; /*no*/
                cursor: pointer;
                > img {
                  width: 100%;
                  height: 100%;
                }
              }
              > div:nth-child(2) {
                display: flex;
                margin-top: 25px; /*no*/
                padding: 0 10px; /*no*/
                > h4 {
                  flex: 1;
                  font-size: 16px; /*no*/
                  font-weight: bold;
                  color: #000;
                  text-overflow: ellipsis;
                  text-align: left;
                  cursor: pointer;
                }
                > div:nth-child(2) {
                  width: 44px; /*no*/
                  height: 40px; /*no*/
                  border-radius: 6px; /*no*/
                  border: 1px solid #666; /*no*/
                  cursor: pointer;
                  > p {
                    font-size: 14px; /*no*/
                    line-height: 20px; /*no*/
                  }
                }
                > div:nth-child(2):hover {
                  color: #e9bb5f;
                }
              }
            }
          }
        }
      }
    }
    .xmal {
      height: 500px; /*no*/
      padding-bottom: 70px; /*no*/
      .content {
        width: 1200px; /*no*/
        margin: 0 auto;
        .titis {
          visibility: visible;
          animation-name: bounceIn;
          height: 126px; /*no*/
          > h4 {
            font-size: 40px; /*no*/
            text-align: center;
            height: 68px; /*no*/
            line-height: 68px; /*no*/
            font-weight: bold;
            text-shadow: 1px 1px 1px #697b72; /*no*/
            color: #333;
          }
          > p {
            letter-spacing: 8px; /*no*/
            text-align: center; /*no*/
            font-size: 16px; /*no*/
          }
        }
        .swiper {
          .swiper-image-box {
            position: relative;
            width: 100%;
            height: 340px; /*no*/
            .swiper-image {
              width: 100%;
              height: 100%;
            }
          }
          .swiper-title {
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            color: #000;
            font-size: 18px; /*no*/
          }
        }
      }
    }
    .gylzy {
      height: 500px; /*no*/
      .content {
        width: 1200px; /*no*/
        margin: 0 auto;
        .titis {
          visibility: visible;
          animation-name: bounceIn;
          height: 126px; /*no*/
          > h4 {
            font-size: 40px; /*no*/
            text-align: center;
            height: 68px; /*no*/
            line-height: 68px; /*no*/
            font-weight: bold;
            text-shadow: 1px 1px 1px #697b72; /*no*/
            color: #333;
          }
          > p {
            letter-spacing: 8px; /*no*/
            text-align: center;
            font-size: 16px; /*no*/
          }
        }
        .gylzy-details {
          display: flex;
          height: 300px; /*no*/
          .gylzy-nav {
            width: 90px; /*no*/
            height: 100%;
            > ul {
              > li {
                height: 100px; /*no*/
                background: #333;
                margin-bottom: 2px; /*no*/
                > p {
                  color: #fff;
                  font-size: 20px; /*no*/
                  line-height: 100px; /*no*/
                }
              }
              > li:nth-child(3) {
                margin-bottom: 0;
              }
              .isActive {
                background: #e7bd6b;
              }
            }
          }
          .gylzy-list {
            flex: 1;
            height: 100%;
            > img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
    .fwzc {
      width: 100%;
      padding-top: 20px; /*no*/
      height: 680px; /*no*/
      background: url(../assets/image/fwys/jiangx_bg.jpg) no-repeat;
      .main3_l {
        width: 1200px; /*no*/
        margin: 0 auto;
        .title {
          visibility: visible;
          animation-name: bounceIn;
          height: 126px; /*no*/
          margin-top: 30px; /*no*/
          color: #fff;
          > h4 {
            font-size: 40px; /*no*/
            text-align: center;
            height: 68px; /*no*/
            line-height: 68px; /*no*/
            font-weight: bold;
            text-shadow: 1px 1px 1px #697b72; /*no*/
            color: #e9bb5f;
          }
          > p {
            letter-spacing: 8px; /*no*/
            text-align: center;
            font-size: 16px; /*no*/
            color: #e9bb5f;
          }
        }
        .main3_1b {
          .main3_1b_1 {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            > li {
              position: relative;
              width: 23.5%;
              margin: 20px 0.9% 0 0; /*no*/
              height: 200px; /*no*/
              border-radius: 12px; /*no*/
              border: 2px solid #e9bb5f; /*no*/
              cursor: pointer;
              .main3_1b3 {
                padding-top: 40px; /*no*/
                > img {
                  width: 88px; /*no*/
                  height: 88px; /*no*/
                }
                > p {
                  font-size: 22px; /*no*/
                  line-height: 42px; /*no*/
                  text-align: center;
                  color: #e9bb5f;
                  font-weight: bold;
                }
              }
            }
            > li:hover {
              .main3_1b3 {
                > img {
                  animation: fwzcFrames 0.2s ease 0s;
                  animation-fill-mode: forwards;
                }
              }
            }
          }
        }
      }
    }
    .zlhz {
      height: 530px; /*no*/
      background: #f5f5f5;
      .content {
        width: 1200px; /*no*/
        margin: 0 auto;
        padding-top: 40px; /*no*/
        .titis {
          visibility: visible;
          animation-name: bounceIn;
          height: 126px; /*no*/
          > h4 {
            font-size: 40px; /*no*/
            text-align: center;
            height: 68px; /*no*/
            line-height: 68px; /*no*/
            font-weight: bold;
            text-shadow: 1px 1px 1px #697b72; /*no*/
            color: #333;
          }
          > p {
            letter-spacing: 8px; /*no*/
            text-align: center;
            font-size: 16px; /*no*/
          }
        }
        .zlhz-img {
          > ul {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            > li {
              border: 1px solid #e5e5e5; /*no*/
              width: 18.5%;
              height: 132px; /*no*/
              margin: 20px 0.5% 0 0.5%; /*no*/
              > img {
                width: 100%;
                height: 100%;
              }
            }
          }
        }
      }
    }
    .xgzx {
      // height: 500px;
      padding-bottom: 60px; /*no*/
      .content {
        width: 1200px; /*no*/
        margin: 0 auto;
        .titis {
          visibility: visible;
          animation-name: bounceIn;
          height: 126px; /*no*/
          margin-top: 30px; /*no*/
          > h4 {
            font-size: 40px; /*no*/
            text-align: center;
            height: 68px; /*no*/
            line-height: 68px; /*no*/
            font-weight: bold;
            text-shadow: 1px 1px 1px #697b72; /*no*/
            color: #333;
          }
          > p {
            letter-spacing: 8px; /*no*/
            text-align: center;
            font-size: 16px; /*no*/
          }
        }
        .xgzx-content {
          display: flex;
          .xgzx-swiper {
            width: 385px; /*no*/
            height: 410px; /*no*/
            border: 1px solid #ccc; /*no*/
            .swiper-image-box {
              position: relative;
              width: 100%;
              height: 280px; /*no*/
              .swiper-image {
                width: 100%;
                height: 100%;
              }
            }
            .swiper-title {
              // position: absolute;
              // bottom: 80px;
              color: #000;
              font-size: 18px; /*no*/
              text-align: left;
              padding: 10px 20px 6px; /*no*/
            }
            .swiper-text {
              color: #666;
              font-size: 14px; /*no*/
              text-align: left;
              padding: 0 20px; /*no*/
            }
          }
          .xgzx-details {
            flex: 1;
            margin-left: 30px; /*no*/
            > ul {
              > li {
                display: flex;
                border: 1px solid #ddd; /*no*/
                margin-bottom: 16px; /*no*/
                transition: all 0.2s linear 0s;
                padding: 22px 28px; /*no*/
                cursor: pointer;
                > div:nth-child(1) {
                  width: 66px;
                  border-right: 1px solid #ddd;
                  line-height: 20px;
                  padding-right: 30px;
                  color: #666;
                  vertical-align: middle;
                  > p:nth-child(1) {
                    width: 100%;
                    text-align: center;
                    color: #666;
                    font-size: 48px;
                    line-height: 48px;
                    font-weight: bold;
                  }
                  > p:nth-child(2) {
                    width: 100%;
                    text-align: center;
                    color: #666;
                    font-size: 16px;
                    line-height: 20px;
                  }
                }
                > div:nth-child(2) {
                  flex: 1;
                  padding: 0 30px; /*no*/
                  > h4 {
                    font-size: 18px; /*no*/
                    font-weight: normal;
                    text-align: left;
                  }
                  > p {
                    font-size: 14px; /*no*/
                    color: #666;
                    line-height: 40px; /*no*/
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
        .xgzx-gd {
          width: 100%;
          > p {
            width: 100%;
            text-align: center;
            > span {
              cursor: pointer;
              padding: 10px 50px; /*no*/
              background: #444;
              transition: all 0.2s linear 0s;
              font-size: 14px; /*no*/
              color: #fff;
            }
            > span:hover {
              background: #e9bb5f;
              text-indent: 10px; /*no*/
            }
          }
        }
      }
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
            >img {
              width: 60%;
            }
          }
          > div:nth-child(2) {
            width: 340px; /*no*/
            text-align: left;
            > p:nth-child(2),
            > p:nth-child(3),
            > p:nth-child(4) {
              color: #999;
              font-size: 14px; /*no*/
              line-height: 22px; /*no*/
            }
          }
          > div:nth-child(3) {
            width: 300px; /*no*/
            display: flex;
            justify-content: space-between;
            > div {
              width: 130px; /*no*/
              height: 130px; /*no*/
              border: 5px solid #666; /*no*/
              > img {
                width: 100%;
                height: 100%;
              }
            }
            > div:nth-child(1) {
              flex: 1;
              margin-right: 10px; /*no*/
            }
            > div:nth-child(2) {
              flex: 1;
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
  }

  /*-----移动---------*/
  .yd {
    padding-bottom: 130px;
    background: #f5f5f5;
    .yd-header {
      height: 56px;
      padding: 40px 20px;
      display: flex;
      .header-logo {
        width: 160px;
        height: 50px;
        >img {
          width: 100%;
          height: 100%;
        }
      }
      .header-navbar {
        flex: 1;
        line-height: 40px;
        >ul {
          display: flex;
          >li {
            flex: 1;
            border-right: 1px solid #999;
            >span {
              font-size: 24px;
              color: #666;
              text-align: center;
              line-height: 1;
            }
          }
          >li:nth-child(3) {
            border-right: none;
          }
        }
      }
      .header-nav {
        width: 50px;
        height: 36px;
        >img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .yd-swipe {
      width: 100%;
      height: 800px;
      .my-swipe {
        width: 100%;
        height: 100%;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .yd-numb {
      padding: 40px 20px;
      >ul {
        display: flex;
        justify-content: space-between;
        >li {
          width: 24%;
          >p:nth-child(1) {
            text-align: left;
            font-size: 0;
            > span:nth-child(1) {
              font: 46px "Times New Roman", Times, serif;
            }
            > span:nth-child(2) {
              font: 24px "Microsoft YaHei";
            }
            > span:nth-child(3) {
              display: inline-block;
              width: 30px;
              height: 30px;
              border-radius: 30px;
              background: #282828;
              font: 20px "Microsoft YaHei";
              color: #e7bd6b;
              text-align: center;
              line-height: 30px;
            }
          }
          > p:nth-child(2) {
            margin-top: 10px;
            font: 22px "Microsoft YaHei";
            color: #282828;
            text-align: left;
          }
        }
        >li:nth-child(3) {
          >p:nth-child(1) {
            > span:nth-child(2) {
              display: inline-block;
              width: 30px;
              height: 30px;
              border-radius: 30px;
              background: #282828;
              font: 20px "Microsoft YaHei";
              color: #e7bd6b;
              text-align: center;
              line-height: 30px;
            }
          }
        }
      }
    }
    .yd-main {
      width: 100%;
      padding: 20px;
      background: url(../assets/image/yd/main3.jpg) no-repeat;
      background-size: 100% 100%;
      .main3_l {
        margin: 0 auto;
        .title {
          visibility: visible;
          animation-name: bounceIn;
          height: 126px;
          margin-top: 30px;
          color: #fff;
          > h4 {
            font-size: 40px;
            text-align: center;
            height: 68px;
            line-height: 68px;
            font-weight: bold;
            text-shadow: 1px 1px 1px #697b72;
          }
          > p {
            letter-spacing: 8px;
            text-align: center;
            font-size: 24px;
          }
        }
        .main3_1b {
          .main3_1b_1 {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            > li {
              position: relative;
              width: 30%;
              margin: 20px 0.9% 0 0;
              height: 180px;
              .main3_1b3 {
                display: block;
                >img {
                  width: 60%;
                }
                > p {
                  font-size: 20px;
                  line-height: 42px;
                  text-align: center;
                  color: #fff;
                }
              }
            }
          }
        }
      }
    }
    .yd-mfzx {
      background: #f5f5f5;
      padding: 20px 0;
      .content {
        margin: 0 auto;
        .titis {
          visibility: visible;
          animation-name: bounceIn;
          height: 126px;
          margin-top: 30px;
          > h4 {
            font-size: 40px;
            text-align: center;
            height: 68px;
            line-height: 68px;
            font-weight: bold;
            text-shadow: 1px 1px 1px #697b72;
            color: #333;
            >span {
              color: #e9bb5f;
            }
          }
          > p {
            letter-spacing: 8px;
            text-align: center;
            font-size: 24px;
          }
        }
        .yf_c {
          width: 100%;
          > ul {
            width: 100%;
            display: flex;
            font-size: 0;
            > li {
              flex: 1;
              height: 340px;
              margin-right: 30px;
              > div:nth-child(1) {
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.6);
                > p:nth-child(1) {
                  padding-top: 80px;
                  line-height: 46px;
                  font-size: 36px;
                  color: #e7bd6b;
                  font-weight: bold;
                }
                > p:nth-child(2) {
                  padding: 0 30px;
                  font-size: 20px;
                  color: #e7bd6b;
                  line-height: 32px;
                  margin-top: 40px;
                  text-align: left;
                }
              }
            }
            > li:nth-child(1) {
              background: url(../assets/image/yd/tc11.jpg) no-repeat;
              background-size: 100% 100%;
            }
            > li:nth-child(2) {
              background: url(../assets/image/yd/tc22.jpg) no-repeat;
              background-size: 100% 100%;
            }
            > li:nth-child(3) {
              background: url(../assets/image/yd/tc33.jpg) no-repeat;
              background-size: 100% 100%;
              margin-right: 0;
            }
          }
        }
      }
    }
    .yd-xmal {
      padding-bottom: 20px;
      .content {
        margin: 0 auto;
        .titis {
          visibility: visible;
          animation-name: bounceIn;
          height: 126px;
          margin-top: 30px;
          > h4 {
            font-size: 40px;
            text-align: center;
            height: 68px;
            line-height: 68px;
            font-weight: bold;
            text-shadow: 1px 1px 1px #697b72;
            color: #333;
          }
          > p {
            letter-spacing: 8px;
            text-align: center;
            font-size: 24px;
          }
        }
        .yd-xmal-swipe {
          width: 100%;
          height: 320px;
          .my-swipe {
            width: 100%;
            height: 100%;
            img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
    .yd-jzjz {
      padding-bottom: 20px;
      .content {
        margin: 0 auto;
        .titis {
          visibility: visible;
          animation-name: bounceIn;
          height: 126px;
          margin-top: 30px;
          > h4 {
            font-size: 40px;
            text-align: center;
            height: 68px;
            line-height: 68px;
            font-weight: bold;
            text-shadow: 1px 1px 1px #697b72;
            color: #333;
          }
          > p {
            letter-spacing: 8px;
            text-align: center;
            font-size: 24px;
          }
        }
        .yd-jzjz-list {
          padding: 40px 0;
          >ul {
            display: flex;
            flex-wrap: wrap;
            >li {
              width: 46%;
              margin: 0 2% 30px;
              padding: 20px 0;
              background: #fff;
              >p:nth-child(1) {
                height: 250px;
                >img {
                  width: 100%;
                  height: 100%;
                }
              }
              >p:nth-child(2) {
                font-size: 28px;
                padding-top: 20px;
              }
            }
          }
        }
      }
    }
    .yd-fwzc {
      width: 100%;
      padding-top: 20px;
      height: 540px;
      background: url(../assets/image/fwys/jiangx_bg.jpg) no-repeat;
      background-size: 100% 100%;
      .main3_l {
        padding: 0 20px;
        .title {
          visibility: visible;
          animation-name: bounceIn;
          height: 126px;
          margin-top: 30px;
          color: #fff;
          > h4 {
            font-size: 40px;
            text-align: center;
            height: 68px;
            line-height: 68px;
            font-weight: bold;
            text-shadow: 1px 1px 1px #697b72;
            color: #fff;
          }
          > p {
            letter-spacing: 8px;
            text-align: center;
            font-size: 24px;
            color: #fff;
          }
        }
        .main3_1b {
          .main3_1b_1 {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            > li {
              position: relative;
              width: 23.5%;
              margin: 20px 0.9% 0 0;
              height: 140px;
              cursor: pointer;
              .main3_1b3 {
                padding-top: 20px;
                > img {
                  width: 100px;
                  height: 100px;
                }
                > p {
                  font-size: 22px;
                  line-height: 42px;
                  text-align: center;
                  color: #fff;
                }
              }
            }
          }
        }
      }
    }
  }

  .navTop-dialog {
    position: fixed;
    top: 116px;
    width: 100%;
    background: #e7bd6b;
    z-index: 100;
    >ul {
      >li {
        padding: 20px;
        border-bottom: 2px solid rgba(255,255,255,0.4);
        display: flex;
        >p {
          flex: 1;
          font-size: 32px;
          color: #fff;
        }
        >p:nth-child(1) {
          text-align: left;
        }
        >p:nth-child(2) {
          text-align: right;
          .van-icon {
            vertical-align: middle;
          }
        }
      }
    }
  }
}

/*-----顶部导航栏向上移动---------*/
@keyframes forward {
  0% {
    top: 40px; /*no*/
  }
  25% {
    top: 35px; /*no*/
  }
  50% {
    top: 30px; /*no*/
  }
  75% {
    top: 25px; /*no*/
  }
  100% {
    top: 20px; /*no*/
  }
}
@-webkit-keyframes forward {
  /*针对webkit内核*/
  0% {
    top: 40px; /*no*/
  }
  25% {
    top: 35px; /*no*/
  }
  50% {
    top: 30px; /*no*/
  }
  75% {
    top: 25px; /*no*/
  }
  100% {
    top: 20px; /*no*/
  }
}

/*-----旋转---------*/
@keyframes fade-in {
  0% {
    transform: perspective(400px) rotateY(90deg);
    opacity: 0;
  }
  50% {
    transform: perspective(400px) rotateY(45deg);
    opacity: 0.5;
  }
  100% {
    transform: perspective(400px) rotateY(0deg);
    opacity: 1;
  }
}

@-webkit-keyframes fade-in {
  /*针对webkit内核*/
  0% {
    transform: perspective(400px) rotateY(90deg);
    opacity: 0;
  }
  50% {
    transform: perspective(400px) rotateY(45deg);
    opacity: 0.5;
  }
  100% {
    transform: perspective(400px) rotateY(0deg);
    opacity: 1;
  }
}

@keyframes fwzcFrames {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1.2);
  }
}
</style>
<style lang='less'>
.main .el-carousel__item img {
  width: 100%;
  height: 100%;
}
.main .zzkj .el-carousel__indicators--outside {
  display: none;
}
.main .xmal .el-carousel__indicators--outside {
  display: none;
}
.main .xgzx .el-carousel__indicators {
  width: 100%;
}
.main .xgzx .el-carousel__arrow {
  display: none;
}
.main .xgzx .el-carousel__button {
  background: #999;
}
.main .xgzx .el-carousel__indicator.is-active button {
  background: #e9bb5f;
}
.main .xmal .el-carousel__item:hover {
  .swiper-title {
    color: #e9bb5f !important;
  }
}
</style>

