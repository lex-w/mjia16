<template>
    <div id="app">
        <div class="mcontent">
            <keep-alive>
                <router-view v-if="$route.meta.keepAlive" />
            </keep-alive>
            <router-view v-if="!$route.meta.keepAlive" />
        </div>
        <m-footer v-if="$route.meta.isShow" :bottomTxt="bottomTxt"></m-footer>
    </div>
</template>

<script>
import MFooter from './components/MFooter';
export default {
    name: "App",
    data() {
        return {
            bottomTxt: "", // 当前是哪个tab
        }
    },
    components: {
        MFooter
    },
    beforeCreate() {
        console.log('beforeCreate')
    },
    created() {
        console.log('created')
    },
    beforeMount() {
        console.log('beforeMount')
    },
    mounted() {
        console.log('mounted')
    },
    beforeUpdate() {
        console.log('beforeUpdate')
    },
    updated() {
        console.log('updated')
        // this.bottomTxt = this.$route.meta.bottom
    },
    activated() {
        console.log('activated')
    },
    deactivated() {
        console.log('deactivated')
    },
    beforeDestroy() {
        console.log('beforeDestroy')
    },
    destroyed() {
        console.log('destroyed')
    }
    
};
</script>

<style lang="less">
@import url("./assets/less/jia.less");
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-orient: vertical;
  -ms-flex-direction: column;
  -webkit-flex-direction: column;
  flex-direction: column;
  background-color: #f0f0f0;
  > .mcontent {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    position: relative;
    width: 100%;
    background-color: #f0f0f0;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    -webkit-flex: 1 1 auto;
    flex: 1 1 auto;
    overflow-y: auto;
  }
}
</style>
