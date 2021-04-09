<template>
    <div class="todo-list-header">
        <hl-field placeholder="Add to do..." v-model="value" @input="emitChange"></hl-field>
        <hl-button @click="addTodo">Add</hl-button>
    </div>
</template>

<script>
export default {
    name: 'TodoListHeader',
    data() {
        return {
            value: ''
        }
    },
    methods: {
        emitChange() {
            this.$emit('input', this.value)
        },
        addTodo() {
            this.$emit('add', this.value)
            this.value = ''
        }
    }
}
</script>

<style lang="scss">
.todo-list-header {
    display: flex;
    justify-content: space-between;
}
</style>    