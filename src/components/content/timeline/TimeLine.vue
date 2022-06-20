<template>
    <div class="timeline">
        <div class="title">时间线（可滚动）</div>
        <el-timeline>
            <el-timeline-item
                v-for="item in timeList"
                :key="item.id"
                :timestamp="item.timestamp"
                placement="top"
            >
                <el-card>
                    <h4>{{ item.title }}</h4>
                    <p>{{ item.commitInfo }}</p>
                </el-card>
            </el-timeline-item>
        </el-timeline>
    </div>
</template>

<script setup lang="ts">
import { defineComponent, ref } from 'vue';
const timeList: Ref<Array<Object>> = ref([
    {
        id: 99,
        timestamp: '2022/5/20',
        title: 'update index page',
        commitInfo: 'coderlin committed'
    },
    {
        id: 98,
        timestamp: '2022/5/19',
        title: 'update index page',
        commitInfo: 'coderlin committed'
    },
    {
        id: 97,
        timestamp: '2022/5/18',
        title: 'update index page',
        commitInfo: 'coderlin committed'
    },
    {
        id: 96,
        timestamp: '2022/5/17',
        title: 'update index page',
        commitInfo: 'coderlin committed'
    },
    {
        id: 95,
        timestamp: '2022/5/16',
        title: 'update index page',
        commitInfo: 'coderlin committed'
    },
    {
        id: 94,
        timestamp: '2022/5/16',
        title: 'update index page',
        commitInfo: 'coderlin committed'
    },
    {
        id: 93,
        timestamp: '2022/5/16',
        title: 'update index page',
        commitInfo: 'coderlin committed'
    },
    {
        id: 92,
        timestamp: '2022/5/16',
        title: 'update index page',
        commitInfo: 'coderlin committed'
    },
    {
        id: 91,
        timestamp: '2022/5/16',
        title: 'update index page',
        commitInfo: 'coderlin committed'
    }
]);
</script>
<style lang="less">
.timeline {
    width: 300px;
    padding: 8px;
    border: 1px solid rgb(240, 240, 240);
    border-radius: 8px;

    .title {
        font-family: 'yuan';
        margin-bottom: 10px;
    }

    .el-timeline {
        height: 400px;
        padding: 18px;
        overflow-y: auto;
        scrollbar-width: none;
        /* firefox */
        -ms-overflow-style: none;

        /* IE 10+ */
        &::-webkit-scrollbar {
            // chrome safari
            display: none;
        }
    }
}
</style>