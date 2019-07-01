export default {
    namespaced: true,
    state: {
        list: []
    },
    getters: {
        total: state => state.list.length
    },
    mutations: {
        add (state, payload) {
            state.list.push(payload.data)
        }
    }
}