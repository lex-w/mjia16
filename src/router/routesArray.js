const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const investFinancing = r => require.ensure([], () => r(require('../page/investFinancing/investFinancing')), 'investFinancing')
/* 
    底部tab选中
    bottom: home  -->  精心优选
    bottom: investFinancing  -->  我要出借
    bottom: accountOverview  -->  我的账户
*/
let routesArray = [{
    path: '/',
    redirect: {
        name: 'home'
    }
}, {
    path: '/home',
    name: 'home',
    meta: {
        name: '精心优选',
        bottom: 'home', // 当前选中的是哪个item
        isShow: true, // 是否显示底部样式
        index: 1 // 当前页面的一个索引值
    },
    component: home
}, {
    path: '/investFinancing',
    name: 'investFinancing',
    meta: {
        name: '我要出借',
        bottom: 'investFinancing',
        isShow: true,
        index: 2
    },
    component: investFinancing
}]

export default routesArray