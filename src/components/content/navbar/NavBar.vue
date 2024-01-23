<template>
    <el-menu
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        :router="true"
        :ellipsis="false"
        active-text-color="#ffd04b"
        :default-active="data.activeIndex"
        @select="switchTab"
        :class="{ nav: true, transparent: data.activeIndex === '/home' }"
        ref="menuRef"
    >
        <!-- <div class="menu-nav"> -->
            <el-menu-item index="/home">
                <Icon type="ios-paper" />
                主页
            </el-menu-item>
            <el-menu-item index="/picture">
                <Icon type="ios-people" />
                照片
            </el-menu-item>
        <!-- </div> -->
    </el-menu>
</template>

<script lang="ts" setup>
import { reactive, watch, ref, Ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const data = reactive({
    activeIndex: '/'
});
const switchTab = (path: string) => {
    router.push(path);
};
const menuRef: any = ref(null);
watch(() => route.path,
(cur, pre) => {
    data.activeIndex = cur;
}
);
</script>

<style lang="less" scoped>
.nav {
    background: url('../../../assets/img/content-background.jpeg');
    z-index: 1;
    &.ivu-menu {
        display: flex;
        justify-content: center;
        .menu-nav {
            overflow: hidden;
        }
    }
    &.transparent {
        background: transparent;
        outline: none;
        border: none;
    }
}
</style>