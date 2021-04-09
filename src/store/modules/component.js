const state = {
    assistiveTouch: {
        show: false,
    },
    navigator: {
        show: true
    }
}

// 同步方法
const mutations = {
    TOGGLE_ASSISTIVETOUCH: state => {
        state.assistiveTouch.show = !state.assistiveTouch.show
    },
    TOGGLE_NAVIGATOR: state => {
        state.navigator.show = !state.navigator.show
    },
    DRAG_ASSISTIVETOUCH: (state, position) => {
        state.assistiveTouch.position = position
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