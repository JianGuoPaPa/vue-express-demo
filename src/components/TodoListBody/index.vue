<template>
    <div class="todo-list-body">
        <hl-cell v-if="!list.length" label="empty">
        </hl-cell>
        <hl-cell v-for="(things,index) in list" :key="index" :icon="things.done|filterIcon" :title="things.name" icon-position="beforeTitle">
            <template #right>
                <hl-button size="small" @click="emitChange(index)">{{things.done|filterText}}</hl-button>
                <hl-button class="remove-btn" size="small" @click="emitRemove(index)">remove</hl-button>
            </template>
        </hl-cell>
    </div>
</template>

<script>
export default {
    name: 'TodoListBody',
    props: {
        list: {
            type: Array,
            require: true
        }
    },
    // 对每一个item.done状态使用过滤器区分文字和图标
    filters: {
        filterIcon(done) {
            return done ? 'circle_line_selected_big' : 'circle_big'
        },
        filterText(done) {
            return done ? 'undone' : 'done'
        },
    },
    methods: {
        emitChange(index) {
            this.$emit('change', index)
        },
        emitRemove(index) {
            this.$emit('remove', index)
        },
    }
}
</script>

<style scoped>
.remove-btn {
    margin-left: 0.5rem;
}
::v-deep .hl-cell__title span:not(.hl-cell__left-icon) {
    width: 150px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>