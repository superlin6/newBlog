<template>
    <section class="todoapp">
        <header class="header">
            <input
                type="text"
                class="new-todo"
                placeholder="What needs to be done?"
                autocomplete="off"
                v-model="input"
                @keyup.enter="addTodo"
            />
        </header>
        <section class="main">
            <input
                id="toggle-all"
                class="toggle-all"
                type="checkbox"
                v-model="allDone"
            />
            <label for="toggle-all">Mark all as complete</label>
            <ul class="todo-list">
                <li
                    v-for="todo in filteredTodos"
                    :key="todo.text"
                    :class="{
                        editing: todo === editingTodo,
                        completed: todo.completed
                    }"
                >
                    <div class="view">
                        <input
                            type="checkbox"
                            class="toggle"
                            v-model="todo.completed"
                        />
                        <label @dblclick="editTodo(todo)">{{
                            todo.text
                        }}</label>
                        <button class="destroy" @click="remove(todo)"></button>
                    </div>
                    <input
                        v-editing-focus="todo === editingTodo"
                        type="text"
                        class="edit"
                        v-model="todo.text"
                        @keyup.enter="doneEdit(todo)"
                        @blur="doneEdit(todo)"
                        @keyup.esc="cancelEdit(todo)"
                    />
                </li>
            </ul>
        </section>
        <footer class="footer" v-show="count">
            <span class="todo-count">
                <strong>{{ remainingCount }}</strong>
                {{ remainingCount > 1 ? 'items' : 'item' }} left
            </span>
            <ul class="filters">
                <li>
                    <a :class="{ selected: type === 'all' }" href="#/all"
                        >All</a
                    >
                </li>
                <li>
                    <a :class="{ selected: type === 'active' }" href="#/active"
                        >Active</a
                    >
                </li>
                <li>
                    <a
                        :class="{ selected: type === 'completed' }"
                        href="#/completed"
                        >Completed</a
                    >
                </li>
            </ul>
            <span
                :class="{
                    'clear-completed': true,
                    show: count > remainingCount
                }"
                @click="removeCompleted"
                >Clear completed</span
            >
        </footer>
    </section>
</template>
 
<script lang="ts">
import useLocalStorage from '../../../utils/useLocalStorage';
import {
    defineComponent,
    ref,
    computed,
    onMounted,
    onUnmounted,
    watchEffect,
    Ref
} from 'vue';
import { TodoItemType, FilterType } from '../../../utils/type';

const storage = useLocalStorage();

// 1. 添加待办事项
const useAdd = (todos: Ref<Array<Object>>) => {
    const input = ref('');
    const addTodo = () => {
        const text = input.value?.trim();
        if (text.length === 0) return;
        todos.value.unshift({
            text,
            completed: false
        });
        input.value = '';
    };
    return {
        input,
        addTodo
    };
};

// 2. 删除待办事项
const useRemove = (todos: Ref<Array<TodoItemType>>) => {
    const remove = (todo: TodoItemType) => {
        const index = todos.value.indexOf(todo);
        todos.value.splice(index, 1);
    };

    const removeCompleted = () => {
        todos.value = todos.value.filter((todo: TodoItemType) => {
            return !todo.completed;
        });
    };
    return {
        remove,
        removeCompleted
    };
};

// 3. 编辑待办事项
const useEdit = (remove: Function) => {
    let beforeEditingText = '';
    const editingTodo: Ref<null | TodoItemType> = ref(null);

    const editTodo = (todo: TodoItemType) => {
        beforeEditingText = todo.text;
        editingTodo.value = todo;
    };
    const doneEdit = (todo: TodoItemType) => {
        if (!editingTodo.value) return;
        todo.text = todo.text.trim();
        if (todo.text === '') remove(todo);
        editingTodo.value = null;
    };
    const cancelEdit = (todo: TodoItemType) => {
        editingTodo.value = null;
        todo.text = beforeEditingText;
    };
    return {
        editingTodo,
        editTodo,
        doneEdit,
        cancelEdit
    };
};

