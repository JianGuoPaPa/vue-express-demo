<template>
  <div class="express-middleware">
    <hl-cell title="参数验证中间件"></hl-cell>
    <hl-field v-model="params.param1" label="param1必传:" placeholder="请输入任意值，为空则不传值"/>
    <hl-field v-model="params.param2" label="param2必传:" placeholder="请输入任意值，为空则不传值"/>
    <hl-field v-model="params.param3" label="param3必传:" placeholder="请输入任意值，为空则不传值"/>
    <hl-cell title="请求接口： /middlewareDemo">
      <template #right>
        <hl-button @click="send" size="normal">开始</hl-button>
      </template>
    </hl-cell>
    <hl-cell class="content-cell" :title="'当前参数：'+JSON.stringify(params)"></hl-cell>
    <hl-cell class="content-cell" :title="'返回结果：'+JSON.stringify(result)"></hl-cell>
  </div>
</template>

<script>
import { middlewareDemo } from '@/api'

export default {
  name: 'expressMiddleware',
  data() {
    return {
      params: {
        param1: undefined,
        param2: undefined,
        param3: undefined
      },
      result: null
    }
  },
  watch: {
    'params.param1'(val) {
      if (!val) {
        this.params.param1 = undefined
      }
    },
    'params.param2'(val) {
      if (!val) {
        this.params.param2 = undefined
      }
    },
    'params.param3'(val) {
      if (!val) {
        this.params.param3 = undefined
      }
    }
  },
  methods: {
    send() {
      middlewareDemo(this.params)
          .then(res => {
            this.result = res.data.message
          })
    }
  }
}
</script>

<style scoped lang="scss">
.express-middleware {
  ::v-deep .content-cell .hl-cell__title span {
    width: 100%;
    word-break: break-all;
  }
}
</style>
