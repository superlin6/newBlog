import { defineStore } from 'pinia';
import variables from '../assets/css/var.module.less';
console.log('var', variables);
export const useMainStore = defineStore('main', {
    state: () => {
        return {
            timelineColor: variables.timelineColor,
            todolistColor: variables.todolistColor,
            weektodoColor: variables.weektodoColor
        }
    },
    actions: {
        setTitle(varColor: string) {
            this.timelineColor = varColor
            this.todolistColor = varColor
            this.weektodoColor = varColor
        }
    }
})