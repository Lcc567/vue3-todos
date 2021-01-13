
<template>
  <div>
    123
    <hello ></hello>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      tabs: ["home", "post", "archive"],
    };
  },
});
</script>