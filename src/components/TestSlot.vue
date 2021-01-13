<template>
  <!-- <div>
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot :item="item"></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div> -->
  <li v-for="item in items" :key="item">
    <slot :item="item"></slot>
  </li>
  {{userName}}
  <!-- <span>
    <slot :user="user">
    </slot>
  </span> -->
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "TestSlot",
  inject: ['userName'],
  data() {
    return {
      user: {
        name: "lee",
        age: 29,
      },
      items: ['lee', '29', 'chao']
    };
  },
  props: ["items"],
});
</script>