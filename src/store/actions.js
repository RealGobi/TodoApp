export default {
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
      }
}