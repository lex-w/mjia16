<template>
    <div class="home">
        <!-- 头部样式 -->
        <swipe-title />
        <div class="home-newobj">
            <div class="front-16 home-newobj-titel">新手专享_T2018108期</div>
            <div class="home-newobj-tag">
                <span class="jia-tag">新手专享</span>
                <span class="jia-tag show">返现券</span>
                <span class="jia-tag hide">代金券</span>
                <!--<span class="jia-tag {{ item.config.useCoupon | formatTag  item.status 'COUPON'}}">返现券</span>-->
            </div>
            <div class="home-newobj-yield">
                <p class="front-36 home-newobj-yield-val">10.00%</p>
                <p class="front-12 color999">预期年化利率</p>
            </div>
            <div class="home-newobj-summary">
                <div>
                    <p class="front-16 color333">7天</p>
                    <p class="front-12 color999">期限</p>
                </div>
                <div>
                    <p class="front-16 color333">80155.80元</p>
                    <p class="front-12 color999">剩余额度</p>
                </div>
                <div>
                    <p class="front-16 color333">100元</p>
                    <p class="front-12 color999">最小出借</p>
                </div>
            </div>
            <div class="home-newobj-btn">
                <a href="javascript:void (0)" class="button button-fill">立即抢购</a>
            </div>
        </div>

        <div id="newUser_reward">
            <img src="../../assets/images/home/adv.png" alt="" width="100%">
        </div>

        <div class="home-recommend">
            <div class="home-recommend-title front-16">
                <i class="zan"></i>
                <span>定期优选</span>
            </div>
            <div class="home-recommend-obj">
                <i class="home-tag"></i>
                <div>
                    <span class="tagPublic"></span>
                    <span class="front-16 home-recommend-obj-title">信清11号A</span>
                    <span class="jia-tag show">可转让</span>
                    <span class="jia-tag hide">代金券</span>
                    <span class="jia-tag show ">返现券</span>
                </div>
                <div class="home-recommend-obj-yield">
                    <div>
                        <span class="front-26 colorRed">8.15</span>
                        <span class="front-16 colorRed">%</span>
                        <span class="front-12 yield-name">预期年化利率</span>
                    </div>
                    <div>
                        <span class="front-26 color333">186</span>
                        <span class="front-12 color333">天</span>
                        <span class="front-12 yield-name">期限</span>
                    </div>
                    <div class="yield-progress">
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
            <div class="home-recommend-obj">
                <i class="home-full-tag"></i>
                <div>
                    <span class="tagPrivite"></span>
                    <span class="front-16 home-recommend-obj-title">慧分期18041903</span>
                    <span class="jia-tag">保</span>
                    <span class="jia-tag hide">可转让</span>
                    <span class="jia-tag hide">代金券</span>
                    <span class="jia-tag show ">返现券</span>
                </div>
                <div class="home-recommend-obj-yield">
                    <div>
                        <span class="front-26 colorRed">8.88</span>
                        <span class="front-16 colorRed">%</span>
                        <span class="front-12 yield-name">预期年化利率</span>
                    </div>
                    <div>
                        <span class="front-26 color333">12</span>
                        <span class="front-12 color333">个月</span>
                        <span class="front-12 yield-name">期限</span>
                    </div>
                    <div class="yield-progress">
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
                    <span class="front-16 home-recommend-obj-title">信清11号A</span>
                    <span class="jia-tag show">可转让</span>
                    <span class="jia-tag hide">代金券</span>
                    <span class="jia-tag show ">返现券</span>
                </div>
                <div class="home-recommend-obj-yield">
                    <div>
                        <span class="front-26 colorRed">8.15</span>
                        <span class="front-16 colorRed">%</span>
                        <span class="front-12 yield-name">预期年化利率</span>
                    </div>
                    <div>
                        <span class="front-26 color333">186</span>
                        <span class="front-12 color333">天</span>
                        <span class="front-12 yield-name">期限</span>
                    </div>
                    <div class="yield-progress">
                        <div class="circel-section">
                            <x-circle :percent="30" :stroke-width="2" stroke-color="#ff5c0c">
                                <span>30%</span>
                            </x-circle>
                        </div>
                    </div>

                </div>
            </div>
            <div class="home-recommend-obj">

                <div>
                    <span class="tagPrivite"></span>
                    <span class="front-16 home-recommend-obj-title">慧分期18041903</span>
                    <span class="jia-tag">保</span>
                    <span class="jia-tag hide">可转让</span>
                    <span class="jia-tag hide">代金券</span>
                    <span class="jia-tag show ">返现券</span>
                </div>
                <div class="home-recommend-obj-yield">
                    <div>
                        <span class="front-26 colorRed">8.88</span>
                        <span class="front-16 colorRed">%</span>
                        <span class="front-12 yield-name">预期年化利率</span>
                    </div>
                    <div>
                        <span class="front-26 color333">12</span>
                        <span class="front-12 color333">个月</span>
                        <span class="front-12 yield-name">期限</span>
                    </div>
                    <div class="yield-progress">
                        <div class="circel-section">
                            <x-circle :percent="30" :stroke-width="2" stroke-color="#ff5c0c">
                                <span>30%</span>
                            </x-circle>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div class="home-special">
            <div class="home-catalogue">
                <img src="../../assets/images/home/16.png" alt="">
                <img src="../../assets/images/home/risk_men.png" alt="">
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
    </div>
</template>

<script>
import { Card, XCircle } from "vux";
import swipeTitle from "./swipeTitle.vue";
import { carousel } from "../../api/apiUms";
export default {
  name: "home",
  data() {
    return {
        topBanner: [] // 头部banner图
    };
  },
  components: {
    Card,
    XCircle,
    swipeTitle
  },
  activated() {},
  created() {
  },
  methods: {
   
  }
};
</script>

<style lang="less">
@import '~vux/src/styles/1px.less';
@import url("./home");
</style>
