<template>
    <div class="vue-router">
        <hl-cell v-for="(route,index) in routes" :key="index" :title="route.name" :value="route.path" @click="navigate(route.path)"></hl-cell>
    </div>
</template>

<script>
export default {
    data() {
        return {
            routes: this.$router.options.routes
        }
    },
    methods: {
        navigate(path) {
            this.$router.push(path)
        }
    }
}
</script>

<style scoped lang="scss">
.vue-router {
    ::v-deep.hl-cell__title {
        min-width: 150px;
    }
}
</style>