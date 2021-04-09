<template>
  <div class="express-session">
    <hl-cell title="创建： /session/start">
      <template #right>
        <hl-button @click="start" size="normal">开始</hl-button>
      </template>
    </hl-cell>
    <hl-cell class="result-cell" :title="'session:'+JSON.stringify(sessionData)"></hl-cell>
    <hl-cell title="次数： /session/requestTimes">
      <template #right>
        <hl-button @click="times" size="normal">开始</hl-button>
      </template>
    </hl-cell>
    <hl-cell class="result-cell" :title="'请求次数：'+requestTimes"></hl-cell>
    <hl-cell title="结束： /session/end">
      <template #right>
        <hl-button @click="end" size="normal">开始</hl-button>
      </template>
    </hl-cell>
    <hl-cell class="result-cell" :title="endMessage"></hl-cell>
  </div>
</template>

<script>
import { sessionStart, sessionEnd, requestTimes } from '@/api'

export default {
  name: 'expressSession',
  data() {
    return {
      sessionData: '',
      requestTimes: 0,
      endMessage: ''
    }
  },
  methods: {
    start() {
      sessionStart().then(res => {
        this.endMessage = ''
        this.sessionData = res.data
      })
    },
    times() {
      requestTimes().then(res => {
        this.endMessage = ''
        this.requestTimes = res.data.requestTime
      })
    },
    end() {
      sessionEnd().then(res => {
        this.requestTimes = 0
        this.sessionData = ''
        this.endMessage = res.data.message
      })
    }
  }
}
</script>

<style scoped lang="scss">
.express-session {

  ::v-deep .result-cell .hl-cell__title span {
    width: 100%;
    word-break: break-all;
  }
}
</style>

