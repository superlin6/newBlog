import { defineStore } from 'pinia';
import variables from '../assets/css/var.module.less';
export const useMainStore = defineStore('main', {
    state: () => {
        return {
            timelineColor: variables.timelineColor,
            todolistColor: variables.todolistColor,
            weektodoColor: variables.weektodoColor,
            circleChartColor: variables.circleChartColor
        }
    },
    actions: {
        setTitle(varColor: string) {
            this.timelineColor = varColor
            this.todolistColor = varColor
            this.weektodoColor = varColor
            this.circleChartColor =  varColor
        }
    }
})