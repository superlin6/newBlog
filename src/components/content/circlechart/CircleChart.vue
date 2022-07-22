<template>
    <div class="circle-chart">
        <div id="circle-chart-content" />
    </div>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { useMainStore } from '../../../store';
import echarts, { ECOption } from '../../../utils/echarts';

const mainStore = useMainStore();

onMounted(() => {
    const myChart = echarts.init(document.getElementById('circle-chart-content') as HTMLElement)
    const option: ECOption = {
        series: [{
            type: 'pie',
            radius: [20, 120],
            itemStyle: {
                borderRadius: 6,
                borderColor: '#666'
            },
            label: {
                color: mainStore.circleChartColor
            },
            data: [
                { value: 40, name: 'rose 1' },
                { value: 38, name: 'rose 2' },
                { value: 32, name: 'rose 3' },
                { value: 30, name: 'rose 4' },
                { value: 28, name: 'rose 5' },
                { value: 26, name: 'rose 6' },
                { value: 22, name: 'rose 7' },
                { value: 18, name: 'rose 8' }
            ],
            roseType: 'area'
        }]
    }
    myChart.setOption(option)
})
watch(() => mainStore.circleChartColor,
(cur, pre) => {
    const myChart = echarts.init(document.getElementById('circle-chart-content') as HTMLElement)
    myChart.setOption({
        series: {
            label: {
                color: cur
            },
        }
    })
})
</script>

<style lang="less" scoped>
#circle-chart-content {
    width: 400px;
    height: 260px;
    margin-bottom: 30px;
}
</style>