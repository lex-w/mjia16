<template>
    <div class="home">
        <div class="home iosScrollFix" style="visibility: visible; right: 0px;">
            <div class="home-banner" style="position: relative; overflow: hidden; user-select: none; touch-action: none;">

                <div style="position: absolute; visibility: hidden;">
                    <a class="item" href="javascript:;" style="background-image: url(&quot;https://www.jia16.com/static/dam/jcr:7273bdca-e81d-40af-b7e8-a6432a3af6d8/20180202APP.jpg&quot;); width: 50%; height: 100%; display: inline-block;"></a>
                    <a class="item" href="javascript:;" style="background-image: url(&quot;https://www.jia16.com/static/dam/jcr:82eaabe9-0a40-4e8e-88f0-4ecfe7af8659/20180410app.png&quot;); width: 50%; height: 100%; display: inline-block;"></a>
                    <a class="item" href="javascript:;" style="background-image: url(&quot;https://www.jia16.com/static/dam/jcr:3f89c5c3-2c2b-46c4-ba72-2fb1576c3b8d/APP-3.png&quot;); width: 50%; height: 100%; display: inline-block;"></a>
                </div>
                <div style="position: absolute; width: 200%; height: 100%; left: 0px;">
                    <a class="item" href="javascript:;" style="background-image: url(&quot;https://www.jia16.com/static/dam/jcr:2417c075-d557-479a-8a79-6de653b8d9fd/20180315APP%E6%96%B0%E6%89%8B%E6%B3%A8%E5%86%8C.png&quot;); width: 50%; height: 100%; display: inline-block;"></a>
                </div>
            </div>
            <div class="front-12 nav">○○●○</div>
            <div class="home-header" id="trade-data">
                <div class="home-header-splitline">
                    <span class="front-14 home-header-val">36.37亿元</span>
                    <span class="front-12 home-header-name">累计兑付金额</span>
                </div>
                <div class="home-header-splitline">
                    <span class="home-header-val front-14">16196.03万元</span>
                    <span class="front-12 home-header-name">为出借人赚取</span>
                </div>
                <div>
                    <span class="home-header-val front-14">1052天</span>
                    <span class="front-12 home-header-name">平台运营时间</span>
                </div>
            </div>
            <div class="home-topnav">
                <div>
                    <a href="#!myCoupon&amp;couponType=cashback&amp;ishome=yes" id="myreward" style="color: rgb(68, 68, 68);">
                        <span class="message-tips" id="tips" style="display: none;"></span>
                        <i></i>
                        <span class="front-14 home-topnav-name">我的优惠</span>
                    </a>

                </div>
                <div>
                    <a href="#!invite&amp;ishome=yes" style="color: rgb(68, 68, 68);">
                        <i></i>
                        <span class="front-14 home-topnav-name">邀请好友</span>
                    </a>
                </div>
                <div>
                    <a href="external_page/informationDisclosure/informationDisclosure.html" style="color: rgb(68, 68, 68);">
                        <i></i>
                        <span class="front-14 home-topnav-name">信息披露</span>
                    </a>
                </div>
                <div>
                    <a href="#!helpcenter&amp;pageTarget=SECURITY&amp;ishome=yes" style="color: rgb(68, 68, 68);">
                        <i></i>
                        <span class="front-14 home-topnav-name">安全保障</span>
                    </a>
                </div>
            </div>

            <div id="newber">

                <div class="home-newobj">

                    <div class="front-16 home-newobj-titel">新手专享_T2018108期</div>
                    <div class="home-newobj-tag">
                        <span class="jia-tag">新手专享</span>
                        <span class="jia-tag show">返现券</span>
                        <span class="jia-tag hide">代金券</span>
                        <!--<span class="jia-tag {{ item.config.useCoupon | formatTag  item.status 'COUPON'}}">返现券</span>-->
                    </div>
                    <div class="home-newobj-yield">
                        <span class="front-36 home-newobj-yield-val">10.00%</span>
                        <span class="front-12 home-newobj-yield-name">预期年化利率</span>
                    </div>
                    <div class="home-newobj-summary">
                        <div>
                            <div>
                                <span class="front-16 home-newobj-summary-val">7天</span>
                                <span class="front-12 home-newobj-summary-name">期限</span>
                            </div>
                            <div>
                                <span class="front-16 home-newobj-summary-val">80155.80元</span>
                                <span class="front-12 home-newobj-summary-name">剩余额度</span>
                            </div>
                            <div>
                                <span class="front-16 home-newobj-summary-val">100元</span>
                                <span class="front-12 home-newobj-summary-name">最小出借</span>
                            </div>
                        </div>
                    </div>
                    <div class="home-newobj-btn">
                        <a href="javascript:void (0)" class="button button-fill">立即抢购</a>
                    </div>

                </div>

            </div>
            <div id="newUser_reward">
                <img src="/images/home/adv.png" alt="" width="100%">
            </div>
            <div class="home-money" id="homeMoney">
                <div class="front-16 home-money-title">
                    <i></i>
                    <span>定期优选</span>
                </div>
                <div class="home-money-obj">

                    <div class="home-full-tag front-12">限量</div>
                    <div>
                        <span class="front-16 home-money-obj-title">月月盈_T2018108期</span><br>
                        <span style="margin-top: 5px" class="jia-tag show">返现券</span>
                    </div>
                    <div class="home-money-obj-yield">
                        <div>
                            <span class="front-26 home-money-obj-yield-val">7.05</span>
                            <span class="front-16 home-money-obj-yield-percent">%</span>
                            <span class="front-12 home-money-obj-yield-name">预期年化利率</span>
                        </div>
                        <div>
                            <span class="front-26 home-money-obj-yield-day">30</span>
                            <span class="front-12 home-money-obj-yield-unit">天</span>
                            <span class="front-12 home-money-obj-yield-name">期限</span>
                        </div>
                        <div class="home-money-obj-yield-progress" id="homeMoneyObjYieldProgress31">
                            <div class="timer-clock">
                                <div>
                                    <span class="timer-clock-icon"></span>
                                    <span class="front-12 timer-clock-text">15</span>
                                    <span style="color: #ff6600">:</span>
                                    <span class="front-12 timer-clock-text">44</span>
                                    <span style="color: #ff6600">:</span>
                                    <span class="front-12 timer-clock-text">04</span>
                                </div>
                                <div>
                                    <span class="front-14 timer-clock-tag">待售</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="home-money-obj">

                    <div class="home-full-tag front-12">限量</div>
                    <div>
                        <span class="front-16 home-money-obj-title">双月嘉_T2018108期</span><br>
                        <span style="margin-top: 5px" class="jia-tag show">返现券</span>
                    </div>
                    <div class="home-money-obj-yield">
                        <div>
                            <span class="front-26 home-money-obj-yield-val">7.35</span>
                            <span class="front-16 home-money-obj-yield-percent">%</span>
                            <span class="front-12 home-money-obj-yield-name">预期年化利率</span>
                        </div>
                        <div>
                            <span class="front-26 home-money-obj-yield-day">60</span>
                            <span class="front-12 home-money-obj-yield-unit">天</span>
                            <span class="front-12 home-money-obj-yield-name">期限</span>
                        </div>
                        <div class="home-money-obj-yield-progress" id="homeMoneyObjYieldProgress1">
                            <div class="timer-clock">
                                <div>
                                    <span class="timer-clock-icon"></span>
                                    <span class="front-12 timer-clock-text">15</span>
                                    <span style="color: #ff6600">:</span>
                                    <span class="front-12 timer-clock-text">44</span>
                                    <span style="color: #ff6600">:</span>
                                    <span class="front-12 timer-clock-text">04</span>
                                </div>
                                <div>
                                    <span class="front-14 timer-clock-tag">待售</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="home-recommend" id="homeRecommend">
                <div class="home-recommend-title front-16">
                    <i></i>
                    <span>精心推荐</span>
                </div>
                <div class="home-recommend-obj">

                    <div>
                        <span class="tagPublic"></span>
                        <span class="home-front-16 home-recommend-obj-title">信清11号A</span>

                        <span class="jia-tag show">可转让</span>
                        <span class="jia-tag hide">代金券</span>
                        <span class="jia-tag show ">返现券</span>
                    </div>
                    <div class="home-recommend-obj-yield">
                        <div>
                            <span class="front-26 home-recommend-obj-yield-val">8.15</span>
                            <span class="front-16 home-recommend-obj-yield-percent">%</span>
                            <span class="front-12 home-recommend-obj-yield-name">预期年化利率</span>
                        </div>
                        <div>
                            <span class="front-26 home-recommend-obj-yield-day">
                                186
                            </span>
                            <span class="front-12 home-recommend-obj-yield-unit">
                                天
                            </span>
                            <span class="front-12 home-recommend-obj-yield-name">期限</span>
                        </div>
                        <div class="home-recommend-obj-yield-progress">
                            <svg width="60" height="60">
                                <text style="fill:black;" font-size="20" x="20" y="35" width="60" height="60">26%</text>
                                <circle cx="30" cy="30" r="29" stroke-width="2" stroke="#efefef" fill="none"></circle>
                                <circle class="circle" cx="30" cy="30" r="29" stroke-width="2" stroke="#ff5c0c" fill="none" transform="rotate(-90, 30, 30)" stroke-dasharray="49.508680000000005 190"></circle>
                            </svg>
                        </div>

                    </div>
                </div>
                <div class="home-recommend-obj">

                    <div>
                        <span class="tagPrivite"></span>
                        <span class="home-front-16 home-recommend-obj-title">慧分期18041903</span>

                        <span class="jia-tag">保</span>
                        <span class="jia-tag hide">可转让</span>
                        <span class="jia-tag hide">代金券</span>
                        <span class="jia-tag show ">返现券</span>
                    </div>
                    <div class="home-recommend-obj-yield">
                        <div>
                            <span class="front-26 home-recommend-obj-yield-val">8.88</span>
                            <span class="front-16 home-recommend-obj-yield-percent">%</span>
                            <span class="front-12 home-recommend-obj-yield-name">预期年化利率</span>
                        </div>
                        <div>
                            <span class="front-26 home-recommend-obj-yield-day">
                                12
                            </span>
                            <span class="front-12 home-recommend-obj-yield-unit">
                                个月
                            </span>
                            <span class="front-12 home-recommend-obj-yield-name">期限</span>
                        </div>
                        <div class="home-recommend-obj-yield-progress">
                            <svg width="60" height="60">
                                <text style="fill:black;" font-size="20" x="20" y="35" width="60" height="60">95%</text>
                                <circle cx="30" cy="30" r="29" stroke-width="2" stroke="#efefef" fill="none"></circle>
                                <circle class="circle" cx="30" cy="30" r="29" stroke-width="2" stroke="#ff5c0c" fill="none" transform="rotate(-90, 30, 30)" stroke-dasharray="179.94117647058823 190"></circle>
                            </svg>
                        </div>

                    </div>
                </div>
            </div>

            <div class="home-special" id="home-special">
                <div class="home-catalogue">
                    <img src="/images/home/16.png" alt="" style="margin-right:0.7rem;">
                    <img src="/images/home/risk_men.png" alt="">
                </div>
            </div>

            <div class="home-footer">
                <div class="home-footer-safe front-12">
                    <i></i>
                    <span>账户资金由厦门银行存管严格保障</span>
                </div>
                <div class="home-footer-title front-12">
                    <span>嘉石榴，服务实体经济，关心万家收益</span>
                    <div></div>
                </div>
            </div>

            <div class="weui_dialog_alert weui_dialog_alert_anniversary" style="display: none;">
                <div class="weui_mask"></div>
                <div class="weui_dialog anniversary_cont " style="width: 98%;">
                    <img src="/images/home/huitou.png" alt="" style="width: 15rem;">
                    <div class="front-18 home-huitou-btn anniversary_btn">查看详情</div>
                    <i class="anniversary_close">×</i>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import { carousel } from '../../api/apiUms'
export default {
  name: "home",
  data() {
    return {};
  },
  activated() {
      
  },
  created() {
    this.initData()
  },
  methods: {
      initData: function() {
          console.log('init data')
          carousel(function(result) {
              cosnole.log(result)
          })
      }
  }
};
</script>

<style lang="less">
@import url('./home');
</style>
