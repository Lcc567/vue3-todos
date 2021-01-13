
<template>
    <div>
        <a-input v-model:value="inputValue" placeholder="Basic usage" />
        <a-button type="primary" @click="addTodo(inputValue)">Primary</a-button>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, toRefs } from 'vue';
export default defineComponent({
    name: 'AddTodo',
    data() {
        return {
            inputValue: ''
        }
    },
    emits: ['setTodo'],
    setup(props, context) {

        function addTodo(inputValue: string) {
            context.emit('setTodo', {
                id: new Date().getTime(),
                value: inputValue
            })
        }

        return {
            addTodo
        }
    }
})
</script>