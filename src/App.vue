<template>
    <div id="app">
        <div class="mcontent">
            <transition :name="transitionName">
                <keep-alive>
                    <router-view class="child-view" v-if="$route.meta.keepAlive" />
                </keep-alive>
            </transition>
            <transition :name="transitionName">
                <router-view class="child-view" v-if="!$route.meta.keepAlive" />
            </transition>
        </div>
        <m-footer v-if="$route.meta.isShow" :bottomTxt="$route.meta.bottom"></m-footer>
    </div>
</template>

<script>
import MFooter from './components/MFooter';
export default {
    name: "App",
    data() {
        return {
            transitionName: 'slide-left'
        }
    },
    components: {
        MFooter
    },
    // beforeCreate() {
    //     console.log('beforeCreate')
    // },
    // created() {
    //     console.log('created')
    // },
    // beforeMount() {
    //     console.log('beforeMount')
    // },
    // mounted() {
    //     console.log('mounted')
    // },
    // beforeUpdate() {
    //     console.log('beforeUpdate')
    // },
    // updated() {
    //     console.log('updated')
    //     // this.bottomTxt = this.$route.meta.bottom
    // },
    // activated() {
    //     console.log('activated')
    // },
    // deactivated() {
    //     console.log('deactivated')
    // },
    // beforeDestroy() {
    //     console.log('beforeDestroy')
    // },
    // destroyed() {
    //     console.log('destroyed')
    // },
    // 接着在父组件内
    // watch $route 决定使用哪种过渡
    watch: {
        '$route' (to, from) {
            const toDepth = to.meta.index
            let fromDepth = 100
            if(to.meta.index) {
                fromDepth = from.meta.index
            }
            this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
        }
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

.child-view {  
  position: absolute;  
  left: 0;  
  top: 0;  
  width: 100%;  
  height: 100%;  
  transition: all .5s cubic-bezier(.55,0,.1,1);  
}  
.slide-left-enter, .slide-right-leave-active {  
  opacity: 0;  
  -webkit-transform: translate(30px, 0);  
  transform: translate(30px, 0);  
}  
.slide-left-leave-active, .slide-right-enter {  
  opacity: 0;  
  -webkit-transform: translate(-30px, 0);  
  transform: translate(-30px, 0);  
}  
</style>
