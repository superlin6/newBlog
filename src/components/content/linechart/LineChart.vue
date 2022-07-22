<template>
    <div class="line-chart">
        <div id="line-chart-content" />
    </div>
</template>

<script setup lang="ts">
import echarts, { ECOption } from '../../../utils/echarts';
import { onMounted } from 'vue'


const xAxisData: any = []
const data: any = []
const data2: any = []
for (let i = 0; i < 50; i++) {
    xAxisData.push(i)
    data.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5)
    data2.push((Math.sin(i / 5) * (i / 5 + 10) + i / 6) * 3)
}

onMounted(() => {
    
    const myChart = echarts.init(document.getElementById('line-chart-content') as HTMLElement)
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
            min: 0,
            max: 50,
            inRange: {
                color: ['#4a657a', '#308e92', '#b1cfa5', '#f5d69f', '#f5898b', '#ef5055']
            }
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
            // {
            //     // 阴影bar
            //     name: 'back',
            //     type: 'bar',
            //     data: data2,
            //     z: 1,
            //     itemStyle: {
            //         opacity: 0.4,
            //         borderRadius: 5,
            //         shadowBlur: 3,
            //         shadowColor: '#111',
            //     }
            // }, 
            // {
            //     // 遮罩层
            //     name: 'Simulate Shadow',
            //     type: 'line',
            //     data,
            //     z: 2,
            //     showSymbol: false,
            //     animationDelay: 0,
            //     animationEasing: 'linear',
            //     animationDuration: 1400,
            //     lineStyle: {
            //         color: 'transparent'
            //     },
            //     // 遮罩层颜色
            //     areaStyle: {
            //         color: '#08263a',
            //         shadowBlur: 50,
            //         shadowColor: '#000'
            //     }
            // },
            {
                name: 'front',
                type: 'bar',
                data,
                xAxisIndex: 1,
                z: 3,
                itemStyle: {
                    borderRadius: 5
                }
            }
        ],
        animationEasing: 'elasticOut',
        animationEasingUpdate: 'elasticOut',
        animationDelay (idx: number) {
            return idx * 20
        },
        animationDelayUpdate (idx: number) {
            return idx * 20
        }
    }
    myChart.setOption(option)
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