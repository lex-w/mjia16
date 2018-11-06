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
                    <router-link to="home" class="jia-set"></router-link>
                    <router-link to="home" class="jia-message"></router-link>
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

            <card>
                <div slot="content" class="card-demo-flex card-demo-content01">
                    <div class="vux-1px-r">
                        <span>1130</span>
                        <br/>
                        1212
                    </div>
                    <div class="vux-1px-r">
                        <span>15</span>
                        <br/>
                        121212
                    </div>
                    <div class="vux-1px-r">
                        <span>0</span>
                        <br/>
                        121212
                    </div>
                    <div>
                        <span>88</span>
                        <br/>
                        121212
                    </div>
                </div>
            </card>

            <card>
                <p slot="content" class="card-padding">鞢地方电视台</p>
            </card>
        </div>

        
    </div>
</template>

<script>
import {Swiper, SwiperItem, Card } from 'vux';
export default {
    name: 'accountOverview',
    components: {
        Swiper,
        SwiperItem,
        Card
    }
}
</script>

<style lang="less">
@import url("../../assets/less/jiaConfig");
@import '~vux/src/styles/1px.less';
.account_top {
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

.card-demo-flex {
  display: flex;
}
.card-demo-content01 {
  padding: 10px 0;
}
.card-padding {
  padding: 15px;
}
.card-demo-flex > div {
  flex: 1;
  text-align: center;
  font-size: 12px;
}
.card-demo-flex span {
  color: #f74c31;
}
</style>


