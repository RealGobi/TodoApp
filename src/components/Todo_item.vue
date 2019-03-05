<template>
    <article class="todos" :class="{completed : todo.done}" v-touch:swipe="updateTodo">
        <aside class="done" v-if="todo.done">
            <img src="../assets/check.svg" alt="done">
        </aside>
        <section class="text">
            {{todo.text}}
        </section>
    </article>
</template>

<script>
export default {
    name: 'todos',
    props: ['todo','index'],

    methods: {
        updateTodo(){
            this.$store.dispatch('updateTodo', this.index);
        }

}
}
</script>
<style lang="scss">
</style>

