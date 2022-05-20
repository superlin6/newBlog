<template>
    <div class="home">
        <transition name="fade">
            <div class="title" @click="showContent" v-if="!isShow">
                <h2 class="animate__animated animate__backInDown">欢迎进入</h2>
                <h3 ref="myname" class="name_desc hide">coderlin的blog</h3>
            </div>
        </transition>
        <transition name="fadein">
            <div class="content" v-if="isShow">
                <el-card>
                    <div class="timeline">
                        <div class="title">时间线（可滚动）</div>
                        <el-timeline>
                            <el-timeline-item v-for="item in timeList" :key="item.id" :timestamp="item.timestamp"
                                placement="top">
                                <el-card>
                                    <h4>{{ item.title }}</h4>
                                    <p>{{ item.commitInfo }}</p>
                                </el-card>
                            </el-timeline-item>
                        </el-timeline>
                    </div>
                </el-card>
            </div>
        </transition>
        <Cube />
        <Windmill />
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import Cube from '../../components/content/animation/Cube.vue'
import Windmill from '../../components/content/animation/Windmill.vue'
export default defineComponent({
    name: 'Home',
    components: {
        Cube,
        Windmill
    },
    setup() {
        const myname: Ref<HTMLElement | null> = ref(null);
        let isShow: Ref<Boolean> = ref(false);
        const timeList: Ref<Array<Object>> = ref([
            { id: 99, timestamp: '2022/5/20', title: 'update index page', commitInfo: 'coderlin committed' },
            { id: 98, timestamp: '2022/5/19', title: 'update index page', commitInfo: 'coderlin committed' },
            { id: 97, timestamp: '2022/5/18', title: 'update index page', commitInfo: 'coderlin committed' },
            { id: 96, timestamp: '2022/5/17', title: 'update index page', commitInfo: 'coderlin committed' },
            { id: 95, timestamp: '2022/5/16', title: 'update index page', commitInfo: 'coderlin committed' },
            { id: 94, timestamp: '2022/5/16', title: 'update index page', commitInfo: 'coderlin committed' },
            { id: 93, timestamp: '2022/5/16', title: 'update index page', commitInfo: 'coderlin committed' },
            { id: 92, timestamp: '2022/5/16', title: 'update index page', commitInfo: 'coderlin committed' },
            { id: 91, timestamp: '2022/5/16', title: 'update index page', commitInfo: 'coderlin committed' },
        ])

        const showContent = () => {
            isShow.value = true;
        }
        onMounted(() => {
            setTimeout(() => {
                myname.value.className = 'name_desc animate__animated animate__fadeInUp';
            }, 1000)
        })
        return {
            myname,
            isShow,
            showContent,
            timeList
        };
    }

})
</script>


<style lang="less">
.home {
    height: 100%;

    >.title {
        position: absolute;
        top: 40vh;
        left: 0;
        right: 0;
        text-align: center;
        font-family: 'yuan';
        cursor: pointer;

        h2 {
            font-size: 70px;
            margin-bottom: 20px;
        }

        .hide {
            display: none;
        }

    }

    .content {
        height: 100%;
        overflow: hidden;
        >.el-card {
            margin: 20px;

            .timeline {
                width: 16%;
                .title {
                    font-family: 'yuan';
                    margin-bottom: 10px;
                }
                .el-timeline {
                    height: 400px;
                    padding:10px;
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
        }

    }


    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 1s;
    }

    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }

    .fadein-enter-active,
    .fadein-leave-active {
        transition: opacity 1s;
    }

    .fadein-enter-from {
        opacity: 0;
    }

    .fadein-leave-to {
        opacity: 1;
    }
}
</style>