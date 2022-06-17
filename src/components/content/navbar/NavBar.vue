<template>
      <Menu mode="horizontal" theme="light" active-name="/home" @on-select="switchTab">
        <MenuItem name="/home">
            <Icon type="ios-paper" />
            主页
        </MenuItem>
        <MenuItem name="/picture">
            <Icon type="ios-people" />
            照片
        </MenuItem>
        <!-- <Submenu name="3">
            <template #title>
                <Icon type="ios-stats" />
                统计分析
            </template>
            <MenuGroup title="使用">
                <MenuItem name="3-1">新增和启动</MenuItem>
                <MenuItem name="3-2">活跃分析</MenuItem>
                <MenuItem name="3-3">时段分析</MenuItem>
            </MenuGroup>
            <MenuGroup title="留存">
                <MenuItem name="3-4">用户留存</MenuItem>
                <MenuItem name="3-5">流失用户</MenuItem>
            </MenuGroup>
        </Submenu> -->
    </Menu>
</template>

<script lang="ts" setup>
import { reactive, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const data = reactive({
    bgcStatus: true,
    activeIndex: '/'
})
const switchTab = (path: string) => {
    router.push(path)
}
watch(() => route.path, (cur, pre) => {
    data.activeIndex = cur
})

</script>

<style lang="less">
 .nav {
      display: flex;
      z-index: 1;
      width: 100%;
      height: 60px;
      background-color: rgba(242, 244, 248, 0);
    }

  .nav-active {
    position: fixed;
    display: flex;
    z-index: 9999;
    width: 100%;
    height: 60px;
    background-color: #2d2e30;
  }
</style>