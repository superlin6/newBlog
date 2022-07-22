<template>
    <Menu
        mode="horizontal"
        theme="dark"
        :active-name="data.activeIndex"
        @on-select="switchTab"
        :class="{ nav: true, transparent: data.activeIndex === '/home' }"
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