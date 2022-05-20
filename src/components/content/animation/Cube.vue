<template>
  <div ref="cube" class="cube" @click="toDisplayCube">
    <div class="top">click me</div>
    <div class="right">click me</div>
    <div class="bottom">click me</div>
    <div class="left">click me</div>
    <div class="ahead">click me</div>
    <div class="rear">click me</div>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs, onBeforeMount, onMounted, ref, defineComponent } from "vue";
export default defineComponent({
  name: "Cube",
  setup(props, context) {
    const data = reactive({
      displayCube: false,
    });

    const cube: any = ref(null);
    const toDisplayCube = () => {
      data.displayCube = !data.displayCube;

      cube.value.className = data.displayCube ? "cube center-cube" : "cube";
    };

    onMounted(() => {
      console.log(context);
      console.log(cube);
    });
    return {
      data,
      toDisplayCube,
      cube,
    };
  },
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
  position: absolute;
  right: 8vw;
  bottom: 10vh;
  transform-style: preserve-3d;
  transition: all .8s ease;
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
    opacity: 0.4;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .8s ease;

    &.top {
      background-color: rgb(92, 235, 235);
      transform: rotateX(90deg) translateZ(40px);
    }

    &.right {
      background-color: rgb(248, 248, 20);
      transform: rotateY(90deg) translateZ(40px);
    }

    &.bottom {
      background-color: rgb(163, 241, 163);
      transform: rotateX(-90deg) translateZ(40px);
    }

    &.left {
      background-color: rgb(253, 98, 98);
      transform: rotateY(-90deg) translateZ(40px);
    }

    &.ahead {
      background-color: rgb(248, 205, 124);
      transform: rotateY(0deg) translateZ(40px);
    }

    &.rear {
      background-color: rgb(212, 144, 243);
      transform: rotateY(180deg) translateZ(40px);
    }
  }
}

.center-cube {
  bottom: 50% - 25px;
  right: 50% - 10px;
  width: 300px;
  height: 300px;
  transition: all .8s ease;

  div {
    width: 300px;
    height: 300px;
    transition: all .8s ease;

    &.top {
      transform: rotateX(90deg) translateZ(150px);
    }

    &.right {
      transform: rotateY(90deg) translateZ(150px);
    }

    &.bottom {
      transform: rotateX(-90deg) translateZ(150px);
    }

    &.left {
      transform: rotateY(-90deg) translateZ(150px);
    }

    &.ahead {
      transform: rotateY(0deg) translateZ(150px);
    }

    &.rear {
      transform: rotateY(180deg) translateZ(150px);
    }
  }
}
</style>