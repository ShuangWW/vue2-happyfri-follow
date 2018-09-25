export default {
    ['ADD_ITEMNUM'](state){
        state.itemNum += 1
    },
    ['REMBER_ANSWER'](state,id){
        state.answerid.push(id);
    },
    ['REMBER_TIME'](state){
        state.timer = setInterval(()=>{
            state.allTime++
        },1000)
    },
    ['INIALIZE_DATA'](state){
        state.itemNum = 1;
        state.allTime = 0;
        state.answerid = [];
    }
}