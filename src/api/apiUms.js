import fetch from './promise'

/* 获取首页 banner */
export const carousel = () => fetch('/ums/cms/carousel')

/* 首页数据显示 */
export const tradingData = () => fetch('/api/main-page/trading-data')
