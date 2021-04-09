<template>
  <div class="vue-ajax">
    <hl-cell title="express模糊城市查询"></hl-cell>
    <div class="search-header">
      <hl-field placeholder="type city..." v-model="value"></hl-field>
      <hl-button @click="handleClick">search</hl-button>
    </div>
    <hl-cell v-for="(city,index) in cityList" :key="index" :title="city.name">
      <template #right>{{ city.nation }}</template>
    </hl-cell>
  </div>
</template>

<script>
import { queryCity } from '@/api'

export default {
  name: 'expressQuery',
  data() {
    return {
      value: '',
      cityList: [],
      timer: null
    }
  },
  methods: {
    handleClick() {
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        queryCity({ city: this.value })
            .then(res => {
              this.cityList = res.data
            })
            .catch(() => {
              this.cityList = []
            })
      }, 300)
    }
  }
}
</script>

<style>
.search-header {
  display: flex;
  justify-content: space-between;
}
</style>
