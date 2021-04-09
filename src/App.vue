<template>
  <div id="app" data-ratio="16:9">
    <Navigator/>
    <AssistiveTouch/>
    <router-view></router-view>
  </div>
</template>

<script>
import Navigator from '@/components/Navigator'
import AssistiveTouch from '@/components/AssistiveTouch'

export default {
  name: 'App',
  components: {
    Navigator,
    AssistiveTouch
  }
}
</script>

<style lang="scss">
#app {
  padding: 0.5rem;
}

a {
  text-decoration: none;
  color: #333;
}

.hl-collapse {
  margin-bottom: 1rem;
}

</style>
