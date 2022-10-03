<template>
  <div
    class="fullscreen text-h4 text-center column items-center justify-center"
  >
    <p>404</p>
    <p>Страница не найдена</p>
    <q-btn class="q-mt-xl" color="primary" to="/" label="На главную" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ErrorNotFound',
});
</script>
