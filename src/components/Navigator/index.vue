<template>
    <hl-collapse class="navigator" v-model="activeName" accordion v-if="$store.state.component.navigator.show">
        <hl-collapse-item name="1" title="Vue小任务">
            <hl-cell v-for="(route,index) in vueList" :key="index">
                <router-link :to="route.to">
                    {{ route.name }}
                </router-link>
            </hl-cell>
        </hl-collapse-item>
        <hl-collapse-item name="2" title="Mithril小任务" disabled></hl-collapse-item>
        <hl-collapse-item name="3" title="Express小任务">
            <hl-cell v-for="(route,index) in expressList" :key="index">
                <router-link :to="route.to">
                    {{ route.name }}
                </router-link>
            </hl-cell>
        </hl-collapse-item>
    </hl-collapse>
</template>

<script>
export default {
    name: 'Navigator',
    data() {
        return {
            activeName: undefined,
            vueList: [
                {name: 'TodoList', to: '/todo-list'},
                {name: 'Vue组件', to: '/vue-component'},
                {name: 'Vue状态管理', to: '/vue-state'},
                {name: 'Vue路由管理', to: '/vue-router'},
                {name: 'Vue&ajax', to: '/vue-query'},
            ],
            expressList: [
                {name: 'Express静态Server', to: '/'},
                {name: 'http转发', to: '/express-query'},
                {name: '日志', to: '/express-log'},
                {name: '中间件', to: '/express-middleware'},
                {name: 'Express Session', to: '/express-session'},
            ]
        }
    },
    watch: {
        $route() {
            this.activeName = undefined
        }
    }
}
</script>

<style scoped lang="scss">
.navigator {
    ::v-deep .hl-cell__value a {
        display: inline-block;
        width: 100%;
    }
}
</style>
