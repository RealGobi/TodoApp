<template>
    <main id="todo">
       <header>
            <h1>Teflon</h1>
            <p>hjälp när det inte fastnar</p>
       </header>
       <section class="todo-content">
           <todoitem v-for="(todo, index) in todos" :key="index" :todo="todo" :index="index"/>
       </section>
       <footer>
           <a href="#" class="btn" v-touch:swipe.left="swipe">Slide to add new Todo</a>
        </footer>
    </main>
</template>
<script>
import todoitem from '../components/Todo_item';

export default {
    name: 'todo',
    methods: {
        swipe() {
            this.$store.commit('swipe', 1);
        }
    },
    components: {
        todoitem
    },
    computed: {
        todos(){
            return this.$store.getters.todos;
        }
    }

}
</script>
<style lang="scss">
</style>