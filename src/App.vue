<template>
    <nav-bar></nav-bar>
    <div class="view">
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
import { reactive, toRefs, onBeforeMount, onMounted } from 'vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'App',
    setup() {
        const data = reactive({});
        onBeforeMount(() => {
            // console.log('2.组件挂载页面之前执行----onBeforeMount')
        });
        onMounted(() => {
            // console.log('3.-组件挂载到页面之后执行-------onMounted')
        });
        return {
            ...toRefs(data)
        };
    }
});
</script>

<style lang="less" scoped>
.view {
    height: calc(100% - 60px);
}
</style>