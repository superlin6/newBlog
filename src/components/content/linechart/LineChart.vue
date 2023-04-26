<template>
    <div class="line-chart">
        <div id="line-chart-content" />
    </div>
</template>

<script setup lang="ts">
import echarts, { ECOption } from '../../../utils/echarts'
import { useLineChartStore } from '../../../store'

import { onMounted, watch } from 'vue'

const lineChartStore = useLineChartStore()

let myChart: any

const xAxisData: any = []
const data: any = []
const data2: any = []
for (let i = 0; i < 50; i++) {
    xAxisData.push(i)
    data.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5)
    data2.push((Math.sin(i / 5) * (i / 5 + 10) + i / 6) * 3)
}

const option: ECOption = {
    grid: {
        left: '5%',
        right: '5%'
    },
    xAxis: [
        {
            show: false,
            data: xAxisData
        }, 
        {
            show: false,
            data: xAxisData
        }
    ],
    
    visualMap: {
        type: 'continuous',  // 定义为连续型 visualMap
        min: 0,
        max: 50,
        inRange: {
            color: ['#4a657a', '#308e92', '#b1cfa5', '#f5d69f', '#f5898b', '#ef5055']
        },
        itemWidth: 0,
    },
    yAxis: {
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        }
    },
    series: [
        {
            // 阴影bar
            name: 'back',
            type: 'bar',
            data: data2,
            z: 1,
            itemStyle: {
                opacity: 0.4,
                borderRadius: 5,
                shadowBlur: 3,
                shadowColor: '#111',
            }
        }, 
        {
            name: 'front',
            type: 'bar',
            data,
            xAxisIndex: 1,
            z: 3,
            itemStyle: {
                borderRadius: 5,
            }
        }
    ],
    animation: true,
    animationEasing: 'elasticOut',
    animationEasingUpdate: 'elasticOut',
    animationDelay (idx: number) {
        return idx * 20
    },
    animationDelayUpdate (idx: number) {
        return idx * 20
    }
}

watch(() => lineChartStore.lineChartVisible, (cur, pre) => {
    if (cur) {
        if (!myChart) {
            myChart = echarts.init(document.getElementById('line-chart-content') as HTMLElement)
        }

        myChart.setOption(option)
    }
})

</script>

<style lang="less" scoped>
.line-chart {
    #line-chart-content {
        margin: 0 auto;
        width: 500px;
        height: 300px;
        margin-bottom: 30px;
    }
}
</style>