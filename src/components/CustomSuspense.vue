<template>
  <Suspense>
    <div class="q-mx-auto" style="max-width: 30rem">
      <slot />
    </div>
    <template #fallback>
      <div class="fullscreen row justify-center items-center">
        <q-spinner color="primary" size="5em" :thickness="3" />
      </div>
    </template>
  </Suspense>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CustomSuspense',
});
</script>
