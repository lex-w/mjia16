import { carousel } from '@/api/apiUms'

const home = {
    state: {
        topBanner: []
    },

    mutations: {
        SET_BANNER(state, banner) {
            state.topBanner = banner
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
        }
    }
}

export default home
