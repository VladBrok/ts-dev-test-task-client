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

      <p class="label">Email:</p>
      <p>{{ email }}</p>

      <p class="label">Адрес:</p>
      <p>{{ address }}</p>

      <p class="label">Информация о себе:</p>
      <p>{{ info }}</p>
    </div>

    <div class="row q-gutter-xl items-center justify-center q-py-lg">
      <q-btn label="Выход" color="negative" @click="onExit" />
      <q-btn label="Редактировать" color="primary" @click="onEdit" />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UserInfo',
  async setup() {
    // fixme: dup
    await new Promise((res, rej) => {
      setTimeout(() => res(''), 1500);
    });

    return {
      name: 'Влад',
      phoneNumber: '+383838383',
      email: 'vlad@brok.com',
      address:
        'Definitionnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn and Usage. The word-wrap property allows long words to be able to be broken and wrap onto the next line. Show demo . Default value: normal. Inherited: yes. Animatable: no. Read about animatable.',
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
  overflow-wrap: anywhere;
}
</style>
