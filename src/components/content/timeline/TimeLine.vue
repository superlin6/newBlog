<template>
    <div class="timeline">
        <div class="title" :style="{ color: mainStore.timelineColor }">TimeLine</div>
        <el-skeleton 
            v-if="loading"
            :rows="10"
            animated
            :throttle="100"
        />
        <el-timeline v-else>
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
import { Ref, ref } from 'vue';
import { useMainStore } from '../../../store';
import { ElMessage } from 'element-plus';
import request from '../../../utils/request'

interface TimeListType {
    id: number;
    timestamp: string;
    title: string;
    commitInfo: string;
}
const loading = ref(false)
// const timeList: Ref<TimeListType[]> = ref([]);

const timeList: Ref<TimeListType[]> = ref([]);

const githubCommitAPI = '/api/repos/superlin6/newBlog/commits'
const mainStore = useMainStore();

const getGithubCommitData = () => {
    loading.value = true
    request.get(githubCommitAPI).then(res => {
        timeList.value = res.map(item => ({
            id: item?.node_id, 
            timeStamp: item?.commit?.author?.date,
            title: item?.commit?.message,
            commitInfo: item?.commit?.author?.name + ' committed'
        }))

        loading.value = false

    }).catch((err) => {
        ElMessage.error(err)
    })
}

getGithubCommitData()

</script>
<style lang="less" scoped>
.timeline {
    width: 300px;
    padding: 8px;
    margin-top: 79px;
    border: 1px solid rgb(240, 240, 240);
    border-radius: 8px;
    margin: 0 auto;

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