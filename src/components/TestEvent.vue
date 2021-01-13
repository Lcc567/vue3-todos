
<template>
  <div>123</div>
  <input type="text" :value="msg" @input="testInput" />
</template>

<script lang='ts'>
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    msg: String,
    msgModifiers: {
      default: () => ({}),
    },
  },
  setup(props, context) {
    const testInput = (e: any) => {
      const value = e.target.value;
      console.log("222", value);
      context.emit("update:msg", value);
    };

    console.log("22222333", props.msgModifiers);

    return {
      testInput,
    };
  },
});
</script>