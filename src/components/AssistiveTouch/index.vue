<template>
    <vueDragResize class="assistive-touch" :y="initY" :isActive="true" :style="style" @clicked="handleClick" :isResizable="false">
        <div class="inner"></div>
    </vueDragResize>
</template>

<script>
import VueDragResize from 'vue-drag-resize'
import { mapState } from 'vuex'

export default {
    name: 'AssistiveTouch',
    components: {
        VueDragResize,
    },
    computed: {
        ...mapState({
            show: state => state.component.assistiveTouch.show,
            transition: state => state.component.assistiveTouch.transition,
        }),
        style() {
            return {
                opacity: this.show ? 1 : 0,
                transform: this.show ? 'scale(1)' : 'scale(0)',
                transition: this.transition
            }
        }
    },
    data() {
        return {
            initY: window.innerHeight / 2,
        }
    },
    methods: {
        handleClick(e) {
            console.log(e)
        }
    }
}
</script>

<style lang="scss" scoped>
.assistive-touch {
    position: fixed;
    width: 2.4rem !important;
    height: 2.4rem !important;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 1.2rem;
    transition: all linear;
    z-index: 100 !important;
    &::before {
        outline: none !important;
    }
    .inner {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 1.6rem;
        border-radius: 0.8rem;
        height: 1.6rem;
        transform: translate(-50%, -50%);
        background-color: rgba(0, 0, 0, 0.4);
    }
}
</style>