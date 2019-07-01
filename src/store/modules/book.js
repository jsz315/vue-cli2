export default {
    namespaced: true,
    state: {
        list: []
    },
    getters: {
        total: state => state.list.length,
        bookList: (state, getters, rootState) => {
            return state.list;
        }
    },
    mutations: {
        add (state, payload) {
            state.list.push(payload)
        }
    }
}