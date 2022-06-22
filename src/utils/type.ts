import { Ref } from "vue";
export interface TodoItemType {
    text: string;
    completed: boolean;
}
export interface FilterType {
    all: Ref<Array<Object>>;
    active: Ref<Array<Object>>;
    completed: Ref<Array<Object>>;
}