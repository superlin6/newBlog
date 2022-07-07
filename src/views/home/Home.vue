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
                <TopBackGround />
                <div class="top">
                    <div class="left">
                        <TimeLine />
                    </div>
                    <div class="center">
                        <ToDoList />
                    </div>
                    <div class="right">

                    </div>
                </div>
                <div class="bottom"></div>
                <img class="content-background" src="../../assets/img/topBackground.jpeg" v-show="showBackground" />
            </div>
        </transition>
        <Cube />
        <Windmill />
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onBeforeUnmount, Ref, ref } from 'vue';
import Cube from '../../components/content/animation/Cube.vue';
import Windmill from '../../components/content/animation/Windmill.vue';
import ToDoList from '../../components/content/todolist/ToDoList.vue';
import TimeLine from '../../components/content/timeline/TimeLine.vue';
import TopBackGround from '../../components/content/background/TopBackGround.vue';

export default defineComponent({
    name: 'Home',
    components: {
        Cube,
        Windmill,
        ToDoList,
        TimeLine,
        TopBackGround
    },
    setup() {
        const myname: Ref<HTMLElement | null> = ref(null);
        const isShow: Ref<Boolean> = ref(false);
        const showBackground: Ref<Boolean> = ref(false);

        const showContent = () => {
            isShow.value = true;
        };

        const setScrollEvent = () => {
            window.addEventListener('scroll', () => {
                console.log(window.scrollY);
            })
        }

        onMounted(() => {
            if (myname.value) {
                myname.value.className =
                    'name_desc animate__animated animate__fadeInUp';
            }
            setScrollEvent();

        });
        onBeforeUnmount(() => {
            window.removeEventListener('scroll', () => {});
        });
        return {
            myname,
            isShow,
            showBackground,
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
        padding: 520px 20px 20px;
        .top {
            display: flex;
            .left, .right {
                flex: 1;
            }
            .center {
                flex: 2;
            }
        }
        .bottom {
            display: flex;
        }
        &-background {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            top: 0;
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