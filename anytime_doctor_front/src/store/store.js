import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        i:0
    },
    // mutations: {
    //     increment(state) {
    //       // mutate state
    //       state.i++
    //     }
    // },
    // getters: {
    //     showNum: state => {
    //       return state.i;
    //     }
    // }
}
);
