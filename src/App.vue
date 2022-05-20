<template>
  <nav-bar></nav-bar>
  <div class="view">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs, onBeforeMount, onMounted } from 'vue'
import { defineComponent } from 'vue'
// import Cube from './components/content/animation/Cube.vue'
// import NavBar from './components/content/navbar/NavBar.vue'
// import Beehive from './components/content/beehive/Beehive.vue'

export default defineComponent({
    // components: { Cube, NavBar, Beehive },
    name: 'App',
    setup() {
    // console.log('1-开始创建组件-setup')
        const data = reactive({})
        onBeforeMount(() => {
            // console.log('2.组件挂载页面之前执行----onBeforeMount')
        })
        onMounted(() => {
            // console.log('3.-组件挂载到页面之后执行-------onMounted')
        })
        return {
            ...toRefs(data)
        }
    }
})
</script>

<style lang="less" scoped>
  .view {
    height: calc(100vh - 61px);
  }
</style>