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
        <m-fincaing-item v-for="pd in financeList" :key="pd.img"></m-fincaing-item>
      </div>
    </div>

    <div class="cut-off" style="display:none;">
      <p class="look-project front-12">
        <span class="icon icon-down"></span>&nbsp;查看满标项目
      </p>
    </div>
    <div class="cut-off" style="display:none;">
      <div class="cut-off-line"></div>
      <span class="cut-off-text front-12">以下为上期已满标项目</span>
    </div>
    <div class="foot-titp front-12" style="display:none;">
      温馨提示：市场有风险，出借需谨慎
    </div>
  </div>
</template>
<script>
import MFincaingItem from "../../components/MFinacingItem";
import "../../assets/js/mescroll.m.js";
// import "../../assets/js/mescroll-option.js";
import { getFinanceList } from "../../api/api";
export default {
  name: "investFinancing",
  data() {
    return {
      tabShow: "zqlb",
      pageType: "zqlb",
      mescroll: null,
      financeList: []
    };
  },
  components: { MFincaingItem },
  mounted() {
    var self = this;
    //下拉刷新的布局内容
    var htmlContent =
      '<div class="downwarp-unload"><p class="downwarp-arrow"></p><p class="downwarp-tip">下拉刷新</p></div>';
    htmlContent +=
      '<div class="downwarp-onload"><p class="downwarp-progress"></p><p class="downwarp-tip">加载中</p></div>';
    self.mescroll = new MeScroll("mescroll", {
      down: {
        auto: true,
        callback: function(mescroll) {
          mescroll.resetUpScroll();
        },
        offset: 60, //触发刷新的距离
        htmlContent: htmlContent, //布局内容
        inited: function(mescroll, downwarp) {
          //初始化完毕的回调,可缓存dom
          mescroll.downOnLoadDom = downwarp.getElementsByClassName(
            "downwarp-onload"
          )[0];
          mescroll.downUnloadDom = downwarp.getElementsByClassName(
            "downwarp-unload"
          )[0];
          mescroll.downTipDom = downwarp.getElementsByClassName(
            "downwarp-tip"
          )[0];
          mescroll.downArrowDom = downwarp.getElementsByClassName(
            "downwarp-arrow"
          )[0];
        },
        inOffset: function(mescroll) {
          //进入指定距离范围内那一刻的回调
          mescroll.downOnLoadDom.style.display = "none";
          mescroll.downUnloadDom.style.display = "block";
          mescroll.downTipDom.innerText = "下拉刷新";
          mescroll.downArrowDom.style.webkitTransform = "rotate(0deg)";
          mescroll.downArrowDom.style.transform = "rotate(0deg)";
        },
        outOffset: function(mescroll) {
          //下拉超过指定距离那一刻的回调
          mescroll.downTipDom.innerText = "释放更新";
          mescroll.downArrowDom.style.webkitTransform = "rotate(-180deg)";
          mescroll.downArrowDom.style.transform = "rotate(-180deg)";
        },
        showLoading: function(mescroll) {
          //触发下拉刷新的回调
          mescroll.downOnLoadDom.style.display = "block";
          mescroll.downUnloadDom.style.display = "none";
          mescroll.downTipDom.innerText = "下拉刷新";
          mescroll.downArrowDom.style.webkitTransform = "rotate(0deg)";
          mescroll.downArrowDom.style.transform = "rotate(0deg)";
        }
      },
      up: {
        callback: self.upCallback, //上拉回调
        //以下参数可删除,不配置
        isBounce: false,
        htmlNodata: "",
        showNoMore: function(mescroll, upwarp) {
          console.log(upwarp);
          upwarp.style.display = 'none'
        }
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
          if (page.num == 1) self.financeList = [];

          //更新列表数据
          self.financeList = self.financeList.concat(curPageData.items);

          //联网成功的回调,隐藏下拉刷新和上拉加载的状态;
          //mescroll会根据传的参数,自动判断列表如果无任何数据,则提示空;列表无下一页数据,则提示无更多数据;
          // console.log("page.num="+page.num+", page.size="+page.size+", curPageData.length="+curPageData.length+", self.financeList.length==" + self.financeList.length);

          //方法一(推荐): 后台接口有返回列表的总页数 totalPage
          self.mescroll.endByPage(
            curPageData.totalCount,
            curPageData.totalPage
          ); //必传参数(当前页的数据个数, 总页数)

          //方法二(推荐): 后台接口有返回列表的总数据量 totalSize
          // self.mescroll.endBySize(curPageData.length, totalSize); //必传参数(当前页的数据个数, 总数据量)

          //方法三(推荐): 您有其他方式知道是否有下一页 hasNext
          //self.mescroll.endSuccess(curPageData.length, hasNext); //必传参数(当前页的数据个数, 是否有下一页true/false)

          //方法四 (不推荐),会存在一个小问题:比如列表共有20条数据,每页加载10条,共2页.如果只根据当前页的数据个数判断,则需翻到第三页才会知道无更多数据,如果传了hasNext,则翻到第二页即可显示无更多数据.
          // self.mescroll.endSuccess(curPageData.length);

          console.log(self.mescroll.optUp);
        },
        function() {
          //联网失败的回调,隐藏下拉刷新和上拉加载的状态;
          self.mescroll.endErr();
        }
      );
    },
    /*联网加载列表数据
        * */
    getListDataFromNet(pageNum, pageSize, successCallback, errorCallback) {
      //延时一秒,模拟联网
      let resultData = getFinanceList({
        origin: "app",
        type: "zqlb",
        full: "n",
        sort: "PRIORITY",
        sortType: "desc",
        page: 1,
        pageLimit: 10,
        graceDaysLimit: "all",
        AnnualRateLimit: "all",
        transferSubjectStatus: "all",
        instal_type: "all",
        subjectType: "all",
        transferMoneyLimit: "all",
        userId: ""
      }).then(function(result) {
        console.log(result);
        successCallback && successCallback(result.data); //成功回调
      });
      // let resultData = getFinanceList('zqlb', 'n', 'PRIORITY', 'desc', 1, 'all', 'all', 'all', 'all', 'all', '')
      // cosnole.log(resultData)
    }
  }
};
</script>
<style lang="less">
@import url("./investFinancing");
@import url("../../assets/js/mescroll.min.css");
/*下拉刷新--上下箭头*/
.mescroll-downwarp .downwarp-arrow {
  display: inline-block;
  width: 20px;
  height: 20px;
  margin: 10px;
  background-image: url(./images/mescroll-arrow.png);
  background-size: contain;
  vertical-align: middle;
  -webkit-transition: all 300ms;
  transition: all 300ms;
}

