<template>
  <header>
    <h1 class="q-py-sm text-h5 text-center">Добро пожаловать!</h1>
  </header>
  <main class="container">
    <div class="grid">
      <p class="label">Имя:</p>
      <p>{{ name }}</p>

      <p class="label">Телефон:</p>
      <p>{{ phoneNumber }}</p>

      <p class="label">Адрес:</p>
      <p>{{ address }}</p>

      <p class="label">Информация о себе:</p>
      <p>{{ info }}</p>
    </div>
  </main>
  <div class="column q-gutter-md items-center q-mt-sm">
    <q-btn label="Редактировать" color="primary" @click="onEdit" />
    <q-btn label="Выход" color="negative" @click="onExit" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UserInfo',
  async setup() {
    await new Promise((res, rej) => {
      setTimeout(() => res(''), 1500);
    });

    return {
      name: 'Влад',
      phoneNumber: '+383838383',
      address:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ex, consequuntur ullam assumenda provident culpa voluptatem',
      info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ex, consequuntur ullam assumenda provident culpa voluptatem adipisci veritatis, itaque officiis aperiam enim aliquam dolore veniam quam molestias doloribus, accusamus similique?',
    };
  },

  methods: {
    onEdit() {
      this.$router.push('/profile/edit');
    },
    onExit() {
      this.$router.push('/log-in');
    },
  },
});
</script>

<style>
.grid {
  display: grid;
  grid-template-columns: max-content 1fr;
  row-gap: 0.6rem;
  column-gap: 1rem;
}

.label {
  font-weight: 600;
}

.container {
  margin-left: 4rem;
}
</style>
