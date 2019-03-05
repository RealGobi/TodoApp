export default {
    swipe(state,activeSlide) {
        state.activeSlide = activeSlide;
      },
      addTodo(state, todo){
        state.todos.push(todo);
      },
      updateTodo(state, index){
        state.todos[index].done = !state.todos[index].done;
      }
}