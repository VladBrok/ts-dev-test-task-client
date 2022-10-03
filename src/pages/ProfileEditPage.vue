<!-- todo: extract the wrapper div into a layout -->
<template>
  <div class="q-mx-auto" style="max-width: 18rem">
    <main>
      <section class="row q-gutter-md items-center justify-between">
        <q-btn label="Отмена" color="negative" @click="onCancel" />
        <q-btn label="Сохранить" color="primary" @click="onSave" />
      </section>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProfileEditPage',
  methods: {
    onCancel() {
      this.$router.push('/profile');
    },
    onSave() {
      this.$router.push('/profile');
    },
  },
});
</script>
