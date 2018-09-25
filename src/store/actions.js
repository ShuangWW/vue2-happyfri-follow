export default {
    addNum({commit,state},id){
        commit('REMBER_ANSWER', id)
        if(state.itemNum < state.itemDetail.length){
            commit('ADD_ITEMNUM')
        }
    },
    initializeData({commit}){
        commit('INITIALIZE_DATA')
    }
}