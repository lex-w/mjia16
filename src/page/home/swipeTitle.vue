<template>
    <div class="swipe-title">
        <swiper :list="topBanner" dots-position="center" auto class="home-banner" />
        <card class="marginTop0">
            <div slot="content" class="home-header">
                <div class="vux-1px-r front-14">
                    36.37亿
                    <br>
                    <span class="front-12">累计兑付金额</span>
                </div>
                <div class="vux-1px-r front-14">
                    16196.03万元
                    <br>
                    <span class="front-12">为出借人赚取</span>
                </div>
                <div class="front-14">
                    1052天
                    <br>
                    <span class="front-12">平台运营时间</span>
                </div>
            </div>
        </card>
        <card>
            <div slot="content" class="home-topnav">
                <div class="nav-item">
                    <i class="one"></i>
                    <p class="front-14 home-topnav-name">我的优惠</p>
                </div>
                <div class="nav-item">
                    <i class="two"></i>
                    <p class="front-14 home-topnav-name">邀请好友</p>
                </div>
                <div class="nav-item">
                    <i class="three"></i>
                    <p class="front-14 home-topnav-name">信息披露</p>
                </div>
                <div class="nav-item">
                    <i class="four"></i>
                    <p class="front-14 home-topnav-name">安全保障</p>
                </div>
            </div>
        </card>
    </div>
</template>

<script>
import { Swiper, Card } from 'vux'
import { carousel } from "../../api/apiUms"
import { mapState } from "vuex"
export default {
    name: 'swipe-title',
    data() {
        return {
            // topBanner: [] // 头部banner图
        }
    },
    components: {
        Card,
        Swiper
    },
    created() {
        this.$store.dispatch('Carousel')
        // this.initData();
        console.log(this.show)
        this.status = this.show
    },
    methods: {
        initData() {
            // 轮播图
            this.$store.dispatch('Carousel')
        }
    },
    computed: {
        ...mapState({
            topBanner: state => state.home.topBanner
        })
    }
}
</script>

<style lang="less">
@import url("../../assets/less/jiaConfig");
/** banner **/

.home-banner {
    height: 300/@fontRemBase;
    width: 100%;
    background-color: @colord9d9d9;
    img {
        width: 100%;
    }
    .mint-swipe-indicator.is-active {
        background: #fff;
        opacity: 1;
    }

    &.vux-slider > .vux-indicator > a > .vux-icon-dot{
        width: 8px;
        height: 8px;
        border-radius: 4px;
        &.active{
            background-color: #fff;
        }
    }
}


/** head **/
.home-header {
    padding: 10px 0;
    .flexbox();
    >div {
        flex: 1;
        text-align: center;
        color: @color333333;
        span {
            color: @color999999;
        }
    }
}

/** topnav **/

.home-topnav {
    height: 150/@fontRemBase;
    font-size: 14px;
    .flexbox();
    >.nav-item {
        margin: auto .2*100/@fontRemBase;
        width: 25%;
        text-align: center;
    }
    >.nav-item i {
        display: block;
        height: 54/@fontRemBase;
        width: 54/@fontRemBase;
        margin: 0 auto;
    }
    .one {
        background: url(./images/icon1-re.png) no-repeat;
        background-size: 100%;
    }
    .two {
        background: url(./images/icon2-inv.png) no-repeat;
        background-size: 100%;
    }
    .three {
        background: url(./images/infoIcon.png) no-repeat;
        background-size: 100%;
    }
    .four {
        background: url(./images/inon4-sec.png) no-repeat;
        background-size: 100%;
    }
    .message-tips {
        display: inline-block;
        background: #ff6600;
        color: #fff;
        font-size: 12px;
        border-radius: 50%;
        position: absolute;
        margin-left: .5rem;
        height: 16px;
        width: 16px;
        line-height: 16px;
    }
}

.home-topnav-name {
    margin-top: 10/@fontRemBase;
    display: block;
}

</style>
