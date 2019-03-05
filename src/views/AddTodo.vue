<template>
    <main id="addTodo" v-touch:swipe.right="swipe">
        <header>
            <p>Todos:</p>
        </header>
        <section class="content">
            <input type="text" v-model="todoText">
        </section>
        <footer>
            <a href="#" class="btn" @click="addTodo()">Lägg till!</a>
        </footer>
    </main>
</template>

<script>
export default {
    name: 'AddTodo',
    data(){
        return {
            todoText: ''
        }
    },
    methods: {
        swipe() {
            this.$store.commit('swipe', 0);
        },
        addTodo(){
            // hämta input
            // inte lägga till tomt fält
            // dispatcha nya todo till vueX
            if (!this.todoText == ''){
                this.$store.dispatch('addTodo', { text: this.todoText, done: false})
                this.todoText= '';
                } else
                console.log('Add Stuff');

        }
    }
}
</script>
<style lang="scss">
</style>
