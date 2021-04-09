<template>
    <div class="vue-state">
        <hl-cell label="单个页面中使用在data中定义的状态"></hl-cell>
        <hl-cell label="当组件与组件之间需要共享一个状态时，在vuex中定义来管理"></hl-cell>
        <hl-cell :label="'assistiveTouch:'+state.component.assistiveTouch.show"></hl-cell>
        <hl-cell :label="'navigator:'+state.component.navigator.show"></hl-cell>
        <hl-cell :label="'todoList:'+state.todo.list.length"></hl-cell>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'vueState',
    computed: {
        ...mapState({
            state: state => state
        })
    }
}
</script>

<style>
</style>