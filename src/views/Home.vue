<template>
  <div class="home">
    <HelloWorld id="hello" class="test" @test="change" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld
  },
  methods: {
    change() {
      console.log('change');
      
    }
  }
});
</script>