// 4. 切换待办项完成状态
const useFilter = (todos: Ref<Array<TodoItemType>>) => {
    const allDone = computed({
        get: () => {
            return !todos.value.filter((item: TodoItemType) => !item.completed)
                .length;
        },
        set: (value) => {
            todos.value.forEach((todo: TodoItemType) => {
                todo.completed = value;
            });
        }
    });

    const filter = {
        all: (list: Array<TodoItemType>) => list,
        active: (list: Array<TodoItemType>) =>
            list.filter((todo: TodoItemType) => !todo.completed),
        completed: (list: Array<TodoItemType>) =>
            list.filter((todo: TodoItemType) => todo.completed)
    };
    const type = ref('all');
    const filteredTodos = computed(() =>
        filter[type.value as keyof FilterType](todos.value)
    );

    const remainingCount = computed(() => filter.active(todos.value).length);

    const count = computed(() => todos.value.length);

    const onHashChange = () => {
        const hash = window.location.hash.replace('#/', '');
        if (filter[hash as keyof FilterType]) {
            type.value = hash;
        } else {
            type.value = 'all';
            window.location.hash = '';
        }
    };

    onMounted(() => {
        window.addEventListener('hashchange', onHashChange);
        onHashChange();
    });

    onUnmounted(() => {
        window.removeEventListener('hashchange', onHashChange);
    });

    return {
        type,
        allDone,
        filteredTodos,
        remainingCount,
        count
    };
};

// 5. 存储待办事项
const useStorage = () => {
    const KEY = 'TODOKEYS';
    const todos: Ref<Array<TodoItemType>> = ref(storage.getItem(KEY) || []);
    watchEffect(() => {
        storage.setItem(KEY, todos.value);
    });
    return todos;
};

export default defineComponent({
    name: 'ToDoList',
    setup() {
        const todos: Ref<Array<TodoItemType>> = useStorage();
        const { remove, removeCompleted } = useRemove(todos);
        return {
            remove,
            removeCompleted,
            ...useAdd(todos),
            ...useEdit(remove),
            ...useFilter(todos)
        };
    },
    directives: {
        editingFocus: (el, binding) => {
            // binding可以获取到一些参数
            binding.value && el.focus();
        }
    }
});
</script>
 
