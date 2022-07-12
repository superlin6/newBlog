import { defineStore } from 'pinia';
import variables from '../assets/css/var.module.less';
console.log('var', variables);
export const useMainStore = defineStore('main', {
    state: () => {
        return {
            timelineTitle: variables.timelineTitle,
            todolistTitle: variables.todolistTitle
        }
    },
    getters: {
        timelineTitle: (state) => state.timelineTitle,
        todolistTitle: (state) => state.todolistTitle
    },
    actions: {
        setTitle(varColor: string) {
            this.timelineTitle = varColor
            this.todolistTitle = varColor
        }
    }
})