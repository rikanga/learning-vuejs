import { createStore } from 'vuex'

export default createStore({
  state: {
    // Ajout des données uniques de vérité
    day:25,
    month:3,
    year:2022,
    count:0,
  },
  getters: {
    formatteDate(state){
      return `${state.day}/${state.month}/${state.year}`
    }
  },
  mutations: {
    INCREMENT_DAY(state){
      state.day  += 1;
    },
    DECREMENT_DAY(state){
      state.day -= 1;
    },
    INCREMENT_COUNT(state, payload=1){
      state.count += Number(payload);
    },
    DECREASE_COUNT(state, payload=-1){
      state.count -= Number(payload);
    }
  },
  actions: {
    increment_mont(context, amount){
      context.commit('DECREMENT_MONTH', amount);
    },
    increment_count(context, number){
      context.commit("INCREMENT_COUNT", number);
    },
    updateCount(context,  number){
      if(number >= 0){
        context.commit('INCREMENT_COUNT', number);
      }else{
        context.commit("DECREASE_COUNT", number);
      }
    }
  },
  modules: {
    
  }
})
