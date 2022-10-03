<!-- todo: extract the wrapper div into a layout -->
<template>
  <div class="q-mx-auto" style="max-width: 18rem">
    <main>
      <section class="row q-gutter-md items-center justify-between">
        <q-btn label="Удалить" color="negative" @click="onDelete" />
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
    onDelete() {
      this.$q
        .dialog({
          title: 'Подтверждение',
          message: 'Вы уверены, что хотите удалить информацию о себе?',
          cancel: 'Отмена',
          ok: 'ОК',
          persistent: true,
        })
        .onOk(() => {
          this.$router.push('/profile');
        });
    },
    onSave() {
      this.$router.push('/profile');
    },
  },
});
</script>
