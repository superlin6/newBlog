<template>
  <el-menu
    :default-active="data.activeIndex"
    class="nav-bar"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="rgb(255,215,0)"
    router="true"
  >
    <el-menu-item index="/home">个人主页</el-menu-item>
    <el-sub-menu index="/aritcle">
      <template #title>文章分享</template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="3">趣味实验室</el-menu-item>
    <el-menu-item index="/picture">照片</el-menu-item>
  </el-menu>
</template>

<script lang="ts">
import { defineComponent, reactive, watch } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  setup() {
    const route = useRoute();
    let activeIndex:string = route.path;
    let data = reactive({
      activeIndex
    })
    watch(()=>route.path,(cur,pre)=>data.activeIndex = cur)
    return {
      data,
    };
  },
});
</script>

<style>
</style>