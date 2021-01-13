
<template>
  <div class="about">
    <AddTodo @set-todo="setTodo"></AddTodo>
    <TodoItem :todoList="todoList"></TodoItem>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { Store, useStore } from "vuex";
import AddTodo from "@/components/AddTodo.vue";
import TodoItem from "@/components/TodoItem.vue";
import { IGlobalState } from "@/typings/index";
import { Todo } from "@/typings/about";
import { ADD_ITEM } from "@/store/action-types";

const useTodos = (store: Store<IGlobalState>) => {
  const todoList = computed(() => store.state.about.todoList);

  // 此处类型不明白为什么不能为Todo
  function setTodo(item: Todo) {
    store.commit(`about/${ADD_ITEM}`, item);
  }
  return {
    todoList,
    setTodo,
  };
};

export default defineComponent({
  name: "About",
  components: {
    AddTodo,
    TodoItem,
  },
  setup() {
    const store = useStore<IGlobalState>();
    // console.log(store.state.about.);

    const { todoList, setTodo } = useTodos(store);
    return {
      todoList,
      setTodo,
    };
  },
});
</script>
