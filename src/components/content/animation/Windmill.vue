<template>
    <div class="windmill">
        <div class="box_block">
            <div class="div1"></div>
            <div class="div2"></div>
            <div class="div3"></div>
            <div class="div4"></div>
            <div class="remove_blocks"></div>
        </div>
        <div class="stick"></div>
    </div>
</template>

<script lang="ts">
export default {

}
</script>

<style lang="less">
.windmill {
    position: fixed;
    left: 4vw;
    bottom: 15vh;
    margin: auto;

    .box_block {
        position: relative;
        width: 60px;
        height: 60px;
        margin: 0 auto;
        animation: Positive_rotation 4s linear infinite;
        opacity: .7;
        z-index: 1;
        /*正向旋转*/
        @keyframes Positive_rotation {
            from {
                transform: rotate(0deg);
            }

            to {
                transform: rotate(360deg);
            }
        }

        &:hover {
            animation: contrarotation .8s linear infinite;

            /*反向旋转*/
            @keyframes contrarotation {
                from {
                    transform: rotate(0deg)
                }

                to {
                    transform: rotate(-360deg)
                }
            }
        }

        .div1 {
            width: 0;
            height: 0;
            border: 15px solid #ffb02d;
            border-left-color: transparent;
            /*隐藏*/
            border-bottom-color: #3aa37a;
            float: left;
        }

        .div2 {
            width: 0;
            height: 0;
            border: 15px solid #ffcd35;
            border-top-color: transparent;
            border-right-color: #ee7a65;
            float: left;
        }

        .div3 {
            width: 0;
            height: 0;
            border: 15px solid #a0bd77;
            border-bottom-color: transparent;
            border-right-color: #5687e7;
            float: left;
        }

        .div4 {
            width: 0;
            height: 0;
            border: 15px solid #5697fe;
            border-right-color: transparent;
            border-top-color: #ee7a65;
            float: left;
        }
        .remove_blocks {
            clear: both;
        }
    }

    .stick {
        width: 5px;
        height: 80px;
        background: #666666;
        z-index: 0;
        left: 0;
        top: 80px;
        bottom: 0;
        right: 0;
        margin: auto;
        position: absolute;
        opacity: .4;
    }
}
</style>