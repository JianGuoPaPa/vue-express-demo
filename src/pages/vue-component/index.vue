<template>
  <div class="vue-component">
    <hl-cell :icon="assistiveTouchIcon" icon-position="beforeTitle" title="Assistive Touch"
             @click="turnOnAssistiveTouch">
    </hl-cell>
    <hl-cell :icon="navigatorIcon" icon-position="beforeTitle" title="Navigator" @click="turnOnNavigator"></hl-cell>
  </div>
</template>

<script>
export default {
  name: 'VueComponent',
  computed: {
    assistiveTouchIcon() {
      return this.$store.state.component.assistiveTouch.show ? 'circle_line_selected_big' : 'circle_big'
    },
    navigatorIcon() {
      return this.$store.state.component.navigator.show ? 'circle_line_selected_big' : 'circle_big'
    }
  },
  methods: {
    turnOnAssistiveTouch() {
      this.$store.commit('component/TOGGLE_ASSISTIVETOUCH')
    },
    turnOnNavigator() {
      this.$store.commit('component/TOGGLE_NAVIGATOR')
    }
  }
}
</script>

<style>
</style>
