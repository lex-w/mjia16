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
    </div>
</template>
<script>
export default {
  name: "investFinancing",
  data() {
    return {
      tabShow: 'zqlb',
      pageType: 'zqlb'
    };
  },
  methods: {
    tabActive(tabName) {
      this.tabShow = tabName;
    }
  }
};
</script>
<style lang="less">
@import url("./investFinancing");
</style>

