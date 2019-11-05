import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

var store = new Vuex.Store({
    state: {
        count : 100
    },
    mutations: {
        add(state) {
            state.count++;
        },
        de(state){
            state.count--;
        }
    },
    actions: {
        reduce(context) {
            setTimeout(() => {
                context.commit('de')
                console.log(context)
            },1000)
        }
    }
})

export default store;