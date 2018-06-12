<template>
    <router-link to="" class="finance-list-child">
        <ul><li class="finance-title">
                <span class="tagPrivite"></span>
                <span class="data-title front-14">惠升级_商户通18061103</span>
                <span class="jia-tag tag-1">转</span>
                <span class="jia-tag tag-1">抵</span>
                <span class="jia-tag tag-1" style="display: none;">保</span>
                <span class="jia-tag tag-1">返现券</span>
                <span class="jia-tag tag-1" style="display: none;">代金券</span>
            </li>
            <li class="finance-percent">
                <span class="finance-num front-34">8.90
                    <i class="front-14">%</i>
                </span>
                <span class="lock-day front-12">
                    <i class="front-18">384</i>天</span>
                <div class="finance-list-lock" id="finance-list-lock159192"> </div>
            </li>
            <li class="finance-percent-seize">
                <div class="finance-percent-fa">
                    <div class="finance-percent-child" style="width: 98%;"></div>
                </div>
                <span>98%</span>
            </li>
            <li class="finance-listfootmsg" style="text-align: center;">
                <span class="finance-msg-left front-12" style="position: absolute; left: 1px;">到期还本付息</span>
                <span class="finance-msg-right front-12">5000元起</span>
                <span class="finance-msg-right front-12" style="display: none;">转让金额：5000元</span>
            </li>
        </ul>
    </router-link>
</template>
<script>
    
</script>
<style lang="less">
@import url("../assets/less/jiaConfig.less");
  
  .finance-percent img {
    float: right;
    width: 2.3rem;
    margin-right: 0.375rem;
  }
.finance-list-child {
  box-sizing: border-box;
  width: 100%;
  display: block;
  background-color: white;
  margin-top: 0.5rem;
  padding: 0.75rem;
  position: relative;
  overflow: visible;
  li {
    position: relative;
  }
}
.claimsList-sortitem-box span { vertical-align: middle; }
.finance-title {
  height: 18px;
  span {
    float: left;
    margin-right: .25rem;
  }
  .tag-1 {
    line-height: 15px;
  }
  .data-title {
    color: @color333333;
    margin-right: 0.25rem;
    vertical-align: middle;
    line-height: 18px;
  }
}
.finance-percent {
  color: @colorff6600;
  margin-top: 1rem;
  margin-bottom: 0.8rem;
  .lock-day {
    color: @color333333;
    vertical-align: super;
    i {
      padding: 0 3px;
    }
  }
  .timer-clock {
    display: inline-block;
    position: absolute;
    top: 16px;
    right: 0;
    > div:nth-child(2) {
      display: none;
    }
  }
}
.finance-num {
  margin-right: 1.5rem;
}
.finance-num-full {
  color: @color333333;
}
.finance-percent-seize {
  height: 15px;
  padding-right: 2.2rem;
  line-height: 6px;
  .finance-percent-fa {
    height: 0.1rem;
    background-color: #ddd;
  }
  .finance-percent-child {
    height: 0.1rem;
    background: -webkit-linear-gradient(
      left,
      #ffc740,
      #ff9751
    ); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(
      right,
      #ffc740,
      #ff9751
    ); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(
      right,
      #ffc740,
      #ff9751
    ); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, #ffc740, #ff9751); /* 标准的语法 */
  }
  span {
    color: #666;
    position: absolute;
    right: 0;
    top: -.125rem;
    font-size: .75rem;
  }
}
.finance-listfootmsg {
  margin-top: 0.3rem;
  height: 18px;
  span {
    color: #999;
  }
  span.finance-msg-right {
    position: absolute;
    right: 1px;
  }
}
.finance-apart {
  height: 0;
  border-bottom: 1px solid rgb(221, 221, 221);
}
</style>

