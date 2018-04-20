import fetch from './promise'

/* 获取首页 banner */
export const carousel = () => fetch('/ums/cms/carousel')