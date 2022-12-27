import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    goods:[
      {
        id: 1,
        name: "HuaWei"
      },
      {
        id: 2,
        name: "Apple"
      },
    ],
    selectedGoods:[]
  },
  getters:{
    cartCount: state=>{
      return state.selectedGoods.length;
    },

    cartList: state=>{
      let result = []
      for(let g of state.selectedGoods){
        let index = result.findIndex((r)=>{
          return r.id == g.id;
        })

        if(index == -1){
          result.push({count: 1, ...g})
        }else{
          result[index].count++
        }
      }

      return result;
    }
  },
  mutations: {
    addGood(state, payload){
      state.selectedGoods.push(payload)
    },
    
    clearCart: state=>{
      state.selectedGoods.splice(0, state.selectedGoods.length);
    }
  },
  actions: {
  },
  modules: {
  }
})
