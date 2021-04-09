const state = {
    list: []
}

// 同步方法
const mutations = {
    SET_LIST: (state, list) => {
        state.list = list
    }
}

// 异步方法
const actions = {

}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}