<template>
  <div class="express-log">
    <hl-cell title="express日志查询">
      <template #right>
        {{ date }}
        <hl-button style="margin-left: .5rem;" @click="show=true">选择日期</hl-button>
      </template>
    </hl-cell>
    <hl-calendar v-model="show" @confirm="setDate" :min-date="new Date(2021,3,1)"
                 confirm-text="查询" type="single"/>
    <hl-cell v-if="!logList.length" label="无日志"></hl-cell>
    <hl-cell v-if="logList.length!==0">
      <template #label>
        请求次数:{{ logList.length }}
        &nbsp;
        成功:{{ logList.filter(log => log.type === 'access').length }}
        &nbsp;
        失败:{{ logList.filter(log => log.type === 'error').length }}
        &nbsp;
        成功率:{{
          ((logList.filter(log => log.type === 'access').length / logList.length).toFixed(2)) * 100 + '%'
        }}
        平均耗时:{{ averageTime }}ms
      </template>
    </hl-cell>
    <hl-cell class="log-cell" v-for="(log,index) in logList" :key="index" :value="log.method+'：'+log.url">
      <template #title>
        <div :class="['circle',log.type === 'access' ? 'green' : 'red']"></div>
        {{ log.type === 'access' ? '成功' : '失败' }}
      </template>
      <template #right>{{ new Date(log.date).toLocaleTimeString() }}</template>
    </hl-cell>
  </div>
</template>

<script>
import { getLog } from "@/api";

export default {
  name: 'expressLog',
  data() {
    return {
      show: false,
      date: undefined,
      logList: [],
    }
  },
  computed: {
    averageTime() {
      let total = 0
      let effectiveLogs = this.logList.map(log => Number(log.time.split(' ')[0]))
      effectiveLogs = effectiveLogs.filter(time => !isNaN(time))
      total = effectiveLogs.reduce((a, b) => a + b)
      return (total / effectiveLogs.length).toFixed(2)
    }
  },
  methods: {
    setDate(val) {
      this.date = new Date(val).toLocaleDateString()
      this.getLog()
      this.show = false
    },
    getLog() {
      getLog({ date: this.date })
          .then(res => {
            console.log(res)
            this.logList = res.data
          })
          .catch(() => {
            this.logList = []
          })
    },
  }
}
</script>

<style lang="scss">
.express-log {

  .circle {
    width: 0.7rem;
    height: 0.7rem;
    margin-right: 0.2rem;
    border-radius: 50%;
  }

  .red {
    background-color: red;
  }

  .green {
    background-color: green;
  }

  .log-cell .hl-cell__title {
    margin-right: -2rem;
  }
}
</style>
