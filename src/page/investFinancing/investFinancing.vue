<template>
    <div class="investFinancing">
        <div class="headerTabBgc">
            <div class="buttons-tab headerTab">
                <a class="front-13 headerButton" v-bind:class="[tabShow=='yxlc'?'active':'']" @click="tabActive('yxlc')">定期优选</a>
                <a class="front-13 headerButton" v-bind:class="[tabShow=='zqlb'?'active':'']" @click="tabActive('zqlb')">精选标的</a>
                <a class="front-13 headerButton" v-bind:class="[tabShow=='zrbx'?'active':'']" @click="tabActive('zrbx')">转让变现</a>
            </div>
        </div>

        <div class="front-12 claimsList-sort" id="claimsList-sort" data-flagid="claimsListSortDefault" data-flag="default" v-show="pageType!='yxlc'">
            <div class="claimsList-sortitem" id="claimsListSortDefault" data-type="PRIORITY" data-flag="default">
                <div class="claimsList-sortitem-box">
                    <span class="claimsList-sort-base claimsList-sort1" data-flag="default"></span>
                    <span data-flag="default">默认</span>
                </div>
            </div>
            <div class="claimsList-sortitem" id="claimsListSortRate" data-type="ANNUAL_RATE" data-flag="down">
                <div class="claimsList-sortitem-box">
                    <span>年利率</span>
                    <span class="claimsList-sort-base claimsList-sort2">
                        <span class="claimsList-sort-up" data-flag="up"></span>
                        <span class="claimsList-sort-down" data-flag="down"></span>
                    </span>
                </div>
            </div>
            <div class="claimsList-sortitem" id="claimsListSortDay" data-type="INTERVAL_DAYS" data-flag="down">
                <div class="claimsList-sortitem-box">
                    <span>期限</span>
                    <span class="claimsList-sort-base claimsList-sort3">
                        <span class="claimsList-sort-up" data-flag="up"></span>
                        <span class="claimsList-sort-down" data-flag="down"></span>
                    </span>
                </div>
            </div>
            <div class="claimsList-select" data-panel='#claimsList-panel' id="claimsListSortSelect">
                <div class="claimsList-sortitem-box">
                    <span class="claimsList-sort-base  claimsList-sort4" data-flag="select"></span>
                    <span data-falg="select">筛选</span>
                </div>
            </div>
        </div>

        <!--滑动区域-->
        <div id="mescroll" class="mescroll">
            <!--展示上拉加载的数据列表-->
            <div id="finance-lists" class="finance-lists" v-cloak>
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
            </div>
        </div>
    </div>
