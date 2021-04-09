<template>
    <div class="todo-list">
        <TodoListHeader @add="addItem" />
        <TodoListBody :list="list" @change="changeItem" @remove="removeItem" />
        <TodoListFooter :list="list" @change="changeAll" />
    </div>
</template>

<script>
import TodoListHeader from '@/components/TodoListHeader'
import TodoListBody from '@/components/TodoListBody'
import TodoListFooter from '@/components/TodoListFooter'

export default {
    name: 'TodoList',
    components: {
        TodoListHeader,
        TodoListBody,
        TodoListFooter
    },
    data() {
        return {
            list: []
        }
    },
    watch: {
        list(val) {
            this.$store.commit('todo/SET_LIST', val)
        }
    },
    methods: {
        addItem(things) {
            if (!things) return
            this.list.push({
                name: things,
                done: false
            })
        },
        changeItem(index) {
            this.list[index].done = !this.list[index].done
        },
        removeItem(index) {
            this.list.splice(index, 1)
        },
        changeAll() {
            if (this.list.every(item => item.done)) {
                this.list.forEach(item => item.done = false)
            } else {
                this.list.forEach(item => item.done = true)
            }
        }
    }
}
</script>
<style scoped>
.todo-list {
    border: 1px solid #ebedf0;
    padding: 0.5rem;
}
</style>