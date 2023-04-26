<template>
    <div class="week-todo" :style="{ color: mainStore.weektodoColor }">
        <div class="title">
            今天星期{{ dayToChiComputed }}
        </div>
        <div class="todo-wrapper">
            <div
                class="todo-item"
                v-for="(item, index) in todoList[curDay - 1]"
                :key="index"
            >
                {{ item }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { DAY_TO_CHINESE, DAY_TO_CHINESE_INTERFACE } from '../../../utils/constant'
import { computed, ref, Ref } from 'vue';
import { useMainStore } from '../../../store';
    const curDay: number = new Date().getDay(); // 0-6
    const todoList: Ref<Array<Array<string>>> = ref([
        ['一道leetcode', 'PS5', '周一总结', '钢琴'],
        ['一道leetcode', 'PS5', '周二总结', '钢琴'],
        ['一道leetcode', 'PS5', '周三总结', '钢琴'],
        ['一道leetcode', 'PS5', '周四总结', '钢琴'],
        ['一道leetcode', 'PS5', '周五总结', '钢琴','钢琴'],
        ['一道leetcode', 'PS5', '周六放假', '出去耍', '钢琴'],
        ['一道leetcode', 'PS5', '周日放假', '钢琴']
    ])
    const mainStore = useMainStore();

    const dayToChiComputed = computed(() => DAY_TO_CHINESE[curDay as unknown as keyof DAY_TO_CHINESE_INTERFACE] )
</script>

<style lang="less" scoped>
.week-todo {
    margin: 40px auto;
    width: 400px;
    padding: 20px;

    .title {
        padding: 0 10px 20px;
        text-align: center;
        font-size: 24px;
        font-family: 'yuan';
    }
    .todo-wrapper {
        padding: 0 60px 20px;
        .todo-item {
            line-height: 40px;
            text-align: center;
            border-bottom: 1px solid rgb(236, 236, 236);
        }
    }
}
</style>