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
                <div class="top">
                    <TimeLine />
                    <ToDoList />
                </div>
                <div class="bottom"></div>
            </div>
        </transition>
        <Cube />
        <Windmill />
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, Ref, ref } from 'vue';
import Cube from '../../components/content/animation/Cube.vue';
import Windmill from '../../components/content/animation/Windmill.vue';
import ToDoList from '../../components/content/todolist/ToDoList.vue';
import TimeLine from '../../components/content/timeline/TimeLine.vue';
export default defineComponent({
    name: 'Home',
    components: {
        Cube,
        Windmill,
        ToDoList,
        TimeLine
    },
    setup() {
        const myname: Ref<HTMLElement | null> = ref(null);
        const isShow: Ref<Boolean> = ref(false);

        const showContent = () => {
            isShow.value = true;
        };
        onMounted(() => {
            if (myname.value)
                myname.value.className =
                    'name_desc animate__animated animate__fadeInUp';
        });
        return {
            myname,
            isShow,
            showContent
        };
    }
});
</script>


<style lang="less">
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
        height: 100%;
        overflow: hidden;
        margin: 20px;
        height: calc(100% - 40px);
        .top {
            display: flex;
            align-items: center;
        }
        .bottom {
            display: flex;
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