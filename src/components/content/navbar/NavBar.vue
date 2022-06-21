<template>
    <Menu
        mode="horizontal"
        theme="dark"
        active-name="/home"
        @on-select="switchTab"
        class="nav"
    >
        <div class="menu-nav">
            <MenuItem name="/home">
                <Icon type="ios-paper" />
                主页
            </MenuItem>
            <MenuItem name="/picture">
                <Icon type="ios-people" />
                照片
            </MenuItem>
        </div>
    </Menu>
</template>

<script lang="ts" setup>
import { reactive, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const data = reactive({
    bgcStatus: true,
    activeIndex: '/'
});
const switchTab = (path: string) => {
    router.push(path);
};
watch(
    () => route.path,
    (cur, pre) => {
        data.activeIndex = cur;
    }
);
</script>

<style lang="less">
.nav.ivu-menu {
    display: flex;
    justify-content: center;
    .menu-nav {
        overflow: hidden;
    }
}
</style>