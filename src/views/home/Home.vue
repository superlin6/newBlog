<template>
    <div class="home">
        <transition name="fadein" :appear="true">
            <div class="title" @click="showContent" v-show="!isShow">
                <h2 class="animate__animated animate__backInDown">欢迎进入</h2>
                <h3 class="animate__animated animate__fadeInUp">coderlin的blog</h3>
            </div>
        </transition>
        <transition name="fadein">
            <div class="content" v-show="isShow">
                <transition name="fadein">
                    <TopBackground v-show="!showBackground" />
                </transition>
                <div class="top">
                    <div class="left">
                        <TimeLine />
                    </div>
                    <div class="center">
                        <ToDoList />
                        <WeekTodo />
                    </div>
                    <div class="right">
                        <CircleChart />
                        <Progress />
                        
                    </div>
                </div>
                <div class="bottom">
                    <LineChart />
                </div>
                <transition name="fadein">
                    <ContentBackground v-show="showBackground" />
                </transition>
            </div>
        </transition>
        <Cube />
        <Windmill />
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onBeforeUnmount, Ref, ref, watch } from 'vue';
import { useMainStore, useLineChartStore } from '../../store';
import Cube from '../../components/content/animation/Cube.vue';
import Windmill from '../../components/content/animation/Windmill.vue';
import ToDoList from '../../components/content/todolist/ToDoList.vue';
import TimeLine from '../../components/content/timeline/TimeLine.vue';
import TopBackground from '../../components/content/background/TopBackground.vue';
import WeekTodo from '../../components/content/weektodo/WeekTodo.vue';
import ContentBackground from '../../components/content/background/ContentBackground.vue';
import Progress from '../../components/content/progress/Progress.vue';
import CircleChart from '../../components/content/circlechart/CircleChart.vue';
import LineChart from '../../components/content/linechart/LineChart.vue';


export default defineComponent({
    name: 'Home',
    components: {
    Cube,
    Windmill,
    ToDoList,
    TimeLine,
    TopBackground,
    WeekTodo,
    ContentBackground,
    Progress,
    CircleChart,
    LineChart
},
    setup() {
        const isShow: Ref<boolean> = ref(false)
        const showBackground: Ref<boolean> = ref(false)
        const mainStore = useMainStore()
        const lineChartStore = useLineChartStore()

        const titleDefaultColor = mainStore.todolistColor


        // 内容区
        const showContent = () => {
            isShow.value = true
        };
        // 滚动监听
        const setScrollEvent = () => {
            window.addEventListener('scroll', () => {
                showBackground.value = window.scrollY >= 460
                mainStore.setTitle(window.scrollY >= 460 ? '#fff' : titleDefaultColor)
                lineChartStore.setLineChartVisible(true)
            })
        }
        
        onMounted(() => {
            setScrollEvent()
        });

        onBeforeUnmount(() => {
            window.removeEventListener('scroll', () => {})
        });

        watch(() => isShow.value, (cur) => {
            mainStore.setTopBarVisible(cur)
        }, { immediate: true })

        return {
            isShow,
            showBackground,
            mainStore,
            showContent
        };
    }
});
</script>


<style lang="less" scoped>
.home {
    height: 100%;
    > .title {
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
        margin-top: 400px;
        padding: 100px 20px 50px;
        border: none;
        position: relative;
        .top {
            display: flex;
            .left, .right {
                flex: 1;
                padding-top: 79px;
            }
            .center {
                flex: 2;
            }
            .right {
                .el-calendar {   
                    width: 400px;
                    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%), 0 25px 50px 0 rgb(0 0 0 / 10%);
                    border-radius: 8px;
                    :deep(.el-calendar-table) .el-calendar-day{
                        // width: 40px;
                        height: 38px;
                    }
                }
            }
        }
        .bottom {
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
    // enter enter-active enter-to leave leave-active leave-to 
    .fadein-enter-active,
    .fadein-leave-active {
        transition: opacity 1s;
    }

    .fadein-enter-from,
    .fadein-leave-to {
        opacity: 0;
    }
    .fadein-leave-from {
        opacity: 1;
    }
}
</style>