<template>
    <Menu
        mode="horizontal"
        theme="dark"
        active-name="/home"
        @on-select="switchTab"
        class="nav"
        ref="menuRef"
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
import { nextTick } from 'process';
import { reactive, watch, ref, Ref } from 'vue';
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
const menuRef: any = ref(null);
console.log(menuRef);
watch(
    () => route.path,
    (cur, pre) => {
        if (cur === '/home') {
            menuRef.value.className = 'nav transparent';
        } else {
            menuRef.value.className = 'nav';
        }
        data.activeIndex = cur;
    }
);
</script>

<style lang="less" scoped>
.nav {
    &.ivu-menu {
        display: flex;
        justify-content: center;
        .menu-nav {
            overflow: hidden;
        }
    }
    &.transparent {
        background: transparent;
    }
}
</style>