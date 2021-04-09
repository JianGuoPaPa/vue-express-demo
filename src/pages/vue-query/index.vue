<template>
    <div class="vue-ajax">
        <hl-cell title="模糊城市查询"></hl-cell>
        <div class="search-header">
            <hl-field placeholder="type city..." v-model="value"></hl-field>
            <hl-button @click="handleClick">search</hl-button>
        </div>
        <hl-cell v-for="(city,index) in cityList" :key="index" :label="city.name"></hl-cell>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'vueAjax',
    data() {
        return {
            value: '',
            cityList: [],
            timer: null
        }
    },
    methods: {
        handleClick() {
            if (!this.value) return
            clearTimeout(this.timer)
            this.timer = setTimeout(() => {
                axios.get(`https://h5.133.cn/hangban/basic/search_airport?q=${encodeURIComponent(this.value)}`).then(res => {
                    this.value = ''
                    this.cityList = res.data
                })
            }, 500);
        },
    }
}
</script>

<style>
.search-header {
    display: flex;
    justify-content: space-between;
}
</style>
