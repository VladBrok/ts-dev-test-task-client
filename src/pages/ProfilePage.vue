<!-- todo: protect the page -->
<template>
  <Suspense>
    <div class="q-mx-auto" style="max-width: 30rem">
      <user-info />
    </div>
    <template #fallback>
      <div class="fullscreen row justify-center items-center">
        <q-spinner color="primary" size="5em" />
      </div>
    </template>
  </Suspense>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UserInfo from '../components/UserInfo.vue';

export default defineComponent({
  name: 'ProfilePage',
  components: { UserInfo },
});
</script>