<style lang="less" scoped>
button {
    margin: 0;
    padding: 0;
    border: 0;
    background: none;
    font-size: 100%;
    font-family: inherit;
    font-weight: inherit;
    color: inherit;
    -webkit-appearance: none;
    appearance: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

:focus {
    outline: 0;
}

.todoapp {
    display: inline-block;
    margin-left: 80px;
    width: 440px;
    border-radius: 8px;
    background: #fff;
    position: relative;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
}

.todoapp input::-webkit-input-placeholder {
    font-style: italic;
    font-weight: 300;
    color: #e6e6e6;
}

.todoapp input::-moz-placeholder {
    font-style: italic;
    font-weight: 300;
    color: #e6e6e6;
}

.todoapp input::input-placeholder {
    font-style: italic;
    font-weight: 300;
    color: #e6e6e6;
}

.new-todo,
.edit {
    position: relative;
    margin: 0;
    width: 100%;
    font-size: 24px;
    font-family: inherit;
    font-weight: inherit;
    line-height: 1.4em;
    border: 0;
    color: inherit;
    padding: 6px;
    border: 1px solid #999;
    box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.new-todo {
    padding: 16px 16px 16px 60px;
    border: none;
    background: rgba(0, 0, 0, 0.003);
    box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
}

.main {
    position: relative;
    border-top: 1px solid #e6e6e6;
    .toggle-all {
        width: 1px;
        height: 1px;
        border: none; /* Mobile Safari */
        opacity: 0;
        position: absolute;
        right: 100%;
        bottom: 100%;
        + label {
            width: 60px;
            height: 34px;
            font-size: 0;
            position: absolute;
            top: -52px;
            left: -13px;
            -webkit-transform: rotate(90deg);
            transform: rotate(90deg);
        }
    }
}

.toggle-all {
    + label:before {
        content: '❯';
        font-size: 22px;
        color: #e6e6e6;
        padding: 10px 27px 10px 27px;
    }
    &:checked {
        + label:before {
            color: #737373;
        }
    }
}

.todo-list {
    margin: 0;
    padding: 0;
    list-style: none;
    li {
        position: relative;
        font-size: 24px;
        border-bottom: 1px solid #ededed;
        &:last-child {
            border-bottom: none;
        }
        &:hover {
            .destroy {
                display: block;
            }
        }
        label {
            word-break: break-all;
            padding: 15px 15px 15px 60px;
            display: block;
            line-height: 1.2;
            transition: color 0.4s;
            text-align: left;
        }

        .toggle {
            text-align: center;
            width: 40px;
            /* auto, since non-WebKit browsers doesn't support input styling */
            height: auto;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            margin: auto 0;
            border: none; /* Mobile Safari */
            -webkit-appearance: none;
            appearance: none;
            opacity: 0;
            + label {
                background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E');
                background-repeat: no-repeat;
                background-position: center left;
            }
            &:checked {
                + label {
                    text-align: left;
                    background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E');
                }
            }
        }
        .destroy {
            display: none;
            position: absolute;
            top: 0;
            right: 10px;
            bottom: 0;
            width: 40px;
            height: 40px;
            margin: auto 0;
            font-size: 30px;
            color: #cc9a9a;
            margin-bottom: 11px;
            transition: color 0.2s ease-out;
            &:hover {
                color: #af5b5e;
            }
            &:after {
                content: '×';
            }
        }
        .edit {
            display: none;
        }
    }
    li.editing {
        border-bottom: none;
        padding: 0;
        &:last-child {
            margin-bottom: -1px;
        }
        .edit {
            display: block;
            width: calc(100% - 43px);
            padding: 12px 16px;
            margin: 0 0 0 43px;
        }
        .view {
            display: none;
        }
    }
    li.completed {
        label {
            color: #d9d9d9;
            text-decoration: line-through;
            text-align: left;
        }
    }
}

.footer {
    color: #777;
    padding: 10px 15px;
    text-align: center;
    border-top: 1px solid #e6e6e6;
    height: 50px;
    display: flex;
    justify-content: space-between;
    &::before {
        z-index: -1;
        content: '';
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        height: 50px;
        overflow: hidden;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6,
            0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6,
            0 17px 2px -6px rgba(0, 0, 0, 0.2);
    }
    .todo-count {
        float: left;
        text-align: left;
        strong {
            font-weight: 300;
        }
    }
    .filters {
        margin: 0;
        padding: 0;
        list-style: none;
        li {
            display: inline;
            a {
                color: inherit;
                margin: 3px;
                padding: 3px 7px;
                text-decoration: none;
                border: 1px solid transparent;
                border-radius: 3px;
                &:hover {
                    border-color: rgba(175, 47, 47, 0.1);
                }
            }
            a.selected {
                border-color: rgba(175, 47, 47, 0.2);
            }
        }
    }
    .clear-completed {
        cursor: pointer;
        visibility: hidden;
        &:active {
            position: relative;
            line-height: 20px;
            text-decoration: none;
        }
        &:hover {
            text-decoration: underline;
        }
    }
    .clear-completed.show {
        visibility: visible;
    }
}

.info {
    margin: 65px auto 0;
    color: #bfbfbf;
    font-size: 10px;
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
    text-align: center;
}

.info p {
    line-height: 1;
}

.info a {
    color: inherit;
    text-decoration: none;
    font-weight: 400;
}

.info a:hover {
    text-decoration: underline;
}

/*
	Hack to remove background from Mobile Safari.
	Can't use it globally since it destroys checkboxes in Firefox
*/
@media screen and (-webkit-min-device-pixel-ratio: 0) {
    .toggle-all,
    .todo-list li .toggle {
        background: none;
    }

    .todo-list li .toggle {
        height: 40px;
    }
}

@media (max-width: 430px) {
    .footer {
        height: 50px;
    }

    .filters {
        bottom: 10px;
    }
}
</style>
