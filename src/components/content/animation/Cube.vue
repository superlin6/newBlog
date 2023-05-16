<template>
    <div ref="cube" class="cube" @click="toDisplayCube">
        
        <div v-for="item in data.cubeMapArr" :class="item.class">
            <img :src="item.src" alt="">
        </div>
    </div>
</template>

<script lang="ts">
import { reactive, onMounted, ref, defineComponent } from 'vue';
export default defineComponent({
    name: 'Cube',
    setup(props, context) {
        const data = reactive({
            displayCube: false,
            cubeMapArr: [
                { class: 'top', src: '' },
                { class: 'right', src: '' },
                { class: 'bottom', src: '' },
                { class: 'left', src: '' },
                { class: 'ahead', src: '' },
                { class: 'rear', src: '' },
            ]
        });

        const cube: any = ref(null);
        const toDisplayCube = () => {
            data.displayCube = !data.displayCube;

            cube.value.className = data.displayCube
                ? 'cube center-cube'
                : 'cube';
        };

        onMounted(() => {});
        return {
            data,
            toDisplayCube,
            cube
        };
    }
});
</script>

<style lang="less" scoped>
* {
    margin: 0;
    padding: 0;
}

.cube {
    width: 80px;
    height: 80px;
    position: fixed;
    right: 8vw;
    bottom: 10vh;
    transform-style: preserve-3d;
    transition: all 0.8s ease;
    animation: toshow 20s linear infinite;

    @keyframes toshow {
        0% {
            transform: rotateX(0deg) rotateY(0deg);
        }

        100% {
            transform: rotateX(360deg) rotateY(360deg);
        }
    }

    div {
        width: 80px;
        height: 80px;
        position: absolute;
        opacity: 0.6;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.6s ease;
        background-size: cover;
        background-repeat: no-repeat;

        &.top {
            // background-color: rgb(92, 235, 235);
            background-image: url('../../../../public/img/cube/cube1.jpeg');
            transform: rotateX(90deg) translateZ(40px);
        }

        &.right {
            // background-color: rgb(248, 248, 20);
            background-image: url('../../../../public/img/cube/cube2.jpg');
            transform: rotateY(90deg) translateZ(40px);
        }

        &.bottom {
            // background-color: rgb(163, 241, 163);
            background-image: url('../../../../public/img/3.jpeg');
            transform: rotateX(-90deg) translateZ(40px);
        }

        &.left {
            // background-color: rgb(253, 98, 98);
            background-image: url('../../../../public/img/4.jpeg');
            transform: rotateY(-90deg) translateZ(40px);
        }

        &.ahead {
            // background-color: rgb(248, 205, 124);
            background-image: url('../../../../public/img/2.jpeg');
            transform: rotateY(0deg) translateZ(40px);
        }

        &.rear {
            // background-color: rgb(212, 144, 243);
            background-image: url('../../../../public/img/4.jpeg');
            transform: rotateY(180deg) translateZ(40px);
        }
    }
}

.center-cube {
    bottom: 50% - 25px;
    right: 50% - 10px;
    width: 300px;
    height: 300px;
    transition: all 0.6s ease;

    div {
        width: 340px;
        height: 340px;
        transition: all 0.6s ease;
        opacity: 0.9;

        &.top {
            transform: rotateX(90deg) translateZ(170px);
        }

        &.right {
            transform: rotateY(90deg) translateZ(170px);
        }

        &.bottom {
            transform: rotateX(-90deg) translateZ(170px);
        }

        &.left {
            transform: rotateY(-90deg) translateZ(170px);
        }

        &.ahead {
            transform: rotateY(0deg) translateZ(170px);
        }

        &.rear {
            transform: rotateY(180deg) translateZ(170px);
        }
    }
}
</style>