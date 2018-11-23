<template>
    <div class="accountOverview">
        <div class="account_top">
            <div class="header-wrapper">
                <div class="level_section">
                    <span class="jia-flower"></span>
                    <span class="levelCont">
                        <i>V2</i>石榴花
                    </span>
                </div>
                <div class="right">
                    <router-link tag="div" to="home" class="jia-set"></router-link>
                    <router-link tag="div" to="home" class="jia-message"></router-link>
                </div>
            </div>

            <swiper height="5.175rem" dots-position="center" dots-class="swiper-dots">
                <swiper-item>
                    <p class="jia_totalAsset">0.00</p>
                    <p class="jia_desc">我的资产(元)></p>
                </swiper-item>
                <swiper-item>
                    <p class="jia_totalAsset">360.88</p>
                    <p class="jia_desc">我的收益(元)></p>
                </swiper-item>
            </swiper>

            <card class="my-coupons">
                <div slot="content" class="card-coupons-flex">
                    <div class="vux-1px-r">
                        <p>石榴币</p>
                        <span>1130</span>个
                    </div>
                    <div class="vux-1px-r">
                        <p>返现券</p>
                        <span>15</span>元
                    </div>
                    <div class="vux-1px-r">
                        <p>加息券</p>
                        <span>0</span>张
                    </div>
                    <div>
                        <p>代金券</p>
                        <span>88</span>元
                    </div>
                </div>
            </card>
        </div>

        <group class="account_money">
            <cell>
                <div slot="title">
                    <i class="jia-textFolder"></i>
                    可用余额：847,896.52 >
                </div>
                <div slot="child">
                    <x-button mini>充值</x-button>
                    <x-button mini type="warn">取现</x-button>
                </div>
            </cell>
        </group>

        <group>
            <cell is-link value="待收22650.08元">
                <div slot="title">
                    <i class="jia-like"></i>
                    定期优选
                </div>
            </cell>
            <cell is-link value="待收48,952.04元">
                <div slot="title">
                    <i class="jia-star"></i>
                    精选标的
                </div>
            </cell>
            <cell is-link value="0笔转让中">
                <div slot="title">
                    <i class="jia-money"></i>
                    转让变现
                </div>
            </cell>
        </group>

        <group>
            <cell is-link>
                <div slot="title">
                    <i class="jia-blockbell"></i>
                    热门活动
                </div>
            </cell>
        </group>

        <group>
            <cell is-link>
                <div slot="title">
                    <i class="jia-blackKefu"></i>
                    客服与反馈
                </div>
            </cell>
        </group>

         <group>
            <cell is-link>
                <div slot="title">
                    <i class="jia-gocalendar"></i>
                    回款日历
                </div>
            </cell>
        </group>

         <group>
            <cell is-link>
                <div slot="title">
                    <i class="jia-circleMsg"></i>
                    更多
                </div>
            </cell>
        </group>
    </div>
</template>

<script>
import {Swiper, SwiperItem, Card, Group, Cell, XButton } from 'vux';
export default {
    name: 'accountOverview',
    components: {
        Swiper,
        SwiperItem,
        Card,
        Group,
        Cell,
        XButton
    },
    created() {
        
    },
    methods: {
    }
}
</script>

<style lang="less">
@import url("../../assets/less/jiaConfig");
@import '~vux/src/styles/1px.less';
.account_top {
    position: relative;
    padding-bottom: 30px;
    .bgGradientTopBottom(@colorff6600, #ff3d10);
    .header-wrapper {
        display: flex;
        padding: 25 / @fontRemBase 0;
        .level_section {
            flex: 0 0 185 / @fontRemBase;
            padding: 0 20 / @fontRemBase;
            background: #ff5009;
            display: flex;
            border-top-right-radius: 20 / @fontRemBase;
            border-bottom-right-radius: 20 / @fontRemBase;
            .flex-align-center();
            .levelCont {
                color: #ffb08f;
                font-size: @fontSmall;
            }
        }
        .right {
            flex: 1;
            display: flex;
            justify-content: flex-end;
            .flex-align-center();
            .jia-message {
                margin: 0 20 / @fontRemBase;
            }
        }
    }

    .vux-slider {
        .vux-swiper-item {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-bottom: 55 / @fontRemBase;
        }
        p {
            text-align: center;
            color: #fff;
        }
        .jia_totalAsset {
            font-size: @fontLarger;
        }
        .jia_desc {
            font-size: @fontSmall;
            color: #fec18f;
        }
        .swiper-dots {
            a {
                .vux-icon-dot {
                    border-radius: 8px;
                    width: 8px;
                    height: 8px;
                    background: #000;
                    opacity: .2;
                    &.active{
                        background: #fff;
                        opacity: 1;
                    }
                }
            }
        }
    }
}

.weui-panel.my-coupons {
    position: absolute;
    left: 5%;
    bottom: -30px;
    width: 90%;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    padding: 10px 0;
}

.card-coupons-flex {
    display: flex;
    & > div {
        flex: 1;
        text-align: center;
        font-size: 14px;
    }
    span {
        color: #f74c31;
    }
}
.accountOverview {
    .weui-btn + .weui-btn {
        margin-top: 0;
    }
    .weui-cells {
        margin-top: 10px;
        font-size: 14px;
        i {
            margin-right: .1rem;
            width: .8rem;
            height: .8rem;
            vertical-align: top;
        }
        .weui-cell {
            padding: 15px;
        }
    }
    .account_money .weui-cells {
        margin-top: 40px;
    }
}
</style>


