import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      {done: false, text: 'Köp Bananer'},
      {done: false, text: 'Köp Ketchup'},
      {done: true, text: 'Köp Godis'}
    ],
    activeSlide: 0
  },
  mutations: {
    swipe(state,activeSlide) {
      state.activeSlide = activeSlide;
    },
    addTodo(state, todo){
      state.todos.push(todo);
    },
    updateTodo(state, index){
      state.todos[index].done = !state.todos[index].done;
    }
  },
  actions: {
    addTodo(ctx, todo){
      // commita new todo
      ctx.commit('addTodo', todo);
      // uppdatera swipe
      ctx.commit('swipe', 0);
    },
    updateTodo(ctx,index){
      ctx.commit('updateTodo', index);
    }
  },
  getters: {
    todos(state){
      return state.todos;
    },
    doneTodos(state){
      return state.todos.filter(todo => todo.done == true)
    }
  }
})
