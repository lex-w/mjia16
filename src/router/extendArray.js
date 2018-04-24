const demo = r => require.ensure([], () => r(require('../extend/demo/demo')), 'demo')

/* 
    这里是所有活动页的路由配置 
    注意：索引值目前固定为1000
*/
let extendArray = [{
    path: '/demo',
    name: 'demo',
    meta: {
        name: '活动第一页',
        index: 1000 // 页面索引值
    },
    component: demo
}]

export default extendArray