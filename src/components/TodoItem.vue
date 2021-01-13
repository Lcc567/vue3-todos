
<template>
    <a-list item-layout="horizontal" :data-source="todoList">
        <template #renderItem="{ item, index }">
            <a-list-item>
                {{item.value}}
            </a-list-item>
        </template>
    </a-list>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Todo } from '@/typings/about';
export default defineComponent({
    name: 'TodoItem',
    props: {
        todoList: Array as PropType<Todo[]>
    }
})
</script>