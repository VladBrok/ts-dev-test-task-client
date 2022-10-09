<template>
  <template v-if="info != null">
    <p class="label">{{ label }}</p>
    <p>{{ info }}</p>
  </template>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UserInfoRow',

  props: {
    info: {
      type: String,
      required: false,
    },
    label: {
      type: String,
      required: true,
    },
  },
});
</script>

<style>
.label {
  font-weight: 600;
}
</style>
