import Vue from 'vue'
import Vuex from 'vuex'

Vue.set(Vuex)

export const store = new Vuex.Store({
    // modules
    /* modules: {

    } ,*/
    // Data 저장소
    state: {
        count: 0,
    },
    // Data를 변경시키는 도구
    mutations: {
        increment(state) {
            state.count++;
        }
    }
})