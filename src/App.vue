<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Notify } from 'quasar';

export default defineComponent({
  name: 'App',

  setup() {
    window.onunhandledrejection = (e) => {
      console.log(e.reason);
      Notify.create({
        type: 'negative',
        message:
          'Не удалось подключиться к серверу. Пожалуйста, повторите попытку позже',
      });
    };
  },
});
</script>
