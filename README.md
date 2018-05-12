# mjia16

> 嘉石榴—厦门银行存管

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8888
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run e2e tests
npm run e2e

# run all tests
npm test
```

## 文件说明
├─api                   api请求，ajax封装
├─assets                公用资源文件
│  ├─images
│  │  └─home
│  └─less
├─common                公用js，过滤器
│  ├─js
│  └─vueFilter
├─components            公用组件
├─extend                活动页文件夹
│  └─demo
├─page                  正常页文件夹
│  ├─home
│  │  └─images
│  └─investFinancing
├─router                路由控制（extendArray配置活动页路由）
└─store                 vuex状态管理

## 命名规范

1. 文件名一律采用驼峰式。如：varDemo;
2. 全局常量名称一律大小。如：GLOBAL_VAL;
3. 页面模块文件放到page目录下面；
4. 可复用组件放到components目录下面；
5. 框架外的活动页面放到extend下面。
6. 关于import导入，如果import导入的是Class，则首字母大小，否则小写。