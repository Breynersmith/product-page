import { createStore } from "vuex";

const store = createStore({
    state(){
        return {
            quantity: 0,
            product: 'Fall Limited Edition Sneakers',
            srcImg: '/images/image-product-1.jpg',
            price: 125.00 
        }
    },

    mutations: {
        quantity(state, quantity){
            state.quantity = quantity
        },

    },

    actions: {
        quantity({commit}, quantity){
            commit('quantity', quantity)
        }
        
    },

    getters: {
        total(state){
            return state.quantity * state.price
        }
    }
})

export default store