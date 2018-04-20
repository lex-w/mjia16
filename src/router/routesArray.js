const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')

let routesArray = [{
    path: '/',
    redirect: {
        name: 'home'
    }
}, {
    path: '/home',
    name: 'home',
    meta: {
        name: '精心优选'
    },
    component: home
}]

export default routesArray