/*下拉刷新,上拉加载--旋转进度条*/
.mescroll-downwarp .downwarp-progress,
.mescroll-upwarp .upwarp-progress {
  width: 36px;
  height: 36px;
  border: none;
  margin: auto;
  background-size: contain;
  -webkit-animation: progressRotate 0.6s steps(6, start) infinite;
  animation: progressRotate 0.6s steps(6, start) infinite;
}
@-webkit-keyframes progressRotate {
  0% {
    background-image: url(./images/mescroll-progress1.png);
  }
  16% {
    background-image: url(./images/mescroll-progress2.png);
  }
  32% {
    background-image: url(./images/mescroll-progress3.png);
  }
  48% {
    background-image: url(./images/mescroll-progress4.png);
  }
  64% {
    background-image: url(./images/mescroll-progress5.png);
  }
  80% {
    background-image: url(./images/mescroll-progress6.png);
  }
  100% {
    background-image: url(./images/mescroll-progress1.png);
  }
}
@keyframes progressRotate {
  0% {
    background-image: url(./images/mescroll-progress1.png);
  }
  16% {
    background-image: url(./images/mescroll-progress2.png);
  }
  32% {
    background-image: url(./images/mescroll-progress3.png);
  }
  48% {
    background-image: url(./images/mescroll-progress4.png);
  }
  64% {
    background-image: url(./images/mescroll-progress5.png);
  }
  80% {
    background-image: url(./images/mescroll-progress6.png);
  }
  100% {
    background-image: url(./images/mescroll-progress1.png);
  }
}
</style>

