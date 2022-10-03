<!-- todo: protect the page -->
<template>
  <div class="q-mx-auto" style="max-width: 18rem">
    <header>
      <h1 class="q-py-sm text-h5 text-center">Добро пожаловать!</h1>
    </header>

    <main>
      <section class="column q-gutter-md items-center">
        <q-btn label="Редактировать" color="primary" @click="onEdit"/>
        <q-btn label="Выход" color="negative" @click="onExit" />
      </section>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProfilePage',
  methods: {
    onEdit() {
      this.$router.push('/profile/edit')
    },
    onExit() {
      this.$router.push('/log-in');
    },
  },
});
</script>