</template>
<script>
import "../../assets/js/mescroll.m.js";
import "../../res/pdlist1.js";
export default {
  name: "investFinancing",
  data() {
    return {
      tabShow: "zqlb",
      pageType: "zqlb",
      mescroll: null,
      pdlist: []
    };
  },
  mounted() {
    var self = this;
    self.mescroll = new MeScroll("mescroll", {
      up: {
        callback: self.upCallback, //上拉回调
        //以下参数可删除,不配置
        isBounce: false, //此处禁止ios回弹,解析(务必认真阅读,特别是最后一点): http://www.mescroll.com/qa.html#q10
        //page:{size:8}, //可配置每页8条数据,默认10
        toTop: {
          //配置回到顶部按钮
          // src : "../res/img/mescroll-totop.png", //默认滚动到1000px显示,可配置offset修改
          //html: null, //html标签内容,默认null; 如果同时设置了src,则优先取src
          // offset : 1000
        },
        empty: {
          //配置列表无任何数据的提示
          warpId: "dataList",
          icon: require("../../res/img/mescroll-empty.png")
          //						  	tip : "亲,暂无相关数据哦~" ,
          //						  	btntext : "去逛逛 >" ,
          //						  	btnClick : function() {
          //						  		alert("点击了去逛逛按钮");
          //						  	}
        }
        //vue的案例请勿配置clearId和clearEmptyId,否则列表的数据模板会被清空
        //vue的案例请勿配置clearId和clearEmptyId,否则列表的数据模板会被清空
        //			clearId: "dataList",
        //			clearEmptyId: "dataList"
      }
    });
  },
  methods: {
    // 切换 tab
    tabActive(tabName) {
      this.tabShow = tabName;
    },
    //上拉回调 page = {num:1, size:10}; num:当前页 ,默认从1开始; size:每页数据条数,默认10
    upCallback: function(page) {
      //联网加载数据
      var self = this;
      self.getListDataFromNet(
        page.num,
        page.size,
        function(curPageData) {
          //curPageData=[]; //打开本行注释,可演示列表无任何数据empty的配置

          //如果是第一页需手动制空列表 (代替clearId和clearEmptyId的配置)
          if (page.num == 1) self.pdlist = [];

          //更新列表数据
          self.pdlist = self.pdlist.concat(curPageData);

          //联网成功的回调,隐藏下拉刷新和上拉加载的状态;
          //mescroll会根据传的参数,自动判断列表如果无任何数据,则提示空;列表无下一页数据,则提示无更多数据;
          // console.log("page.num="+page.num+", page.size="+page.size+", curPageData.length="+curPageData.length+", self.pdlist.length==" + self.pdlist.length);

          //方法一(推荐): 后台接口有返回列表的总页数 totalPage
          //self.mescroll.endByPage(curPageData.length, totalPage); //必传参数(当前页的数据个数, 总页数)

          //方法二(推荐): 后台接口有返回列表的总数据量 totalSize
          // self.mescroll.endBySize(curPageData.length, totalSize); //必传参数(当前页的数据个数, 总数据量)

          //方法三(推荐): 您有其他方式知道是否有下一页 hasNext
          //self.mescroll.endSuccess(curPageData.length, hasNext); //必传参数(当前页的数据个数, 是否有下一页true/false)

          //方法四 (不推荐),会存在一个小问题:比如列表共有20条数据,每页加载10条,共2页.如果只根据当前页的数据个数判断,则需翻到第三页才会知道无更多数据,如果传了hasNext,则翻到第二页即可显示无更多数据.
          self.mescroll.endSuccess(curPageData.length);
        },
        function() {
          //联网失败的回调,隐藏下拉刷新和上拉加载的状态;
          self.mescroll.endErr();
        }
      );
    },
    /*联网加载列表数据
        请忽略getListDataFromNet的逻辑,这里仅仅是在本地模拟分页数据,本地演示用
        实际项目以您服务器接口返回的数据为准,无需本地处理分页.
        * */
    getListDataFromNet(pageNum, pageSize, successCallback, errorCallback) {
      //延时一秒,模拟联网
      setTimeout(function() {
        //          	axios.get("xxxxxx", {
        //					params: {
        //						num: pageNum, //页码
        //						size: pageSize //每页长度
        //					}
        //				})
        //				.then(function(response) {
        var data = this.pdlist1; // 模拟数据: ../res/pdlist1.js
        var listData = []; //模拟分页数据
        for (var i = (pageNum - 1) * pageSize; i < pageNum * pageSize; i++) {
          if (i == data.length) break;
          listData.push(data[i]);
        }
        successCallback && successCallback(listData); //成功回调
        //				})
        //				.catch(function(error) {
        //					errorCallback&&errorCallback()//失败回调
        //				});
      }, 500);
    }
  }
};
</script>
<style lang="less">
@import url("./investFinancing");
@import url("../../assets/js/mescroll.min.css");

.finance-lists {
  overflow-y: scroll;
  overflow-x: hidden;
}

  .finance-tag {
    position: absolute;
    top: -3px;
    right: 0.75rem;
    width: 97 / @fontRemBase;
    height: 82 / @fontRemBase;
    text-align: center;
    background: url(./images/tag.png);
    background-size: 100% 100%;
    color: white;
    line-height: 200%;
    z-index: 99;
  }

  .finance-tag-full {
    position: absolute;
    top: -3px;
    right: 0.75rem;
    width: 97 / @fontRemBase;
    height: 82 / @fontRemBase;
    text-align: center;
    background: url(./images/tagFull.png);
    background-size: 100% 100%;
    color: white;
    line-height: 200%;
    z-index: 99;
  }
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
  margin-top: 0.7rem;
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
//分割线部分
.cut-off {
  margin: 0.75rem 0.75rem 0.25rem;
  height: 1rem;
  text-align: center;
  position: relative;
  .cut-off-line {
    width: 100%;
    height: 1px;
    background-color: #ddd;
    position: relative;
    z-index: 1;
    top: -1px;
  }
  .cut-off-text {
    position: relative;
    z-index: 2;
    background-color: #f0f0f0;
    padding: 0 0.25rem;
    top: -0.75rem;
  }
  > p {
    width: 4rem;
    display: inline-block;
    vertical-align: middle;
    color: #777;
  }
  .cut-off-left {
    height: 1px;
    border-bottom: 1px solid #dedede;
  }
  .cut-off-right {
    height: 1px;
    border-bottom: 1px solid #dedede;
  }
  .look-project {
    width: 7.5rem;
  }
}
.foot-titp {
  padding: 0.75rem 0;
  text-align: center;
  color: #aaa9a9;
}
.finance-line {
  height: 15px;
  line-height: 6px;
  > div {
    height: 1px;
    background-color: #ddd;
  }
}
//头部下面的图片jia16.com
.headerTitp {
  padding: 0 30 / @fontRemBase;
  padding-bottom: 26 / @fontRemBase;
  background-color: white;
  > img {
    width: 122 / @fontRemBase;
    height: 40 / @fontRemBase;
  }
  > span:nth-child(2) {
    display: inline-block;
    color: @colorff6600;
    margin: 0 8 / @fontRemBase;
  }
  > span:nth-child(3) {
    color: @color999999;
  }
}
</style>

