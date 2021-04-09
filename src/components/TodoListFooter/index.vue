<template>
    <div class="todo-list-footer">
        <hl-cell :icon="allDoneIcon" title="All" icon-position="beforeTitle" @click="emitChange">
            <template #right>
                total:{{doneList.length}}/{{list.length}}
            </template>
        </hl-cell>
    </div>
</template>

<script>
export default {
    name: 'TodoListFooter',
    props: {
        list: {
            type: Array,
            require: true
        }
    },
    computed: {
        allDoneIcon() {
            return this.list.length && this.list.every(item => item.done) ? 'circle_line_selected_big' : 'circle_big'
        },
        doneList() {
            return this.list.filter(item => item.done)
        }
    },
    methods: {
        emitChange() {
            if (this.list.length === 0) return
            this.$emit('change')
        },
    }
}
</script>

<style>
</style>