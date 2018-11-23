import { carousel, tradingData } from '@/api/apiUms'

const home = {
    state: {
        topBanner: [],
        tradingData: {
            repaidAmount: 0, // 累计兑付金额
            onlineRepaidInterest: 0, // 出借人赚取
            operationPeriod: 0 // 平台运营时间

        }
    },

    mutations: {
        SET_BANNER(state, banner) {
            state.topBanner = banner
        },
        SET_TRADING(state, data) {
            state.tradingData = data
        }
    },

    actions: {
        Carousel({ commit }) {
            return new Promise((resolve, reject) => {
                carousel().then(result => {
                    let resultList = []
                    result.data.forEach(e => {
                        resultList.push({
                            img: e.type,
                            url: e.url
                        });
                    });
                    commit('SET_BANNER', resultList)
                    resolve()
                }).catch(error => {
                    reject()
                    console.log(error)
                })
            })
        },
        TradingData({ commit }) {
            return new Promise((resolve, reject) => {
                tradingData().then(result => {
                    let data = result.data
                    let params = {
                        repaidAmount: formatCountMoney(data.repaidAmount.amount),
                        onlineRepaidInterest: formatMoney(data.onlineRepaidInterest),
                        operationPeriod: getOperationPeriod(data.operationPeriod.year, data.operationPeriod.day)
                    }
                    commit("SET_TRADING", params)
                    resolve()
                }).catch(error => {
                    reject()
                    console.log(error)
                })
            })
        }
    }
}

function formatMoney(money) {
    let onlineAmount = money / 10000
    if(onlineAmount > 1) {
        return onlineAmount.toFixed(2) + '万'
    } else {
        return money.toFixed(2)
    }
}

// 累计兑付金额
function formatCountMoney(money) {
    if(!money) {
        return 0
    }
    let repaidAmount = (money / 100000000)
    repaidAmount = repaidAmount > 1 ? repaidAmount.toFixed(2) + '亿' : (repaidAmount * 10000).toFixed(0) + '万'
    return repaidAmount
}

 // 首页运营时间 改为XX天
 function getOperationPeriod(year, day) {
    let time = new Date().toLocaleString();
    let thisYear = parseInt(time.split("/")[0]);
    let daysFromYear = year * 365;
    for (let i = 0; i < year; i++) {
        let tempYear = thisYear - i;
        if (i != 0 && tempYear % 4 == 0 && tempYear % 100 != 0) { // 是闰年 366天
            day = day + 1;
        }
    }
    return (parseInt(daysFromYear) + parseInt(day));
}

export default home
