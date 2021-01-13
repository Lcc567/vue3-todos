<template>
  <div>
    <!-- <TestEvent v-model:msg.cap="msg"></TestEvent> -->
    <!-- <div style="color: red">{{ msg }}</div> -->

    <!-- slot -->
    <!-- <TestSlot>
      <template v-slot:header> header </template>
      <template v-slot:footer> footer </template>
      <template v-slot:default="msg"> {{ msg }} - footer </template> -->
    <!-- 如果没有用<template v-slot:footer>包裹，则template外的所有内容都作为default的内容 -->
    <!-- default
      <div style="color: red">{{ msg }}</div> -->
    <!-- </TestSlot> -->

    <!-- <TestSlot v-slot="{ item }">
      {{ item }}
    </TestSlot> -->
    <!-- <template #default="user">{{ user.user.name }} {{ user.user.age }}</template> -->

    <!-- <template v-slot="item">
        <i class="fas fa-check"></i>
        <span class="green">{{ item.item }}</span>
      </template> -->
    <!-- <div>
      <button v-for="tab in tabs" :key="tab">{{ tab }}</button>
    </div> -->
    <KeepLiveDemo></KeepLiveDemo>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TestEvent from "@/components/TestEvent.vue";
import TestSlot from "@/components/TestSlot.vue";
import KeepLiveDemo from "@/components/KeepLiveDemo.vue";
export default defineComponent({
  name: "Test",
  provide: {
    userName: "John Doe",
  },
  data() {
    return {
      msg: "test",
      items: ["Feed a cat", "Buy milk"],
      tabs: ["home", "posts", "archive"],
    };
  },
  components: {
    TestEvent,
    TestSlot,
    KeepLiveDemo,
  },
});
</script>